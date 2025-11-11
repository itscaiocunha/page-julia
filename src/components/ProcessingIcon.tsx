import juliaLogo from "@/assets/julia-loading.png";

export const ProcessingIcon = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={juliaLogo} 
        alt="julia - Carregando..." 
        className="w-24 h-auto animate-pulse-glow"
      />
    </div>
  );
};