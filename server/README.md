This small Express proxy keeps your private keys on the server instead of bundling them into the client.

Installation

1. From the project root, install server dependencies:

```bash
cd server
npm install
```

2. Create a `.env` file in `server/` (or place the variables in your system environment). Copy values from the project's `.env.example` and fill your real secrets.

Example `.env` (server):

```
OPENROUTER_API_KEY=sk-or-...
RECAPTCHA_SECRET_KEY=...
SERVER_PORT=4000
```

Run

```bash
npm run start
```

Endpoints

- `POST /api/chatbot` — forwards the request body to OpenRouter. Use this from the client instead of calling OpenRouter directly.
- `POST /api/verify-recaptcha` — verifies a reCAPTCHA token server-side. Request body: `{ token: '...' }`.
