const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const enviarMensaje = async (req, res) => {
  try {
    const prompt = req.body.mensaje;
    const result = await model.generateContent(prompt);
    res.json({ respuesta: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar el mensaje' });
  }
};

module.exports = { enviarMensaje };