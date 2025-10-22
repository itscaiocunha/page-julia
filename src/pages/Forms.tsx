import { useState, useEffect } from "react";
import { StepLayout } from "@/components/StepLayout";
import { ProcessingIcon } from "@/components/ProcessingIcon";
import { SelectionCard } from "@/components/SelectionCard";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  User,
  Dumbbell,
  Car,
  Scissors,
  ShoppingCart,
  Package,
  Store,
  HeartPulse,
  Phone,
  Plane,
  Zap,
  Target,
  MoreHorizontal,
} from "lucide-react";

import { getFirstName } from "@/lib/utils";
import juliaTchau from "@/assets/julia-tchau-final.mp4";
import juliaChat from "@/assets/julia-chat.mp4";
import juliaName from "@/assets/julia-name.png";
import juliaAcenando from "@/assets/julia-acenando-logo.mp4";
import { LoadingDots } from "@/components/LoadingDots";

const Index = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clientTypes, setClientTypes] = useState<string[]>([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [objective, setObjective] = useState<string>("");
  const [showingSecondPage, setShowingSecondPage] = useState(false);

  // Objetivos divididos em duas páginas
  const objectivesPage1 = [
    { id: "saude", label: "Saúde", icon: HeartPulse },
    { id: "mercadolivre", label: "Mercado Livre", icon: Store },
    { id: "beleza", label: "Beleza", icon: Scissors },
    { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
    { id: "automotivo", label: "Automotivo", icon: Car },
    { id: "turismo", label: "Turismo", icon: Plane },
  ];

  const objectivesPage2 = [
    { id: "academia", label: "Academia", icon: Dumbbell },
    { id: "delivery", label: "Delivery", icon: Package },
    { id: "telecomunicacao", label: "Telecomunicação", icon: Phone },
    { id: "outros", label: "Outros", icon: MoreHorizontal },
  ];

  useEffect(() => {
    if (step === 1) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setStep(2);
      }, 4000);
      return () => clearTimeout(timer);
    }

    // Step 4: aguardar 3 minutos (180000ms)
    if (step === 4) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setStep(5);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 300);
      }, 180000); // 3 minutos = 180000 milissegundos

      return () => clearTimeout(timer);
    }
  }, [step]);

  const sendToWebhook = async () => {
    try {
      const webhookUrl = "https://hook.us1.make.com/69cadmb47bqfdr3bw3p8qnraat8hzrey";

      const data = {
        name: clientName,
        email: clientEmail,
        phone: clientPhone,
        clientTypes: clientTypes,
        objective: objective,
        timestamp: new Date().toISOString(),
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Dados enviados ao webhook com sucesso:", data);
    } catch (error) {
      console.error("Erro ao enviar dados ao webhook:", error);
    }
  };

  const handleNext = async () => {
    if (step === 3) {
      await sendToWebhook();
    }

    setShowLoadingScreen(true);

    setTimeout(() => {
      setShowLoadingScreen(false);
      setIsTransitioning(true);

      setTimeout(() => {
        setStep(step + 1);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 300);
    }, 2500);
  };

  const handleBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(step - 1);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 600);
  };

  const canProceed = () => {
    if (step === 2) return clientTypes.length > 0 && clientName.trim() && clientEmail.trim() && clientPhone.trim();
    if (step === 3) return objective;
    return true;
  };

  const handleClientTypeToggle = (type: string) => {
    setClientTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]));
  };

  // Show loading screen between steps
  if (showLoadingScreen) {
    return <LoadingScreen />;
  }

  // Step 1: Initial Loading
  if (step === 1) {
    return (
      <div className="flex flex-col min-h-screen w-full items-center justify-center bg-background">
        <div className="absolute top-8"></div>
        <div className="text-center animate-fade-in">
          <ProcessingIcon />
          <h1 className="mt-6 text-3xl font-bold text-foreground">Vamos Iniciar...</h1>
          <p className="mt-2 text-muted-foreground">Preparando sua experiência</p>
        </div>
      </div>
    );
  }

  // Step 2: Client Data
  if (step === 2) {
    return (
      <StepLayout
        currentStep={2}
        totalSteps={5}
        isTransitioning={isTransitioning}
        leftContent={
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Quem é seu cliente?</h1>
              <p className="text-muted-foreground">Saber disso nos ajuda a adaptar melhor a experiência pra você</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SelectionCard
                icon={Building2}
                label="Vendo para Empresas"
                selected={clientTypes.includes("business")}
                onClick={() => handleClientTypeToggle("business")}
              />
              <SelectionCard
                icon={User}
                label="Vendo para Pessoa Física"
                selected={clientTypes.includes("individual")}
                onClick={() => handleClientTypeToggle("individual")}
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Nome <span className="text-destructive">*</span>
                </label>
                <Input
                  placeholder="Seu nome completo"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  E-mail <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Telefone <span className="text-destructive">*</span>
                </label>
                <Input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={clientPhone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número

                    // Adiciona o DDD com parênteses
                    if (value.length > 0) {
                      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
                    }

                    // Se tiver 10 dígitos → (00) 0000-0000
                    // Se tiver 11 dígitos → (00) 00000-0000
                    if (value.length >= 10 && value.replace(/\D/g, "").length < 11) {
                      value = value.replace(/(\d{4})(\d{0,4})$/, "$1-$2");
                    } else if (value.length >= 11) {
                      value = value.replace(/(\d{5})(\d{0,4})$/, "$1-$2");
                    }

                    setClientPhone(value);
                  }}
                  maxLength={15}
                  required
                />
              </div>

            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={handleNext} disabled={!canProceed()} size="lg">
                Próxima
              </Button>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-6 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden">
              <video src={juliaChat} autoPlay loop muted playsInline className="w-full h-auto" />
            </div>
          </div>
        }
      />
    );
  }

  // Step 3: Objective Selection
  if (step === 3) {
    return (
      <StepLayout
        currentStep={3}
        totalSteps={5}
        isTransitioning={isTransitioning}
        leftContent={
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Qual é seu Principal Objetivo?</h1>
              <p className="text-muted-foreground">Isso nos permite ajudar você com mais eficiência.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 transition-all duration-500 animate-fade-in">
              {(showingSecondPage ? objectivesPage2 : objectivesPage1).map((obj) => (
                <SelectionCard
                  key={obj.id}
                  icon={obj.icon}
                  label={obj.label}
                  selected={objective === obj.id}
                  onClick={() => setObjective(obj.id)}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="default" onClick={() => setShowingSecondPage(!showingSecondPage)}>
                {showingSecondPage ? "← Ver opções anteriores" : "Ver mais opções →"}
              </Button>
            </div>

            <div className="flex items-center justify-between pt-4">
              <Button onClick={handleBack} variant="outline" size="lg">
                Voltar
              </Button>
              <Button onClick={handleNext} disabled={!canProceed()} size="lg">
                Próxima
              </Button>
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                A Julia alcança até 90% de conversão em carrinhos abandonados!
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">Agente 100% customizado</p>
                    <p className="text-sm text-muted-foreground">Artificial Intelligence</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">+500 integrações</p>
                    <p className="text-sm text-muted-foreground">Meta, WhatsApp e Instagram Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  // Step 4: Agent Preparation (3 minutos de espera)
  if (step === 4) {
    return (
      <StepLayout
        currentStep={4}
        totalSteps={5}
        isTransitioning={isTransitioning}
        leftContent={
          <div className="animate-fade-in space-y-8 text-center flex flex-col items-center justify-center min-h-[60vh]">
            <ProcessingIcon />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground animate-pulse">
                Estamos preparando seu agente
              </h1>
              <p className="text-xl text-muted-foreground">
                Isso levará alguns instantes...
              </p>
            </div>
          </div>
        }
        rightContent={
          <div className="flex items-center justify-center animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden w-[400px] h-[400px]">
              <video
                src={juliaAcenando}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        }
      />
    );
  }

  // Step 5: Success
  if (step === 5) {
    return (
      <StepLayout
        currentStep={5}
        totalSteps={5}
        isTransitioning={isTransitioning}
        leftContent={
          <div className="animate-fade-in space-y-8 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Tudo pronto!</h1>
              <p className="text-xl text-muted-foreground">Seu painel foi configurado com sucesso</p>
            </div>

            {objective === "mercadolivre" ? (
              // Mensagem especial para Mercado Livre
              <div className="space-y-3">
                <p className="text-foreground text-lg">
                  Obrigado por escolher nossa plataforma,{" "}
                  <span className="font-bold text-primary">{getFirstName(clientName)}</span>
                </p>

                <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 my-4">
                  <p className="text-xl font-bold text-primary mb-2">
                    📞 Um consultor entrará em contato com você
                  </p>
                  <p className="text-muted-foreground">
                    Em breve nossa equipe especializada em Mercado Livre entrará em contato para personalizar sua experiência
                  </p>
                </div>

                <p className="text-muted-foreground">
                  Enviamos um e-mail de confirmação para{" "}
                  <span className="font-medium text-foreground">{clientEmail}</span>
                </p>
              </div>
            ) : (
              // Mensagem padrão para outras opções
              <div className="space-y-3">
                <p className="text-foreground text-lg">
                  Obrigado por escolher nossa plataforma,{" "}
                  <span className="font-bold text-primary">{getFirstName(clientName)}</span>
                </p>
                <p className="text-muted-foreground">
                  Enviamos um e-mail de confirmação para{" "}
                  <span className="font-medium text-foreground">{clientEmail}</span>
                </p>
                <br></br>
                <p className="text-muted-foreground">
                  💡 <strong>Aproveite:</strong> você tem <strong>7 dias grátis</strong> para explorar todos os recursos!
                </p>
              </div>
            )}


            <Button
              asChild
              variant="success"
              size="lg"
              className="w-full max-w-sm mx-auto"
            >
              <a href="https://youtu.be/BI5AMD3ghAU" target="_blank" rel="noopener noreferrer">
                Ver Tutorial
              </a>
            </Button>
          </div>
        }
        rightContent={
          <div className="flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/BI5AMD3ghAU"
                title="Tutorial Julia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        }
      />
    );
  }

  return null;
};

export default Index;