
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t border-theme-purple/10">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 fill-primary text-primary animate-pulse" /> for music lovers
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/feedback" className="hover:text-primary transition-colors">Feedback</Link>
        </div>
      </div>
    </footer>
  );
}
