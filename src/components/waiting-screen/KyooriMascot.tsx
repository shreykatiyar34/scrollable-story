const KyooriMascot = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      {/* Robot mascot */}
      <div className="relative">
        {/* Antenna */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-1 h-4 bg-primary rounded-full" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-3 h-3 bg-primary rounded-full" />
        
        {/* Head */}
        <div className="w-20 h-16 bg-primary rounded-2xl flex items-center justify-center gap-2">
          {/* Eyes */}
          <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-foreground rounded-full" />
          </div>
          <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-foreground rounded-full" />
          </div>
        </div>
        
        {/* Mouth/Base */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-primary rounded-b-lg" />
      </div>
    </div>
  );
};

export default KyooriMascot;
