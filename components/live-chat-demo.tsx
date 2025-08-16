"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export function LiveChatDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentSequenceIndex, setCurrentSequenceIndex] = useState(0)

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
          content:
            "Selamat pagi! That's 'Good morning' in Malay. Would you like me to help with any other translations?",
          delay: 2000,
        },
      ],
      [
        {
          role: "user" as const,
          content: "How about 'Thank you very much' in Kedayan dialect?",
          delay: 1500,
        },
        {
          role: "assistant" as const,
          content:
            "In Kedayan dialect, 'Thank you very much' would be 'Tarima kasih banyak-banyak'. The Kedayan dialect has unique expressions!",
          delay: 2500,
        },
      ],
      [
        {
          role: "user" as const,
          content: "Can you help me translate this PDF document?",
          delay: 1200,
        },
        {
          role: "assistant" as const,
          content:
            "I can translate your PDF while preserving the original layout. Just upload it and I'll handle the rest.",
          delay: 2200,
        },
      ],
    ],
    [],
  )

  const runAnimation = useCallback(async () => {
    const currentSequence = demoSequences[currentSequenceIndex]

    for (let i = 0; i < currentSequence.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, currentSequence[i].delay))

      if (currentSequence[i].role === "assistant") {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
      }

      const newMessage: Message = {
        id: `seq-${currentSequenceIndex}-msg-${i}-${Date.now()}`,
        role: currentSequence[i].role,
        content: currentSequence[i].content,
        timestamp: Date.now(),
      }

      setMessages((prev) => [...prev, newMessage])
    }

    await new Promise((resolve) => setTimeout(resolve, 3000))
    setMessages([])
    setCurrentSequenceIndex((prev) => (prev + 1) % demoSequences.length)
  }, [currentSequenceIndex, demoSequences])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      runAnimation()
    }, 500)

    const interval = setInterval(() => {
      runAnimation()
    }, 10000)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(interval)
    }
  }, [runAnimation])

  return (
    <Card className="floating-card border-0 rounded-2xl overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4 min-h-[300px]">
          <div className="text-center mb-4">
            <h3 className="font-semibold text-card-foreground">Live Translation Demo</h3>
            <p className="text-sm text-muted-foreground">See Tukar AI in action</p>
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
                      ? "bg-gradient-to-r from-[rgba(112,163,235,1)] to-[rgba(67,116,186,1)] text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-slide-in">
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
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
  )
}
