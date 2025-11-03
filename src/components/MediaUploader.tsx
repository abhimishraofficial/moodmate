
import { useState, useRef, useEffect } from "react";
import { Camera, Mic, Upload, X, Check, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

type MediaType = "photo" | "voice" | "both" | null;

interface MediaUploaderProps {
  onMediaCaptured: (files: {photo?: File, voice?: File}, types: string[]) => void;
}

export default function MediaUploader({ onMediaCaptured }: MediaUploaderProps) {
  const [selectedType, setSelectedType] = useState<MediaType>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [voicePreviewUrl, setVoicePreviewUrl] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [voiceFile, setVoiceFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const photoInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const { toast } = useToast();

  // Simulate progress bar
  useEffect(() => {
    if (analyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 95) {
            clearInterval(interval);
            return prev;
          }
          return prev + 5;
        });
      }, 200);
      
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [analyzing]);

  const handleTypeSelect = (type: MediaType) => {
    setSelectedType(type);
    setPhotoPreviewUrl(null);
    setVoicePreviewUrl(null);
    setPhotoFile(null);
    setVoiceFile(null);
    
    if (type === "photo") {
      photoInputRef.current?.click();
    } else if (type === "voice") {
      startRecording();
    } else if (type === "both") {
      photoInputRef.current?.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setPhotoFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPhotoPreviewUrl(url);
      
      // If in "both" mode, prompt for voice after photo is selected
      if (selectedType === "both" && !voiceFile) {
        toast({
          title: "Photo uploaded!",
          description: "Now record your voice for better emotion detection.",
        });
      }
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioFile = new File([audioBlob], "recording.wav", { type: 'audio/wav' });
        setVoiceFile(audioFile);
        const url = URL.createObjectURL(audioBlob);
        setVoicePreviewUrl(url);
        setIsRecording(false);
        stream.getTracks().forEach(track => track.stop());
        
        // If in "both" mode and photo is already selected, we're good to go
        if (selectedType === "both" && photoFile) {
          toast({
            title: "All set!",
            description: "You can now analyze your mood with both inputs.",
          });
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      
      // Start timer for recording
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        title: "Microphone error",
        description: "Unable to access your microphone. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const handleReset = () => {
    setSelectedType(null);
    setPhotoPreviewUrl(null);
    setVoicePreviewUrl(null);
    setPhotoFile(null);
    setVoiceFile(null);
    if (isRecording) {
      stopRecording();
    }
  };

  const handleSubmit = () => {
    setAnalyzing(true);
    
    // Determine which media types we're analyzing
    const types: string[] = [];
    if (photoFile) types.push("photo");
    if (voiceFile) types.push("voice");
    
    if (types.length === 0) {
      toast({
        title: "No media selected",
        description: "Please select a photo or record your voice first.",
        variant: "destructive"
      });
      setAnalyzing(false);
      return;
    }
    
    // After a slight delay to show the animation
    setTimeout(() => {
      onMediaCaptured(
        { 
          photo: photoFile || undefined, 
          voice: voiceFile || undefined 
        }, 
        types
      );
      setProgress(100);
      // Reset after submission
      setTimeout(() => {
        setAnalyzing(false);
      }, 500);
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="w-full">
      <input 
        type="file" 
        ref={photoInputRef} 
        accept="image/*" 
        className="hidden" 
        onChange={handleFileChange}
      />
      
      {!selectedType ? (
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-xl font-medium text-center">
            How would you like to share your mood?
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <Card
              onClick={() => handleTypeSelect("photo")}
              className="h-36 w-44 flex flex-col gap-2 p-4 rounded-2xl 
                       border border-theme-purple/20 transition-all duration-300
                       hover:border-theme-purple/40 hover:shadow-glow cursor-pointer"
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Upload Photo</span>
                <span className="text-xs text-muted-foreground">Analyze facial expression</span>
              </div>
            </Card>
            
            <Card
              onClick={() => handleTypeSelect("voice")}
              className="h-36 w-44 flex flex-col gap-2 p-4 rounded-2xl 
                       border border-theme-purple/20 transition-all duration-300
                       hover:border-theme-purple/40 hover:shadow-glow cursor-pointer"
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Voice Recording</span>
                <span className="text-xs text-muted-foreground">Analyze voice emotion</span>
              </div>
            </Card>
            
            <Card
              onClick={() => handleTypeSelect("both")}
              className="h-36 w-44 flex flex-col gap-2 p-4 rounded-2xl 
                       border border-theme-purple/30 transition-all duration-300
                       hover:border-theme-purple/60 hover:shadow-glow cursor-pointer
                       bg-gradient-to-br from-primary/10 to-secondary/10"
            >
              <div className="flex-1 flex flex-col items-center justify-center gap-2">
                <div className="h-10 w-10 rounded-full purple-gradient flex items-center justify-center">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <span className="font-medium">Both</span>
                <span className="text-xs text-muted-foreground">Most accurate analysis</span>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="p-6 relative emotion-card">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleReset}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-lg font-medium">
              {selectedType === "photo" 
                ? "Your Photo" 
                : selectedType === "voice" 
                  ? "Your Voice Recording"
                  : "Your Photo & Voice"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {/* Photo Section */}
              {(selectedType === "photo" || selectedType === "both") && (
                <div className="flex flex-col items-center gap-3">
                  {photoPreviewUrl ? (
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border">
                      <img 
                        src={photoPreviewUrl} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer"
                         onClick={() => photoInputRef.current?.click()}>
                      <Camera className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload photo</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Voice Section */}
              {(selectedType === "voice" || selectedType === "both") && (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full border border-border rounded-xl p-4 flex flex-col items-center gap-3">
                    {isRecording ? (
                      <div className="flex flex-col items-center gap-2 w-full">
                        <div className="flex gap-2 items-center">
                          <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                          <span>Recording... {formatTime(recordingTime)}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={stopRecording} 
                          className="mt-2"
                        >
                          Stop Recording
                        </Button>
                      </div>
                    ) : voicePreviewUrl ? (
                      <div className="w-full">
                        <audio src={voicePreviewUrl} controls className="w-full" />
                      </div>
                    ) : (
                      <div className="py-4 flex justify-center w-full">
                        <Button 
                          onClick={startRecording}
                          className="flex items-center gap-2"
                        >
                          <Mic className="h-4 w-4" />
                          Start Recording
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Analysis Button */}
            {((selectedType === "photo" && photoPreviewUrl) || 
             (selectedType === "voice" && voicePreviewUrl) ||
             (selectedType === "both" && photoPreviewUrl && voicePreviewUrl)) && (
              <div className="pt-2 w-full">
                {analyzing ? (
                  <div className="w-full space-y-2">
                    <Progress value={progress} className="w-full h-2" />
                    <p className="text-sm text-center text-muted-foreground">Analyzing your mood...</p>
                  </div>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    className="w-full glow-btn text-white"
                  >
                    Analyze My Mood
                    <Upload className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
