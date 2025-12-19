import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionNavigator from "@/components/actual-test-screens/QuestionNavigator";
import TestHeader from "@/components/actual-test-screens/TestHeader";
import QuestionCard from "@/components/actual-test-screens/QuestionCard";
import ProctoringSection from "@/components/actual-test-screens/ProctoringSection";
import TestInfo from "@/components/actual-test-screens/TestInfo";
import ProgressSummary from "@/components/actual-test-screens/ProgressSummary";

const ActualTest = () => {
  const navigate = useNavigate();
  const [currentQuestion] = useState(1);

  const handleSubmit = () => {
    // Handle test submission
    console.log("Test submitted");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Left Question Navigator */}
      <QuestionNavigator currentQuestion={currentQuestion} totalQuestions={3} />

      {/* Main Content */}
      <div className="ml-12 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <TestHeader timeRemaining="29:56" onSubmit={handleSubmit} />

          {/* Question Section */}
          <QuestionCard
            section="SECTION A"
            questionNumber={1}
            totalQuestions={3}
            marks={1}
            question="A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC."
            hasImage={true}
          />

          {/* Proctoring Section */}
          <div className="mt-6">
            <ProctoringSection />
          </div>

          {/* Test Info */}
          <div className="mt-6">
            <TestInfo duration="30 minutes" totalQuestions={3} totalMarks={19} />
          </div>

          {/* Progress Summary */}
          <div className="mt-6">
            <ProgressSummary answered={0} forReview={0} unanswered={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualTest;
