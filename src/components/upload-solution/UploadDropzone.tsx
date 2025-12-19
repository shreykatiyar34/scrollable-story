import { Upload, Image, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";

interface UploadDropzoneProps {
  onFilesSelected: (files: File[]) => void;
}

const UploadDropzone = ({ onFilesSelected }: UploadDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesSelected(files);
  }, [onFilesSelected]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      onFilesSelected(files);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Upload className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-foreground font-semibold">Upload Solution Sheet</h3>
          <p className="text-muted-foreground text-sm">Upload images or PDFs of your handwritten solutions</p>
        </div>
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <Upload className="w-6 h-6 text-primary" />
        </div>
        <p className="text-foreground font-semibold mb-1">Drag & drop your files here</p>
        <p className="text-muted-foreground text-sm mb-4">or click to browse from your device</p>
        
        <div className="flex items-center justify-center gap-3 mb-4">
          <label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileInput}
            />
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <Image className="w-4 h-4 mr-2" />
                Images
              </span>
            </Button>
          </label>
          <label>
            <input
              type="file"
              accept=".pdf"
              multiple
              className="hidden"
              onChange={handleFileInput}
            />
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <FileText className="w-4 h-4 mr-2" />
                PDF
              </span>
            </Button>
          </label>
        </div>
        
        <p className="text-muted-foreground text-xs">Maximum file size: 10MB per file</p>
      </div>
    </div>
  );
};

export default UploadDropzone;
