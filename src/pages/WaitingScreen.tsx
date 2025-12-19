import { useState, useEffect } from "react";
import { CheckCircle, Bot, Target, Sparkles } from "lucide-react";
import KyooriMascot from "@/components/waiting-screen/KyooriMascot";
import WaitingHeader from "@/components/waiting-screen/WaitingHeader";
import ProcessingProgress from "@/components/waiting-screen/ProcessingProgress";
import FeatureCards from "@/components/waiting-screen/FeatureCards";
import DidYouKnow from "@/components/waiting-screen/DidYouKnow";

const WaitingScreen = () => {
  const [progress, setProgress] = useState(22);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStepStatus = (stepIndex: number) => {
    if (progress >= (stepIndex + 1) * 25) return "completed" as const;
    if (progress >= stepIndex * 25) return "in-progress" as const;
    return "pending" as const;
  };

  const steps = [
    {
      id: "scan",
      label: "Scanning your solutions",
      status: getStepStatus(0),
      icon: <CheckCircle className="w-4 h-4" />,
    },
    {
      id: "analyze",
      label: "Analyzing answers with AI",
      status: getStepStatus(1),
      icon: <Bot className="w-4 h-4" />,
    },
    {
      id: "strengths",
      label: "Identifying strengths",
      status: getStepStatus(2),
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "report",
      label: "Crafting improvement report",
      status: getStepStatus(3),
      icon: <Sparkles className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto pt-8">
        <KyooriMascot />
        <WaitingHeader />
        <ProcessingProgress progress={progress} steps={steps} />
        <FeatureCards />
        <DidYouKnow text="Kyoori analyzes thousands of data points to provide you with the most accurate and helpful feedback tailored just for you!" />
      </div>
    </div>
  );
};

export default WaitingScreen;
