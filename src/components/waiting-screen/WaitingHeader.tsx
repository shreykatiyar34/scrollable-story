interface WaitingHeaderProps {
  appName?: string;
}

const WaitingHeader = ({ appName = "Kyoori" }: WaitingHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Time for a tiny break 🍑
      </h1>
      <p className="text-muted-foreground">
        Give <span className="text-primary font-semibold">{appName}</span> about 5 minutes to review your solutions
      </p>
      <p className="text-muted-foreground text-sm">
        and craft your personalized improvement report
      </p>
    </div>
  );
};

export default WaitingHeader;
