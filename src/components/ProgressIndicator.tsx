
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  isTransitioning?: boolean;
}

export const ProgressIndicator = ({ currentStep, totalSteps, isTransitioning = false }: ProgressIndicatorProps) => {
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const isNext = stepNumber === currentStep + 1;
        
        return (
          <div key={index} className="flex flex-col items-center">
            <div
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-700 ease-in-out",
                isCompleted && "bg-success scale-110 animate-[scale-in_0.5s_ease-out]",
                isActive && "bg-primary scale-125 animate-pulse-glow",
                isNext && "bg-progress-inactive animate-pulse",
                !isActive && !isCompleted && !isNext && "bg-progress-inactive"
              )}
            />
            {index < totalSteps - 1 && (
              <div className={cn(
                "relative w-0.5 h-16 bg-progress-inactive overflow-hidden transition-all"
              )}>
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-700 ease-in-out",
                    isCompleted ? "h-full bg-success" : "h-0 bg-success"
                  )}
                />
                {isActive && (
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 to-transparent animate-[slide-in-down_1s_ease-in-out_infinite]" />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
