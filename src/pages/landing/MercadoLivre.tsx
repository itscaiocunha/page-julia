import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, TrendingUp, Clock, Zap, CheckCircle2, MessageCircle, Bot, Settings, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import icon247 from "@/assets/icon-24-7.jpg";
import iconSales from "@/assets/icon-sales.jpg";
import iconAutomation from "@/assets/icon-automation.jpg";

const features = [
  {
    icon: icon247,
    title: "Atendimento 24/7",
    description: "Nunca perca uma venda. Nossa IA responde seus clientes a qualquer hora do dia ou da noite, mesmo quando você está dormindo.",
    iconComponent: Clock,
  },
  {
    icon: iconSales,
    title: "Aumente 25% das Vendas",
    description: "Respostas rápidas geram mais conversões. Clientes atendidos em segundos compram 25% mais que aqueles que esperam.",
    iconComponent: TrendingUp,
  },
  {
    icon: iconAutomation,
    title: "100% Automatizado",
    description: "Configure uma vez e esqueça. Nossa IA aprende com suas interações e melhora continuamente o atendimento.",
    iconComponent: Zap,
  },
];

const stats = [
  {
    icon: TrendingUp,
    value: "25%",
    label: "Aumento em Vendas",
    color: "text-primary",
  },
  {
    icon: Clock,
    value: "<1min",
    label: "Tempo de Resposta",
    color: "text-secondary",
  },
  {
    icon: MessageSquare,
    value: "1000+",
    label: "Mensagens/Dia",
    color: "text-primary",
  },
  {
    icon: CheckCircle2,
    value: "98%",
    label: "Satisfação",
    color: "text-secondary",
  },
];

const steps = [
  {
    icon: Settings,
    title: "1. Configure",
    description: "Integre em minutos com sua conta do Mercado Livre. Sem código, sem complicação.",
  },
  {
    icon: Bot,
    title: "2. Treine",
    description: "Nossa IA aprende sobre seus produtos e seu estilo de atendimento automaticamente.",
  },
  {
    icon: MessageCircle,
    title: "3. Venda Mais",
    description: "Deixe a IA atender seus clientes 24/7 enquanto você foca em crescer seu negócio.",
  },
];

