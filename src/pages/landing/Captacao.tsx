import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SendIcon, Loader2, CheckCircle2 } from "lucide-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const LeadCapture = () => {
  const [phone, setPhone] = useState("");
  const [niche, setNiche] = useState("");
  const [plan, setPlan] = useState("startup"); // Default to startup plan
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validatePhone = (phoneNumber: string) => {
    return phoneNumber.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    if (!niche) {
      setError("Please select a niche");
      return;
    }
  
    if (!validatePhone(phone)) {
      setError("Please enter a valid phone number");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch("api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: phone,
          niche,
          plan,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit data.");
      }
  
      setSubmitted(true);
  
      setTimeout(() => {
        setPhone("");
        setNiche("");
        setSubmitted(false);
      }, 10000);
    } catch (err) {
      console.error("Error to send:", err);
      toast.error("Erro to send forms.");
    } finally {
      setIsLoading(false);
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
              TRY JULIA YOUR WAY
            </CardTitle>
            <CardDescription className="text-white/90 text-center">
              Chat with JULIA and discover how she works in your niche! Get your questions answered, explore benefits, and enjoy solutions made for you. Ask now and learn more!
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6 pb-4">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Thank you for your interest!</h3>
                <p className="text-gray-500 text-center">
                  You will receive a message on your WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Select your niche of interest
                  </label>
                  <Select 
                    value={niche} 
                    onValueChange={(value) => {
                      setNiche(value);
                      setError("");
                    }} 
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a niche" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem className="hover:bg-gray-100" value="ecommerce">Ecommerce</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="health">Health</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="academy">Academy</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="automotive">Automotive</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="beauty">Beauty</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="delivery">Delivery</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="tourism">Tourism</SelectItem>
                      <SelectItem className="hover:bg-gray-100" value="infoproduct">Infoproduct</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">
                    Enter your phone number
                  </label>
                  <PhoneInput
                    country={'br'}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      setError("");
                    }}
                    inputProps={{
                      required: true,
                    }}
                    containerClass="phone-input-container"
                    inputClass={`phone-input-field ${error ? 'border-red-500' : ''}`}
                    buttonClass="phone-input-dropdown"
                    dropdownClass="phone-input-dropdown-list"
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm animate-in fade-in">
                    {error}
                  </p>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#02132D] to-[#0071CB] text-white transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4 mr-2" />
                      I Want to Participate
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadCapture;