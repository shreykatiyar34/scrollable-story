import ProgressHeader from "@/components/progress/ProgressHeader";
import MasteryBanner from "@/components/progress/MasteryBanner";
import ConceptBreakdownCard from "@/components/progress/ConceptBreakdownCard";

const concepts = [
  {
    title: "Principle of Volume Conversation",
    description: "Understanding how volume remains constant during transformations",
    status: "processing" as const,
    category: "Foundation",
    progress: 40,
  },
  {
    title: "Curved Surface Area of a Cylinder Formula",
    description: "Understanding how volume remains constant during transformations",
    status: "processing" as const,
    progress: 63,
  },
  {
    title: "Principle of Volume Conversation",
    description: "Understanding how volume remains constant during transformations",
    status: "mastered" as const,
    category: "Geometry",
    progress: 40,
  },
  {
    title: "Curved Surface Area of a Cylinder Formula",
    description: "Understanding how volume remains constant during transformations",
    status: "needFocus" as const,
    category: "Applied Maths",
    progress: 20,
  },
];

const Progress = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <ProgressHeader />

      <main className="px-6 py-4 max-w-3xl mx-auto">
        <MasteryBanner
          masteryPercent={15}
          masteredTopic="Ratios"
          needsAttentionTopic="Practical Applications"
        />

        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
          Concept Breakdown
        </h2>

        <div>
          {concepts.map((concept, index) => (
            <ConceptBreakdownCard key={index} {...concept} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Progress;
