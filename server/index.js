require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || 4000;

app.get('/health', (req, res) => res.json({ ok: true }));

// Proxy chatbot requests to OpenRouter (server-side so API key is not exposed)
app.post('/api/chatbot', async (req, res) => {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'No API key configured' });

    const resp = await axios.post('https://api.openrouter.ai/v1/chat/completions', req.body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      timeout: 30000,
    });
    res.status(resp.status).json(resp.data);
  } catch (err) {
    const status = err.response?.status || 500;
    const data = err.response?.data || { message: err.message };
    res.status(status).json(data);
  }
});

// Verify reCAPTCHA token server-side
app.post('/api/verify-recaptcha', async (req, res) => {
  try {
    const { token } = req.body;
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) return res.status(500).json({ error: 'No reCAPTCHA secret configured' });

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const resp = await axios.post('https://www.google.com/recaptcha/api/siteverify', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    res.status(resp.status).json(resp.data);
  } catch (err) {
    const status = err.response?.status || 500;
    const data = err.response?.data || { message: err.message };
    res.status(status).json(data);
  }
});

// Accept contact form, verify recaptcha, then forward to Web3Forms server-side
app.post('/api/submit-form', async (req, res) => {
  try {
    const { token, form } = req.body;
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const web3formsKey = process.env.WEB3FORMS_KEY;

    if (!recaptchaSecret) return res.status(500).json({ error: 'No reCAPTCHA secret configured' });
    if (!web3formsKey) return res.status(500).json({ error: 'No Web3Forms key configured' });

    // Verify token
    const params = new URLSearchParams();
    params.append('secret', recaptchaSecret);
    params.append('response', token);

    const verifyResp = await axios.post('https://www.google.com/recaptcha/api/siteverify', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    if (!verifyResp.data?.success) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed', details: verifyResp.data });
    }

    // Forward to Web3Forms
    const payload = {
      access_key: web3formsKey,
      subject: form.subject || `Nouvelle demande - ${form.name}`,
      name: form.name,
      phone: form.phone,
      email: form.email,
      building: form.building || '-',
      city: form.city,
      reference: form.reference || '-',
      latitude: form.latitude || '',
      longitude: form.longitude || '',
      google_maps_url: form.google_maps_url || '',
      'g-recaptcha-response': token,
      service: form.service,
      message: form.message,
    };

    const resp = await axios.post('https://api.web3forms.com/submit', payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    res.status(resp.status).json(resp.data);
  } catch (err) {
    const status = err.response?.status || 500;
    const data = err.response?.data || { message: err.message };
    res.status(status).json(data);
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