const MercadoLivre = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" 
        aria-label="Seção principal de apresentação"
        style={{
          backgroundImage: "linear-gradient(135deg, #0E1428 0%, rgba(255, 215, 0, 0.05), rgba(52, 131, 250, 0.05) 100%)",
          backgroundColor: "#0E1428",
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255, 230, 0, 0.1), transparent 50%)" 
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 70% 50%, rgba(52, 131, 250, 0.1), transparent 50%)" 
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <header className="flex justify-center mb-8 pt-8">
            <img src={logo} alt="Julia no Mercado Livre - Atendimento automatizado com inteligência artificial" className="h-12 md:h-16" />
          </header>
          <div className="flex justify-center items-center">
            <div 
              className="text-center space-y-8 animate-in fade-in duration-1000 max-w-4xl"
              style={{ color: '#FAFAFA' }} 
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                style={{ 
                  backgroundColor: 'rgba(255, 215, 0, 0.1)', 
                  color: '#FFD700' 
                }}
              >
                <MessageSquare className="h-4 w-4" />
                <span>Atendimento Inteligente 24/7</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Aumente suas vendas do{" "}
                <span style={{ color: '#FFD700' }}>Mercado Livre</span> com{" "}
                <span style={{ color: '#3483FA' }}>IA</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl max-w-2xl mx-auto"
                style={{ color: '#8992A5' }}
              >
                Atenda seus clientes em tempo real e aumente suas vendas. 
                O melhor investimento para sua operação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero"
                  size="xl"
                  style={{
                    backgroundColor: '#FFD700',
                    color: '#0E1428',
                    padding: '1rem 2.5rem',
                    borderRadius: '9999px',
                    fontWeight: '600',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                  className="group"
                  asChild
                >
                  <a href="https://hellojulia.com.br/formulario" target="_blank" rel="noopener noreferrer">
                    Testar Gratuitamente
                    <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button 
                  variant="hero"
                  size="xl"                
                  style={{
                    backgroundColor: '#1A202C', 
                    color: '#FAFAFA', 
                    padding: '1rem 2.5rem',
                    borderRadius: '9999px', 
                    fontWeight: '600',
                    border: '1px solid #2D3748',
                    transition: 'background-color 0.3s ease',
                  }}
                  asChild
                >
                  <a href="https://wa.me/5519989728022?text=Quero%20conhecer%20mais%20sobre%20a%20solu%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                    Falar com especialista
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-8 justify-center pt-8 pb-10">
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: '#FFD700' }}
                  >
                    25%
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: '#8992A5' }}
                  >
                    Aumento em Vendas
                  </div>
                </div>
                <div 
                  className="h-12 w-px"
                  style={{ backgroundColor: '#242D3A' }} 
                />
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: '#3483FA' }}
                  >
                    24/7
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: '#8992A5' }}
                  >
                    Atendimento
                  </div>
                </div>
                <div 
                  className="h-12 w-px"
                  style={{ backgroundColor: '#242D3A' }} 
                />
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: '#FFD700' }}
                  >
                    100%
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: '#8992A5' }}
                  >
                    Automático
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-24"
        aria-label="Principais benefícios e recursos"
        // bg-gradient-to-b from-background to-muted/30 se usasse o original, 
        // mas o print mostra um fundo escuro sólido.
        style={{ 
          backgroundColor: '#0E1428', // bg-background (Originalmente #0E1428)
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: '#FAFAFA' }} // text-foreground
            >
              Por que escolher nossa <span style={{ color: '#FFD700' }}>IA</span>?
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: '#8992A5' }} // text-muted-foreground
            >
              A solução completa para revolucionar seu atendimento no Mercado Livre
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.iconComponent;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
                  style={{
                    backgroundColor: '#242D3A', // bg-card (HSL 222 47% 15% ou 217 33% 20%, escolhendo 217 33% 20% -> #242D3A para dar mais contraste)
                    borderColor: '#242D3A',    // border (para manter o visual da Card)
                    color: '#FAFAFA',          // text-card-foreground
                    // Efeito de sombra no hover usando --shadow-lg como base (exemplo)
                    '--tw-shadow-color': 'rgba(255, 215, 0, 0.2)', // Usando primary/20
                    boxShadow: '0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)',
                  } as React.CSSProperties} // Tipagem para o uso de --tw-shadow-color
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="relative">
                      <img 
                        src={feature.icon} 
                        alt={`Ícone representando ${feature.title} - ${feature.description}`}
                        className="w-20 h-20 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                        loading="lazy"
                      />
                      <div 
                        className="absolute -top-2 -right-2 rounded-full p-2 shadow-md"
                        style={{ backgroundColor: '#FFD700' }} // bg-primary
                      >
                        <Icon 
                          className="h-5 w-5"
                          style={{ color: '#0E1428' }} // text-primary-foreground
                        />
                      </div>
                    </div>
                    
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: '#FAFAFA' }} // text-foreground
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="leading-relaxed"
                      style={{ color: '#8992A5' }} // text-muted-foreground
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-20 relative overflow-hidden" 
        aria-label="Estatísticas e resultados comprovados"
        // bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255, 215, 0, 0.05), rgba(52, 131, 250, 0.05), rgba(255, 215, 0, 0.05))',
          backgroundColor: '#0E1428' // Fallback para a cor base
        }}
      >
        {/* Gradiente de bolinhas SVG/Pattern (mantido como classe para simplificar) */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#FAFAFA' }} // text-foreground
            >
              Resultados que <span style={{ color: '#FFD700' }}>impressionam</span>
            </h2>
            <p 
              className="text-xl"
              style={{ color: '#8992A5' }} // text-muted-foreground
            >
              Números reais de quem já usa nossa solução
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              
              // Determina a cor do valor (value)
              const valueColor = stat.color === "text-primary" ? '#FFD700' : '#3483FA';

              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2"
                  // bg-card/80 border-2
                  style={{ 
                    backgroundColor: 'rgba(36, 45, 58, 0.8)', // #242D3A com 80% de opacidade (bg-card/80)
                    borderColor: '#242D3A', // Cor da borda
                    color: '#FAFAFA',       // text-card-foreground
                    backdropFilter: 'blur(4px)', // Adiciona o efeito backdrop-blur-sm
                    // Define o shadow para hover (exemplo de blue shadow)
                    '--tw-shadow-color': 'rgba(52, 131, 250, 0.2)', // Usando secondary/20 para o glow no hover
                    boxShadow: '0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
                  } as React.CSSProperties}
                >
                  <div className="flex justify-center mb-4">
                    <div 
                      className="p-3 rounded-full shadow-md"
                      // bg-gradient-accent
                      style={{
                        backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #3483FA 100%)',
                      }}
                    >
                      <Icon 
                        className="h-8 w-8"
                        style={{ color: valueColor }} // A cor do ícone é a mesma do valor
                      />
                    </div>
                  </div>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: valueColor }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-sm md:text-base font-medium"
                    style={{ color: '#8992A5' }} // text-muted-foreground
                  >
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-24" 
        aria-label="Como funciona o processo de implementação"
        // bg-background
        style={{ backgroundColor: '#0E1428' }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: '#FAFAFA' }} // text-foreground
            >
              Como <span style={{ color: '#3483FA' }}>funciona</span>?
            </h2>
            <p 
              className="text-xl max-w-2xl mx-auto"
              style={{ color: '#8992A5' }} // text-muted-foreground
            >
              Três passos simples para transformar seu atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card 
                    className="h-full hover:shadow-xl transition-all duration-300 border-2"
                    style={{
                      backgroundColor: '#242D3A', // bg-card
                      borderColor: '#242D3A',    // border
                      color: '#FAFAFA',          // text-card-foreground
                      // hover:border-secondary/30
                      '--tw-shadow-color': 'rgba(52, 131, 250, 0.3)',
                      boxShadow: '0 4px 6px -1px var(--tw-shadow-color)',
                    } as React.CSSProperties}
                  >
                    <CardContent className="p-8 space-y-4 text-center">
                      <div className="flex justify-center">
                        <div 
                          className="p-4 rounded-2xl shadow-blue"
                          // bg-gradient-blue
                          style={{ 
                              backgroundImage: 'linear-gradient(135deg, #3483FA 0%, #4D96FF 100%)' // Corrigido L do 70% para simular o HSL original
                          }}
                        >
                          <Icon 
                            className="h-10 w-10"
                            style={{ color: '#FFFFFF' }} // text-secondary-foreground
                          />
                        </div>
                      </div>
                      
                      <h3 
                        className="text-2xl font-bold"
                        style={{ color: '#FAFAFA' }} // text-foreground
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="leading-relaxed"
                        style={{ color: '#8992A5' }} // text-muted-foreground
                      >
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight 
                        className="h-8 w-8 animate-pulse"
                        style={{ color: '#FFD700' }} // text-primary
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>  

      {/* Experience Section */}
        <section id="experiencia" className="py-20" style={{ backgroundColor: '#0E1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tenha uma <span style={{ color: '#3483FA' }}>experiência</span> com a <span style={{ color: '#3483FA' }}>Julia</span>
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Converse com a JulIA e pergunte tudo sobre o Grupo W7
              </p>
              
              <div>
                <iframe 
                  id="zaia-iframe"
                  src="https://platform.hellojulia.com.br/embed/chat/67174"
                  className="w-full h-[400px] rounded-lg border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative overflow-hidden" 
        aria-label="Chamada para ação - Comece agora"
        // Fundo principal escuro com gradientes de glow
        style={{ backgroundColor: '#0E1428' }}
      >
        {/* Gradiente Linear Amarelo->Azul sutil (bg-gradient-accent opacity-10) */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #3483FA 100%)' 
          }}
        />
        {/* Gradiente Radial Amarelo sutil (Círculo de glow central) */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,230,0,0.15), transparent 70%)' 
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10" style={{ color: '#FAFAFA' }}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge "Oferta Especial" */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
              // bg-primary/10 text-primary
              style={{ 
                backgroundColor: 'rgba(255, 215, 0, 0.1)', 
                color: '#FFD700' 
              }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Oferta Especial para Novos Clientes</span>
            </div>
            
            {/* Título */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              O melhor investimento para sua{" "}
              <span style={{ color: '#FFD700' }}>operação</span>
            </h2>
            
            {/* Descrição */}
            <p 
              className="text-xl md:text-2xl max-w-2xl mx-auto"
              style={{ color: '#8992A5' }} // text-muted-foreground
            >
              Junte-se a centenas de vendedores que já aumentaram suas vendas com IA
            </p>
            
            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              {/* Botão "Começar Gratuitamente" */}
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                asChild
                style={{
                  // bg-gradient-hero -> Amarelo sólido
                  backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFD700 100%)', 
                  color: '#0E1428', // text-primary-foreground
                  padding: '1rem 2.5rem',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                }}
              >
                <a href="https://hellojulia.com.br/formulario" target="_blank" rel="noopener noreferrer">
                  Testar gratuitamente
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              {/* Botão "Falar com Especialista" */}
              <Button 
                variant="outline" 
                size="xl"
                asChild
                style={{
                  // Fundo escuro (Card/Pop-over) e texto claro
                  backgroundColor: '#242D3A', 
                  borderColor: '#242D3A', 
                  color: '#FAFAFA',
                  padding: '1rem 2.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                }}
              >
                <a href="https://wa.me/5519989728022?text=Quero%20conhecer%20mais%20sobre%20a%20solu%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                </a>
              </Button>
            </div>
            
            {/* Vantagens */}
            <div 
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm"
              style={{ color: '#8992A5' }} // text-muted-foreground
            >
              <div className="flex items-center gap-2">
                <div 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: '#FFD700' }} // bg-primary
                />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: '#3483FA' }} // bg-secondary
                />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: '#FFD700' }} // bg-primary
                />
                <span>Suporte em português</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MercadoLivre;