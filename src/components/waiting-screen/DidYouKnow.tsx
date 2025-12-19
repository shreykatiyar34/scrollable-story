import { Zap } from "lucide-react";

interface DidYouKnowProps {
  text: string;
}

const DidYouKnow = ({ text }: DidYouKnowProps) => {
  return (
    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
      <div className="flex items-start gap-2">
        <Zap className="w-4 h-4 text-primary mt-0.5" />
        <div>
          <span className="text-foreground font-semibold text-sm">Did you know?</span>
          <p className="text-muted-foreground text-sm mt-1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;
