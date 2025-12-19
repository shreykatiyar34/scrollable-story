import { Camera } from "lucide-react";

const ProctoringSection = () => {
  return (
    <div className="bg-card rounded-xl p-8 border border-border flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3">
        <Camera className="w-8 h-8 text-muted-foreground" />
      </div>
      <span className="text-muted-foreground text-sm">Proctoring Active</span>
    </div>
  );
};

export default ProctoringSection;
