
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Feedback Received",
        description: "Thank you for your feedback! We appreciate your input.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-8 px-4 md:py-12">
        <div className="mb-6">
          <Button variant="ghost" size="sm" className="flex items-center gap-1" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
        </div>
        
        <Card className="bg-background/80 backdrop-blur-sm p-6 md:p-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme-purple-light to-primary bg-clip-text text-transparent mb-6">
            We'd Love Your Feedback
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Your thoughts help us improve MoodMate. Please share your experience, suggestions, or report any issues you've encountered.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background min-h-[150px]"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </form>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
}
