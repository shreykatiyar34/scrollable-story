import AnswerKeyHeader from "@/components/answer-key/AnswerKeyHeader";
import ScoreSummary from "@/components/answer-key/ScoreSummary";
import QuestionAnswerCard from "@/components/answer-key/QuestionAnswerCard";
import AnswerKeyCTA from "@/components/answer-key/AnswerKeyCTA";

const questions = [
  {
    questionNumber: 1,
    type: "MCQ" as const,
    marks: 1,
    question: "A funnel (see Fig. 12.1) is the combination of",
    options: [
      { label: "(A)", text: "a cone and a cylinder", isCorrect: false },
      { label: "(B)", text: "frustum of a cone and a cylinder", isCorrect: true },
      { label: "(C)", text: "a hemisphere and a cylinder", isCorrect: false },
      { label: "(D)", text: "a hemisphere and a cone", isCorrect: false },
    ],
    correctAnswer: "(B)",
    conceptExplanation:
      "A funnel is made by combining a frustum of a cone (the conical part) with a cylinder (the cylindrical part).",
  },
  {
    questionNumber: 2,
    type: "Short Answer" as const,
    marks: 3,
    question:
      "A cone of radius 7 cm and height 24 cm is melted to form a cylinder of radius 3.5 cm. Find the height of the new cylinder and compare their curved surface areas.",
    correctAnswer: "Height = 28 cm",
    solutionSteps: [
      { step: 1, content: "Volume of cone = (1/3)πr²h = (1/3)π × 7² × 24 = 392π cm³" },
      { step: 2, content: "Cylinder radius = 3.5 cm" },
      { step: 3, content: "Volume of cylinder = πr²h = π × 3.5² × h = 12.25πh" },
      { step: 4, content: "Since volumes are equal: 12.25πh = 392π" },
      { step: 5, content: "h = 392/12.25 = 32 cm" },
      { step: 6, content: "" },
      { step: 7, content: "Curved SA of cone = πrl where l = √(r² + h²) = √(7² + 24²) = √625 = 25 cm" },
      { step: 8, content: "Curved SA of cone = π × 7 × 25 = 175π cm²" },
      { step: 9, content: "" },
      { step: 10, content: "Curved SA of cylinder = 2πrh = 2π × 3.5 × 32 = 224π cm²" },
      { step: 11, content: "" },
      { step: 12, content: "Therefore, cylinder CSA exceeds cone CSA by 224π - 175π = 49π cm²" },
    ],
    conceptExplanation:
      "This problem demonstrates the principle of volume conservation when melting and recasting objects.",
  },
  {
    questionNumber: 3,
    type: "MCQ" as const,
    marks: 1,
    question: "The total surface area of a cube is 96 cm². The volume of the cube is",
    options: [
      { label: "(A)", text: "8 cm³", isCorrect: false },
      { label: "(B)", text: "64 cm³", isCorrect: true },
      { label: "(C)", text: "512 cm³", isCorrect: false },
      { label: "(D)", text: "27 cm³", isCorrect: false },
    ],
    correctAnswer: "(B)",
    conceptExplanation:
      "If TSA = 96 cm², then 6a² = 96, so a² = 16, giving a = 4 cm. Volume = a³ = 4³ = 64 cm³.",
  },
];

const AnswerKey = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnswerKeyHeader />
      
      <ScoreSummary
        score={13}
        total={19}
        percentage={68}
        totalQuestions={3}
        passed={true}
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground mb-1">Questions and Answers</h2>
        <p className="text-sm text-muted-foreground mb-4">Step-by-step solutions for every question</p>

        <div className="space-y-4">
          {questions.map((q) => (
            <QuestionAnswerCard key={q.questionNumber} {...q} />
          ))}
        </div>
      </div>

      <AnswerKeyCTA />
    </div>
  );
};

export default AnswerKey;
