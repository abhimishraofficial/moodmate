
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaUploader from "@/components/MediaUploader";
import MoodResults from "@/components/MoodResults";
import { detectEmotionFromImage, detectEmotionFromVoice, combineEmotionAnalysis, EmotionData } from "@/services/emotionDetection";
import { getSongRecommendations } from "@/services/songRecommendations";
import { getActivityRecommendations } from "@/services/activityRecommendations";
import { getQuoteRecommendation } from "@/services/quoteRecommendations";
import { getPersonalizedMessage } from "@/services/messageGenerator";
import { Card } from "@/components/ui/card";
import { Wand2, Music, Home } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stage, setStage] = useState<"intro" | "upload" | "results">("intro");
  const [results, setResults] = useState<{
    emotion: string;
    confidence?: number;
    message: string;
    songs: { name: string; artist: string; movie?: string; year?: number; link?: string; }[];
    activities: string[];
    quote: string;
  } | null>(null);
  const { toast } = useToast();

  const handleMediaCaptured = async (files: {photo?: File, voice?: File}, types: string[]) => {
    setIsAnalyzing(true);
    toast({
      title: "Analyzing your mood...",
      description: "This will just take a moment",
    });

    try {
      let emotionData: EmotionData;
      
      // Detect emotions based on the available media types
      if (types.includes("photo") && types.includes("voice")) {
        // Both photo and voice analysis
        const photoResult = await detectEmotionFromImage(files.photo!);
        const voiceResult = await detectEmotionFromVoice(files.voice!);
        
        // Combine the results for more accurate detection
        emotionData = await combineEmotionAnalysis(photoResult, voiceResult);
        
        toast({
          title: "Advanced analysis complete!",
          description: "Using both photo and voice for high accuracy.",
        });
      } else if (types.includes("photo")) {
        // Only photo analysis
        emotionData = await detectEmotionFromImage(files.photo!);
      } else {
        // Only voice analysis
        emotionData = await detectEmotionFromVoice(files.voice!);
      }
      
      // Generate content based on detected emotion
      const emotion = emotionData.emotion;
      const message = getPersonalizedMessage(emotion);
      const songs = getSongRecommendations(emotion, 10);
      const activities = getActivityRecommendations(emotion, 3);
      const quote = getQuoteRecommendation(emotion);
      
      // Set results
      setResults({
        emotion,
        confidence: emotionData.confidence,
        message,
        songs,
        activities,
        quote
      });
      
      // Update stage
      setStage("results");
    } catch (error) {
      console.error("Error analyzing media:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't analyze your mood. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setStage("upload");
    setResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-8 px-4 md:py-12 relative">
        {/* Background aurora effect */}
        <div className="absolute -z-10 inset-0 overflow-hidden opacity-30">
          <div className="aurora-container">
            <div className="aurora-1"></div>
            <div className="aurora-2"></div>
            <div className="aurora-3"></div>
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center gap-8">
          {stage === "intro" && (
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-8 flex justify-center">
                <div className="relative h-24 w-24 purple-gradient rounded-full flex items-center justify-center shadow-glow">
                  <Music className="h-12 w-12 text-primary-foreground" />
                  <div className="absolute -top-2 -right-2 h-8 w-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="animate-wave inline-block">👋</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-4">
                Welcome to MoodMate
              </h1>
              
              <p className="text-xl mb-8 text-muted-foreground">
                Hi friend! 😊 Upload a photo or voice clip and I'll sense your mood... 
                then send you some good vibes with Bollywood music 💖🎶
              </p>
              
              <Card
                className="p-8 emotion-card max-w-2xl mx-auto cursor-pointer hover:shadow-glow transition-all"
                onClick={() => setStage("upload")}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wand2 className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-medium text-center">
                    Click to get started
                  </h2>
                  <p className="text-muted-foreground text-center">
                    I'll analyze your expression or voice to understand how you're feeling today
                  </p>
                </div>
              </Card>
            </div>
          )}
          
          {stage === "upload" && (
            <div className="w-full max-w-2xl">
              <div className="mb-6">
                <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => setStage("intro")}>
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Button>
              </div>
              <h2 className="text-2xl font-bold text-center mb-8">Let's check your mood</h2>
              <MediaUploader onMediaCaptured={handleMediaCaptured} />
            </div>
          )}
          
          {stage === "results" && results && (
            <div className="w-full max-w-3xl">
              <div className="mb-6">
                <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={() => setStage("intro")}>
                  <Home className="h-4 w-4" />
                  Go to Homepage
                </Button>
              </div>
              <MoodResults
                emotion={results.emotion}
                confidence={results.confidence}
                message={results.message}
                songs={results.songs}
                activities={results.activities}
                quote={results.quote}
                onReset={handleReset}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
