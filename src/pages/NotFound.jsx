import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary animate-pulse-subtle">
          <Compass size={56} />
        </div>
        <h1 className="text-6xl font-extrabold text-gradient">404</h1>
        <h2 className="text-2xl font-bold">Lost in the Cosmos</h2>
        <p className="text-sm text-muted-foreground">
          The coordinate you are searching for does not exist in this galaxy or has drifted out of orbit.
        </p>
        <div className="pt-2">
          <Link to="/" className="cosmic-button inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Return to Orbit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

