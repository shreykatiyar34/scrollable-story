import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadHeader from "@/components/upload-solution/UploadHeader";
import QuestionDisplay from "@/components/upload-solution/QuestionDisplay";
import UploadDropzone from "@/components/upload-solution/UploadDropzone";
import UploadOptions from "@/components/upload-solution/UploadOptions";
import TipsSection from "@/components/upload-solution/TipsSection";
import UploadFooter from "@/components/upload-solution/UploadFooter";
import { toast } from "@/hooks/use-toast";

const UploadSolution = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleBack = () => {
    navigate("/test");
  };

  const handleFilesSelected = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
    toast({
      title: "Files uploaded",
      description: `${files.length} file(s) added successfully`,
    });
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your solution has been saved as a draft",
    });
  };

  const handleEvaluate = () => {
    toast({
      title: "Evaluating solution",
      description: "Your solution is being evaluated...",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <UploadHeader questionNumber={1} marks={5} onBack={handleBack} />

        <QuestionDisplay question="A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC." />

        <UploadDropzone onFilesSelected={handleFilesSelected} />

        <UploadOptions />

        <TipsSection />

        <UploadFooter
          onSaveDraft={handleSaveDraft}
          onEvaluate={handleEvaluate}
          hasFiles={uploadedFiles.length > 0}
        />
      </div>
    </div>
  );
};

export default UploadSolution;
