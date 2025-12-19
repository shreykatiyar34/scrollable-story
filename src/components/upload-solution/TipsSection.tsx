import { Info } from "lucide-react";

const TipsSection = () => {
  const tips = [
    "Ensure your handwriting is clear and legible",
    "Use good lighting when taking photos",
    "Keep the entire solution within the frame",
    "Upload multiple pages if your solution is long",
  ];

  return (
    <div className="bg-card rounded-xl p-4 border border-border mb-6">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-primary mt-0.5" />
        <div>
          <h4 className="text-foreground font-semibold mb-2">Tips for Best Results</h4>
          <ul className="space-y-1">
            {tips.map((tip, index) => (
              <li key={index} className="text-muted-foreground text-sm">
                • {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
