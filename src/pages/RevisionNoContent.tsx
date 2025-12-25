import RevisionHeader from "@/components/revision-no-content/RevisionHeader";
import RevisionSidebar from "@/components/revision-no-content/RevisionSidebar";
import LockIcon from "@/components/revision-no-content/LockIcon";
import HowItWorksSteps from "@/components/revision-no-content/HowItWorksSteps";
import RevisionCTA from "@/components/revision-no-content/RevisionCTA";

const RevisionNoContent = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <RevisionHeader />
      
      <div className="flex">
        <RevisionSidebar />
        
        <main className="flex-1 px-6 py-8 overflow-y-auto">
          <div className="flex flex-col items-center">
            {/* Lock Icon */}
            <LockIcon />
            
            {/* Title */}
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3 text-center">
              No Study Materials Yet
            </h1>
            <p className="text-[var(--text-tertiary)] mb-10 text-center">
              Your personalized revision session is waiting to be unlocked!
            </p>
            
            {/* How It Works */}
            <HowItWorksSteps />
            
            {/* CTA */}
            <RevisionCTA />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RevisionNoContent;
