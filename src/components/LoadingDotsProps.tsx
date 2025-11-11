interface LoadingDotsProps {
  text?: string;
}

export const LoadingDots = ({ text = "Falta pouco" }: LoadingDotsProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-sm text-primary font-medium">{text}</span>
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1s_ease-in-out_0s_infinite]" />
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1s_ease-in-out_0.2s_infinite]" />
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-[bounce_1s_ease-in-out_0.4s_infinite]" />
      </div>
    </div>
  );
};