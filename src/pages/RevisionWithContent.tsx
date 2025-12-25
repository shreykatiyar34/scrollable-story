import RevisionHeader from "@/components/revision-no-content/RevisionHeader";
import TestInfoHeader from "@/components/revision-with-content/TestInfoHeader";
import StatsCards from "@/components/revision-with-content/StatsCards";
import ConceptCard from "@/components/revision-with-content/ConceptCard";
import NextChallengeCTA from "@/components/revision-with-content/NextChallengeCTA";

const stats = [
  { label: "Weak Concepts", value: 2, color: "text-red-400" },
  { label: "Silly Mistakes", value: 2, color: "text-orange-400" },
  { label: "Strong Concepts", value: 1, color: "text-[var(--accent-color)]" },
];

const concepts = [
  {
    title: "Principle of Volume Conservation",
    description: "Understanding volume remains constant during transformations",
    status: "Learning" as const,
    mastery: 0,
    timeSpent: "0 min",
    nextTarget: 55,
    hasProgress: false,
  },
  {
    title: "Quadratic Formula Applications",
    description: "Solving real-world problems using quadratic equations",
    status: "Improving" as const,
    mastery: 28,
    timeSpent: "3 min",
    nextTarget: 55,
    hasProgress: true,
  },
];

const RevisionWithContent = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <RevisionHeader />
      
      <main className="px-6 py-8 max-w-3xl mx-auto">
        <TestInfoHeader
          subject="Surface Area and Volumes"
          testDate="14/09/2025"
          score="7/15"
        />
        
        <StatsCards stats={stats} />
        
        <div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
            Weak Concepts Identified
          </h2>
          
          <div className="space-y-4">
            {concepts.map((concept, index) => (
              <ConceptCard key={index} {...concept} />
            ))}
          </div>
        </div>
        
        <NextChallengeCTA />
      </main>
    </div>
  );
};

export default RevisionWithContent;
