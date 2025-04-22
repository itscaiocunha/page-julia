export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método não permitido" });
    }
  
    try {
      const { phoneNumber, niche } = req.body;
  
      const webhookUrl = "https://api.z-whitelabel.com/v1/webhook/agent-incoming-webhook-event/create?agentIncomingWebhookId=3272&key=366c8b54-18ab-43ef-8baa-b60a463dc353";
  
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, niche }),
      });
  
      if (!response.ok) {
        throw new Error(`Webhook falhou com status ${response.status}`);
      }
  
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Erro ao enviar para o webhook:", err);
      res.status(500).json({ success: false, error: "Erro ao enviar webhook" });
    }
  }  