import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/lead", async (req, res) => {
  try {
    const { phoneNumber, niche } = req.body;

    const webhookUrl = "https://api.z-whitelabel.com/v1/webhook/agent-incoming-webhook-event/create?agentIncomingWebhookId=3272&key=366c8b54-18ab-43ef-8baa-b60a463dc353"; // seu endpoint da Zaia aqui
    const response = await axios.post(webhookUrl, { phoneNumber, niche });

    console.log("Webhook enviado com status:", response.status);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar para o webhook:", err);
    res.status(500).json({ success: false, error: "Erro ao enviar webhook" });
  }
});

app.listen(3001, () => {
  console.log("Servidor proxy ouvindo em http://localhost:3001");
});