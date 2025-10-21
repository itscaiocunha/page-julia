import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SelectionCardProps {
  icon: LucideIcon;
  label: string;
  selected?: boolean;
  onClick: () => void;
}

export const SelectionCard = ({ icon: Icon, label, selected, onClick }: SelectionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300",
        "hover:scale-105 hover:shadow-lg",
        selected 
          ? "border-primary bg-primary/5 shadow-md" 
          : "border-border bg-card hover:border-primary/50"
      )}
    >
      {selected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      <Icon className={cn(
        "w-8 h-8 transition-colors",
        selected ? "text-primary" : "text-muted-foreground"
      )} />
      <span className={cn(
        "text-sm font-medium transition-colors",
        selected ? "text-primary" : "text-foreground"
      )}>
        {label}
      </span>
    </button>
  );
};