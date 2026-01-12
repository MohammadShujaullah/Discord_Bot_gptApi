// Using Groq API (FREE & FAST)
export default {
  name: "ask",
  description: "Ask AI using Groq",

  async execute(message, args) {
    const prompt = args.join(" ");
    if (!prompt) {
      return message.reply("❗ Please provide a prompt.");
    }

    await message.channel.sendTyping();

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              { role: "system", content: "You are a helpful Discord bot assistant." },
              { role: "user", content: prompt },
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        return message.reply(`⚠️ API Error: ${data.error.message}`);
      }

      const aiResponse = data.choices?.[0]?.message?.content || "No response generated.";
      
      // Discord has a 2000 character limit
      if (aiResponse.length > 1900) {
        message.reply(aiResponse.substring(0, 1900) + "...");
      } else {
        message.reply(aiResponse);
      }
    } catch (err) {
      console.error(err);
      message.reply("⚠️ Error generating response.");
    }
  },
};
