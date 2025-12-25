import { Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessageProps {
  content: string;
  isAI: boolean;
}

const ChatMessage = ({ content, isAI }: ChatMessageProps) => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied!",
      description: "Message copied to clipboard",
    });
  };

  const handleFeedback = (type: "up" | "down") => {
    setFeedback(type);
    toast({
      title: "Thanks for your feedback!",
      description: type === "up" ? "Glad this was helpful!" : "We'll work to improve.",
    });
  };

  if (!isAI) {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[80%] p-4 bg-[var(--accent-color)] text-[var(--bg-primary)] rounded-xl rounded-br-sm">
          <p className="text-sm">{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 mb-4">
      {/* Kyoori Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-[var(--accent-color)] rounded-xl flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 bg-[var(--bg-primary)] rounded-full" />
            <div className="w-2 h-2 bg-[var(--bg-primary)] rounded-full" />
          </div>
        </div>
        <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full ml-1 -mt-1" />
      </div>

      {/* Message Content */}
      <div className="flex-1 max-w-[85%]">
        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl rounded-tl-sm">
          <div className="text-sm text-[var(--text-primary)] whitespace-pre-wrap">
            {content}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[var(--border-color)]">
            <button
              onClick={handleCopy}
              className="p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] rounded-lg transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleFeedback("up")}
              className={`p-2 rounded-lg transition-colors ${
                feedback === "up"
                  ? "text-[var(--accent-color)] bg-[var(--accent-color)]/10"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleFeedback("down")}
              className={`p-2 rounded-lg transition-colors ${
                feedback === "down"
                  ? "text-red-400 bg-red-400/10"
                  : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
              }`}
            >
              <ThumbsDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
