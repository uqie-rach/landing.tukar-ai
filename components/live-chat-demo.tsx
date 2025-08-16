"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export function LiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0);

  const demoSequences = useMemo(
    () => [
      [
        {
          role: "user" as const,
          content: "Hello, can you translate 'Good morning' to Malay?",
          delay: 1000,
        },
        {
          role: "assistant" as const,
          content: "Selamat pagi!",
          delay: 2000,
        },
        {
          role: "user" as const,
          content: "How about 'Thank you' in Kedayan dialect?",
          delay: 1500,
        },
        {
          role: "assistant" as const,
          content: "In Kedayan dialect, 'Thank you' is 'Tarima kasih'.",
          delay: 2500,
        },
      ],
      [
        {
          role: "user" as const,
          content: "Translate 'How are you?' to Brunei Malay",
          delay: 1100,
        },
        {
          role: "assistant" as const,
          content:
            "In Brunei Malay, 'How are you?' is 'Apa khabar?' or 'Macam mana?'",
          delay: 2100,
        },
        {
          role: "user" as const,
          content: "Can you explain the cultural context too?",
          delay: 1400,
        },
        {
          role: "assistant" as const,
          content:
            "'Apa khabar?' is more formal, while 'Macam mana?' is casual among friends in Brunei.",
          delay: 2600,
        },
      ],
    ],
    []
  );

  const runAnimation = useCallback(async () => {
    const currentSequence = demoSequences[currentSequenceIndex];

    for (let i = 0; i < currentSequence.length; i++) {
      await new Promise((resolve) =>
        setTimeout(resolve, currentSequence[i].delay)
      );

      if (currentSequence[i].role === "assistant") {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      }

      const newMessage: Message = {
        id: `seq-${currentSequenceIndex}-msg-${i}-${Date.now()}`,
        role: currentSequence[i].role,
        content: currentSequence[i].content,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, newMessage]);
    }

    await new Promise((resolve) => setTimeout(resolve, 4000));
    setMessages([]);
    setCurrentSequenceIndex((prev) => (prev + 1) % demoSequences.length);
  }, [currentSequenceIndex, demoSequences]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      runAnimation();
    }, 500);

    const interval = setInterval(() => {
      runAnimation();
    }, 15000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(interval);
    };
  }, [runAnimation]);

  return (
    <div className="relative">
      {/* Unique animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl">
        <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-r from-[rgba(67,116,186,0.1)] to-[rgba(112,163,235,0.1)] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-l from-[rgba(112,163,235,0.1)] to-[rgba(67,116,186,0.1)] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-t from-[rgba(67,116,186,0.05)] to-[rgba(112,163,235,0.05)] rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Card className="floating-card border-0 rounded-2xl overflow-hidden relative z-10 backdrop-blur-sm bg-white/80 shadow-none">
        <CardContent className="p-6">
          <div className="space-y-4 min-h-[400px]">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-card-foreground">
                Live Translation Demo
              </h3>
              <p className="text-sm text-muted-foreground">
                See Tukar AI in action
              </p>
            </div>

            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-slide-in`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-[rgba(112,163,235,1)] to-[rgba(67,116,186,1)] text-white rounded-br-sm shadow-lg"
                        : "bg-white/90 text-gray-800 rounded-bl-sm shadow-md border border-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start animate-slide-in">
                  <div className="bg-white/90 px-4 py-3 rounded-2xl rounded-bl-sm shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
