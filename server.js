// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // permite solicitudes desde Angular
app.use(express.json());

const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate';
const API_KEY = '4de903eb-9215-4524-89d1-f7c2005c9277:fx';

app.post('/api/translate', async (req, res) => {
  try {
    const response = await axios.post(
      DEEPL_API_URL,
      {
        text: req.body.text,
        target_lang: req.body.target_lang
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `DeepL-Auth-Key ${API_KEY}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error al traducir:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Error al traducir',
      detail: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend funcionando en http://localhost:${PORT}`);
});
