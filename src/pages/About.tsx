
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
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
        
        <div className="bg-background/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-theme-purple-light to-primary bg-clip-text text-transparent mb-6">
            About MoodMate
          </h1>
          
          <div className="space-y-6 text-left">
            <section>
              <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground">
                MoodMate was created with a simple goal: to help people connect with music that resonates with their current emotional state. We believe that the right song at the right moment can provide comfort, inspiration, and a sense of being understood.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">How It Works</h2>
              <p className="text-muted-foreground">
                MoodMate uses advanced emotion recognition technology to analyze your expressions or voice. Our specially designed algorithm then matches your emotional state with carefully curated music recommendations, activities, and uplifting quotes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Our Team</h2>
              <p className="text-muted-foreground">
                We're a small team of music enthusiasts, technology lovers, and emotional wellbeing advocates. We combine our passion for music and technology to create an experience that brightens your day and helps you find the perfect soundtrack for every mood.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
