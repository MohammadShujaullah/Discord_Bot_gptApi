# Discord AI Bot

A Discord bot that responds to `!ask` commands using free AI API integration.

## Features
- Free AI responses using Groq API (Llama 3.1 model)
- Cost-effective alternative to OpenAI GPT
- Secure environment variable handling
- Error handling and rate limiting
- Discord message length management

## Setup
1. Install dependencies: `npm install`
2. Create `.env` file with:
   ```
   DISCORD_TOKEN=your_discord_token
   GROQ_API_KEY=your_groq_api_key
   ```
3. Get free API keys from:
   - Discord: https://discord.com/developers/applications
   - Groq: https://console.groq.com/

## Usage
- `!ask your question here` - Get AI responses in Discord