import { Button } from "@/components/ui/button";

interface UploadFooterProps {
  onSaveDraft: () => void;
  onEvaluate: () => void;
  hasFiles: boolean;
}

const UploadFooter = ({ onSaveDraft, onEvaluate, hasFiles }: UploadFooterProps) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        onClick={onSaveDraft}
        className="bg-muted border-border text-foreground hover:bg-muted/80"
      >
        Save as Draft
      </Button>
      <Button
        onClick={onEvaluate}
        disabled={!hasFiles}
        className="bg-muted text-muted-foreground border border-border hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Evaluate Solution
      </Button>
    </div>
  );
};

export default UploadFooter;
