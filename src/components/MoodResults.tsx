
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Heart, Music, PlayCircle, Quote, Calendar, RefreshCw, Youtube, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodResultsProps {
  emotion: string;
  confidence?: number;
  message: string;
  songs: {
    name: string;
    artist: string;
    movie?: string; 
    year?: number;
    link?: string;
  }[];
  activities: string[];
  quote: string;
  onReset: () => void;
}

export default function MoodResults({
  emotion,
  confidence,
  message,
  songs,
  activities,
  quote,
  onReset,
}: MoodResultsProps) {
  const [expandedMessage, setExpandedMessage] = useState(false);

  // Map emotion to tailwind color
  const getEmotionColor = (emotion: string) => {
    const emotionMap: Record<string, string> = {
      happy: "bg-mood-happy text-black",
      sad: "bg-mood-sad text-black",
      angry: "bg-mood-angry text-white",
      anxious: "bg-mood-anxious text-black",
      tired: "bg-mood-tired text-black",
      excited: "bg-mood-excited text-black",
      neutral: "bg-mood-neutral text-black",
      relaxed: "bg-blue-400 text-white",
      romantic: "bg-pink-400 text-white",
      motivated: "bg-amber-500 text-white",
      surprised: "bg-purple-400 text-white"
    };
    
    return emotionMap[emotion.toLowerCase()] || "bg-mood-neutral text-black";
  };

  const getEmoji = (emotion: string) => {
    const emojiMap: Record<string, string> = {
      happy: "😊",
      sad: "😢",
      angry: "😠",
      anxious: "😰",
      tired: "😴",
      excited: "🤩",
      neutral: "😐",
      relaxed: "😌",
      romantic: "😍",
      motivated: "💪",
      surprised: "😲"
    };
    
    return emojiMap[emotion.toLowerCase()] || "😐";
  };

  const formatConfidence = (confidence?: number) => {
    if (!confidence) return "";
    return Math.round(confidence * 100) + "%";
  };
  
  // Group songs into rows for better display
  const songRows = [];
  for (let i = 0; i < songs.length; i += 2) {
    const row = songs.slice(i, i + 2);
    songRows.push(row);
  }

  return (
    <div className="flex flex-col gap-6 w-full relative">
      {/* Floating stars/particles animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="stars-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.4 + Math.random() * 0.6
              }}
            >
              <Star 
                size={6 + Math.random() * 10} 
                className="text-primary animate-pulse-soft" 
                fill="currentColor" 
              />
            </div>
          ))}
        </div>
      </div>
    
      <div className="flex flex-col items-center gap-2">
        <div className={`text-center px-6 py-3 rounded-full text-lg font-medium ${getEmotionColor(emotion)}`}>
          Detected Mood: {emotion} {getEmoji(emotion)} 
          {confidence && <span className="ml-2 text-xs opacity-80">({formatConfidence(confidence)})</span>}
        </div>
      </div>

      <Card className="p-6 relative emotion-card overflow-hidden">
        {/* Soft glowing accent in corner */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
        
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" /> 
          <span>Personal Message</span>
        </h3>
        <p className={`text-muted-foreground ${!expandedMessage && 'line-clamp-4'}`}>
          {message}
        </p>
        {message.length > 300 && (
          <Button 
            variant="link" 
            className="p-0 h-auto mt-1" 
            onClick={() => setExpandedMessage(!expandedMessage)}
          >
            {expandedMessage ? "Read less" : "Read more"}
          </Button>
        )}
      </Card>

      <Tabs defaultValue="songs" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="songs" className="flex items-center gap-1">
            <Music className="h-4 w-4" />
            <span className="hidden sm:inline">Songs</span>
          </TabsTrigger>
          <TabsTrigger value="activities" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Activities</span>
          </TabsTrigger>
          <TabsTrigger value="quote" className="flex items-center gap-1">
            <Quote className="h-4 w-4" />
            <span className="hidden sm:inline">Quote</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="songs" className="mt-4">
          <div className="flex flex-col gap-3">
            {songRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {row.map((song, index) => (
                  <div key={index} className="song-card group">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Music className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{song.name}</h4>
                      <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                      {song.movie && (
                        <p className="text-xs text-muted-foreground/80 truncate">
                          {song.movie} {song.year && `(${song.year})`}
                        </p>
                      )}
                    </div>
                    {song.link && (
                      <a 
                        href={song.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors shrink-0"
                      >
                        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full 
                                      group-hover:bg-primary/20 transition-colors">
                          <Youtube className="h-4 w-4" />
                          <span className="text-xs hidden sm:inline">Play</span>
                        </div>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="activities" className="mt-4">
          <Card className="emotion-card overflow-hidden">
            <CardContent className="p-5 pt-6">
              <h3 className="text-lg font-medium mb-4">Mood-Lifting Activities</h3>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="h-6 w-6 rounded-full purple-gradient flex items-center justify-center mt-0.5 shrink-0">
                      <span className="text-xs font-medium text-white">{index + 1}</span>
                    </div>
                    <span className="group-hover:text-primary/90 transition-colors">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="quote" className="mt-4">
          <Card className="emotion-card overflow-hidden">
            <CardContent className="p-6 pt-8">
              <blockquote className="text-lg italic text-center px-6 relative">
                <div className="absolute -top-2 left-0 text-4xl text-primary/30">"</div>
                <div className="relative z-10">{quote}</div>
                <div className="absolute -bottom-4 right-0 text-4xl text-primary/30">"</div>
              </blockquote>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-2">
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={onReset}
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
