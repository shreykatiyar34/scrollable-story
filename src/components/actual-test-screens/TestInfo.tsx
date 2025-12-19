interface TestInfoProps {
  duration: string;
  totalQuestions: number;
  totalMarks: number;
}

const TestInfo = ({ duration, totalQuestions, totalMarks }: TestInfoProps) => {
  const infoItems = [
    { label: "Test Duration", value: duration },
    { label: "Total Questions", value: `${totalQuestions} Questions` },
    { label: "Total Marks", value: `${totalMarks} Marks` },
  ];

  return (
    <div className="space-y-2">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="bg-card rounded-xl px-4 py-3 border border-border flex items-center justify-between"
        >
          <span className="text-muted-foreground text-sm">{item.label}</span>
          <span className="text-foreground font-semibold text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default TestInfo;
