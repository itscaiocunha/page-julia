import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Pay = () => {
  const [plan, setPlan] = useState<string | null>(null);

  const handlePlanSelection = (selectedPlan: string) => {
    setPlan(selectedPlan);

    if (selectedPlan === "startup") {
      window.location.href = "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084966c84c001966e7d1f580128";
    } else if (selectedPlan === "premium") {
      window.location.href = "https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c938084966c84bc01966e8035f40155";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <header className="w-full max-w-md mb-8 flex justify-center">
          <img 
            src="/images/julia-name.png" 
            alt="Julia Logo" 
            className="h-12 object-contain" 
          />
        </header>

        <Card className="w-full max-w-md shadow-lg border-none">
          <CardHeader className="bg-gradient-to-r from-[#02132D] to-[#0071CB] text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">
              Select your plan
            </CardTitle>
            <CardDescription className="text-white/90 text-center">
              Choose the plan that best fits your needs
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6 pb-4">
            <div className="space-y-4">
              <RadioGroup 
                className="grid grid-cols-2 gap-4"
                value={plan || undefined}
                onValueChange={handlePlanSelection}
              >
                {/* Startup Plan */}
                <div className="relative">
                  <RadioGroupItem 
                    value="startup" 
                    id="startup" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="startup"
                    className={`flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                      plan === "startup" 
                        ? "border-primary bg-popover" 
                        : "border-muted bg-popover"
                    }`}
                  >
                    {plan === "startup" && (
                      <svg
                        className="w-5 h-5 text-primary absolute top-2 right-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    <div className="w-full">
                      <div className="font-semibold">Startup</div>
                      <div className="text-sm">US$66,28/month</div>
                      <p className="text-[11px] text-gray-500">R$375,00/month</p>
                      <div className="text-xs text-green-600 mt-1">7 days free</div>
                    </div>
                  </Label>
                </div>

                {/* Premium Plan */}
                <div className="relative">
                  <RadioGroupItem 
                    value="premium" 
                    id="premium" 
                    className="peer sr-only" 
                  />
                  <Label
                    htmlFor="premium"
                    className={`flex flex-col items-center justify-between rounded-md border-2 p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                      plan === "premium" 
                        ? "border-primary bg-popover" 
                        : "border-muted bg-popover"
                    }`}
                  >
                    {plan === "premium" && (
                      <svg
                        className="w-5 h-5 text-primary absolute top-2 right-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                    <div className="w-full">
                      <div className="font-semibold">Premium</div>
                      <div className="text-sm">US$119,17/month</div>
                      <p className="text-[11px] text-gray-500 ">R$675,00/month</p>
                      <div className="text-xs text-green-600 mt-1">More features</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="text-center text-sm text-gray-500 mt-4">
                You will be redirected to Mercado Pago to complete your subscription
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pay;
