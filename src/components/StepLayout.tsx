import { ReactNode } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import juliaName from "@/assets/julia-name.png";

interface StepLayoutProps {
  currentStep: number;
  totalSteps: number;
  isTransitioning?: boolean;
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export const StepLayout = ({ currentStep, totalSteps, isTransitioning = false, leftContent, rightContent }: StepLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      {/* Logo Julia no topo */}
      <div className="w-full py-8 flex justify-center bg-background">
        <img 
          src={juliaName} 
          alt="Julia" 
          className="h-16 w-auto"
        />
      </div>
      
      {/* Conteúdo principal */}
      <div className="flex flex-1 w-full bg-background">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 animate-slide-in-left">
        <div className="w-full max-w-xl">
          {leftContent}
        </div>
      </div>

      {/* Progress indicator */}
      <div className={`hidden lg:flex items-center justify-center bg-secondary/30 transition-all duration-600 ${isTransitioning ? 'animate-snake-wave' : ''}`}>
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} isTransitioning={isTransitioning} />
      </div>

      {/* Right side - Content */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8 lg:p-12 bg-secondary/10 animate-slide-in-right">
        <div className="w-full max-w-xl">
          {rightContent}
        </div>
      </div>
      </div>
    </div>
  );
};