interface TestInfoHeaderProps {
  subject: string;
  testDate: string;
  score: string;
}

const TestInfoHeader = ({ subject, testDate, score }: TestInfoHeaderProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
        {subject}
      </h2>
      <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)]">
        <span>Test attempted on: {testDate}</span>
        <span>Score: {score}</span>
      </div>
    </div>
  );
};

export default TestInfoHeader;
