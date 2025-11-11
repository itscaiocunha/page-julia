import { useState, useEffect } from "react";
import { ProcessingIcon } from "./ProcessingIcon";

const loadingMessages = [
  "Estamos preparando tudo para você.",
  "Processando suas informações..."
];

export const LoadingScreen = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="text-center animate-fade-in space-y-6">
        <ProcessingIcon />
        <p 
          key={messageIndex}
          className="text-lg text-primary font-medium animate-fade-in min-h-[28px]"
        >
          {loadingMessages[messageIndex]}
        </p>
      </div>
    </div>
  );
};