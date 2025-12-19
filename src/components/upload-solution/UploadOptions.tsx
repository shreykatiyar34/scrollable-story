import { Camera, Sparkles, ChevronRight } from "lucide-react";

interface UploadOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const UploadOption = ({ icon, title, description, onClick }: UploadOptionProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl p-4 border border-border flex items-center justify-between hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <h4 className="text-foreground font-medium">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </button>
  );
};

const UploadOptions = () => {
  return (
    <div className="space-y-3 mb-6">
      <UploadOption
        icon={<Camera className="w-4 h-4 text-muted-foreground" />}
        title="Take Photo"
        description="Use your camera"
        onClick={() => console.log("Take photo")}
      />
      <UploadOption
        icon={<Sparkles className="w-4 h-4 text-purple-400" />}
        title="AI Scanner"
        description="Auto-enhance quality"
        onClick={() => console.log("AI Scanner")}
      />
    </div>
  );
};

export default UploadOptions;
