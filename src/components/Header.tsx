
import { Music } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center border-b border-theme-purple/20 backdrop-blur-sm bg-background/70 z-10 sticky top-0">
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10 purple-gradient rounded-full flex items-center justify-center shadow-glow">
          <Music className="h-5 w-5 text-white" />
        </div>
        <h1 className="text-2xl font-bold font-display bg-gradient-to-r from-theme-purple-light to-primary bg-clip-text text-transparent">
          <Link to="/">MoodMate</Link>
        </h1>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="ghost" className="text-foreground/80 hover:text-primary hover:bg-background" asChild>
          <Link to="/about">About</Link>
        </Button>
        <Button size="sm" variant="ghost" className="text-foreground/80 hover:text-primary hover:bg-background" asChild>
          <Link to="/feedback">Feedback</Link>
        </Button>
      </div>
    </header>
  );
}
