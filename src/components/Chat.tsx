"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useRef } from "react";
import { Message } from "./Message";
import { EmptyMessagesGuard } from "./EmptyMessagesGuard";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const divRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Chatbot AI</CardTitle>
        <CardDescription>Using Vercel SDK with ChatGPT</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <ScrollArea className="h-[50vh] w-full pr-4">
          <EmptyMessagesGuard totalMessages={messages.length}>
            {messages.map((message) => (
              <Message key={message.id} role={message.role}>
                {message.content}
              </Message>
            ))}
            <div ref={divRef} />
          </EmptyMessagesGuard>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
