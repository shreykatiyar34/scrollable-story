import ReviewHeader from "@/components/review/ReviewHeader";
import ReviewScoreCard from "@/components/review/ReviewScoreCard";
import ReviewSummary from "@/components/review/ReviewSummary";
import QuestionReviewTable from "@/components/review/QuestionReviewTable";
import ReviewCTA from "@/components/review/ReviewCTA";

const Review = () => {
  const questions = [
    {
      id: "Q1",
      type: "MCQ",
      totalMarks: 1,
      yourMarks: 0,
      status: "wrong" as const,
      remarks: "You used the wrong formula. Just...",
      detailedFeedback: "You used the wrong formula. Just revise the correct TSA and CSA formulas once.",
      improvementTip: "Review surface area formulas",
    },
    {
      id: "Q2",
      type: "MCQ",
      totalMarks: 1,
      yourMarks: 0,
      status: "wrong" as const,
      remarks: "The numbers were not substituted...",
      detailedFeedback: "The numbers were not substituted correctly into the formula.",
      improvementTip: "Practice substitution in formulas",
    },
    {
      id: "Q3",
      type: "MCQ",
      totalMarks: 1,
      yourMarks: 1,
      status: "correct" as const,
      remarks: "Great job. Your steps and final answe...",
      detailedFeedback: "Great job. Your steps and final answer were correct.",
      improvementTip: "Keep practicing to maintain accuracy",
    },
    {
      id: "Q4",
      type: "Short Answer",
      totalMarks: 2,
      yourMarks: 1,
      status: "partial" as const,
      remarks: "Your method was right but you made ...",
      detailedFeedback: "Your method was right but you made a calculation error.",
      improvementTip: "Double-check your calculations",
    },
    {
      id: "Q5",
      type: "Short Answer",
      totalMarks: 2,
      yourMarks: 1.5,
      status: "partial" as const,
      remarks: "Very close. You understood the idea...",
      detailedFeedback: "Very close. You understood the idea but missed a minor step.",
      improvementTip: "Review step-by-step problem solving",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 max-w-2xl mx-auto">
      <ReviewHeader />
      <ReviewScoreCard
        score={3.5}
        totalMarks={7}
        timeTaken="29 minutes"
        passed={true}
        passPercentage={50}
      />
      <ReviewSummary correct={1} partial={2} wrong={2} />
      <QuestionReviewTable questions={questions} />
      <ReviewCTA />
    </div>
  );
};

export default Review;
