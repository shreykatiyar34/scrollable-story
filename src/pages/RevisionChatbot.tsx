import { useState } from "react";
import RevisionChatHeader from "@/components/revision-chatbot/RevisionChatHeader";
import TopicBanner from "@/components/revision-chatbot/TopicBanner";
import ChatMessage from "@/components/revision-chatbot/ChatMessage";
import ChatInput from "@/components/revision-chatbot/ChatInput";

interface Message {
  id: string;
  content: string;
  isAI: boolean;
}

const initialMessage = `Hi! I'm Kyoori, your AI study assistant.
I'm here to help you understand the Principle of Volume Conservation.

Quick Overview:
Volume remains constant when an object is transformed from one shape to another. For example, if you melt a cone and recast it into a cylinder, the total volume stays the same!

**Key Formula:** V1 = V2

Feel free to ask me anything! You can:
• Type your questions
• Speak to me using the microphone
• Upload images of problems you're stuck on

What would you like to learn first?`;

const RevisionChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: initialMessage,
      isAI: true,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isAI: false,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's a great question! Let me explain...\n\nThe principle of volume conservation states that when matter changes shape, its volume remains constant. This is particularly useful when solving problems involving melting and recasting of solids.\n\nWould you like me to show you some example problems?",
        isAI: true,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <RevisionChatHeader />

      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <div className="px-6 pt-4">
          <TopicBanner
            topic="Principle of Volume Conservation"
            description="Ask Kyoori anything about this concept. Type, speak, or upload images of problems you need help with."
          />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              isAI={message.isAI}
            />
          ))}
        </div>

        {/* Input */}
        <ChatInput
          onSend={handleSendMessage}
          placeholder="Ask Kyoori anything about Volume Conservation..."
        />
      </main>
    </div>
  );
};

export default RevisionChatbot;
