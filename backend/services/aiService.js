const generateMockResponse = ({ message, platform, niche, tone }) => {
  const hooks = {
    bold: "🔥 STOP SCROLLING!",
    informational: "📌 Here's what you need to know:",
    cute: "✨ Okay but this is adorable:",
    professional: "📊 Strategic insight:"
  };

  const ctas = {
    instagram: "💬 Comment your thoughts & save this post!",
    youtube: "👉 Subscribe for more content like this!"
  };

  const formats = {
    instagram: `
🎬 Reel Structure:
1️⃣ Hook (3 seconds)
2️⃣ Quick value drop
3️⃣ Visual demonstration
4️⃣ CTA at end

📈 Hashtags:
#${niche} #${niche}tips #contentcreator #growfast
`,

    youtube: `
🎥 YouTube Short Structure:
0–3s: Strong hook
3–20s: High-energy value
20–40s: Quick demo
40–60s: CTA

🔎 SEO Keywords:
${niche} tips, trending ${niche}, beginner ${niche}
`
  };

  return `
✨ BLOOMELLA AI Content Plan ✨

Platform: ${platform.toUpperCase()}
Niche: ${niche}
Tone: ${tone}

${hooks[tone] || hooks.informational}

💡 Content Idea Based On Your Prompt:
"${message}"

🎯 Suggested Execution:
Create fast-paced, visually engaging content around ${niche}.
Keep the tone "${tone}" throughout the video.

${formats[platform]}

📢 CTA:
${ctas[platform]}

🚀 Bonus Growth Tip:
Post consistently 3–4 times per week and engage within the first 30 minutes.
`;
};

module.exports = { generateMockResponse };
