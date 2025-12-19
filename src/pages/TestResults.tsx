import { useNavigate } from "react-router-dom";
import ResultsHeader from "@/components/test-results/ResultsHeader";
import ScoreCard from "@/components/test-results/ScoreCard";
import TestActions from "@/components/test-results/TestActions";
import StatsGrid from "@/components/test-results/StatsGrid";
import WeakConcepts from "@/components/test-results/WeakConcepts";
import SillyMistakes from "@/components/test-results/SillyMistakes";
import ReadyToImprove from "@/components/test-results/ReadyToImprove";
import { toast } from "@/hooks/use-toast";

const TestResults = () => {
  const navigate = useNavigate();

  const weakConcepts = [
    {
      title: "Principle of Volume Conservation",
      description: "Understanding how volume remains constant during transformations",
      masteryPercentage: 35,
    },
    {
      title: "Curved Surface Area of a Cylinder Formula",
      description: "Applying CSA = 2πrh in complex problems",
      masteryPercentage: 29,
    },
  ];

  const sillyMistakes = [
    {
      title: "Calculation and arithmetic errors",
      description: "Simple calculation mistakes affecting final answers",
      occurrences: 3,
    },
    {
      title: "Sign mistakes",
      description: "Incorrectly handling positive and negative values",
      occurrences: 2,
    },
  ];

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} action triggered`,
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        <ResultsHeader testName="Chapter Test" chapterName="Surface Area and Volumes" />

        <ScoreCard
          score={13}
          totalMarks={19}
          percentage={68}
          passed={true}
          message="Great Effort!"
          description="You're making progress! Focus on the concepts below to boost your score and master this chapter."
          onReviewAnswers={() => handleAction("Review Answers")}
          onAnswerKey={() => handleAction("Answer Key")}
        />

        <TestActions
          onRetake={() => navigate("/test")}
          onNext={() => handleAction("Next Test")}
        />

        <StatsGrid
          correctAnswers={13}
          incorrectAnswers={6}
          accuracyRate={68}
          grade="B"
        />

        <WeakConcepts
          concepts={weakConcepts}
          onStudy={(title) => handleAction(`Study: ${title}`)}
          onPractice={(title) => handleAction(`Practice: ${title}`)}
        />

        <SillyMistakes
          mistakes={sillyMistakes}
          onPractice={(title) => handleAction(`Practice: ${title}`)}
        />

        <ReadyToImprove
          onStartPractice={() => handleAction("Start Practice")}
          onViewReport={() => handleAction("View Full Report")}
        />
      </div>
    </div>
  );
};

export default TestResults;
