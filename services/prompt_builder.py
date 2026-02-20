def build_chat_prompt(message, platform, niche, tone, history=None):
    """
    Builds structured system prompt for Social Media Manager AI.
    Includes conversation history if available.
    """

    system_prompt = f"""
You are a professional Social Media Strategist.

Platform: {platform}
Niche: {niche}
Tone: {tone}

Generate content in the following format:

Hook:
Content Idea:
CTA:
Hashtags:
"""

    # Attach conversation history if exists
    history_block = ""
    if history:
        history_block = "\nConversation History:\n"
        for msg in history:
            role = msg.get("role")
            content = msg.get("content")
            history_block += f"{role.upper()}: {content}\n"

    final_prompt = f"""
{system_prompt}
{history_block}

User Request:
{message}
"""

    return final_prompt.strip()


def build_strategy_prompt(niche: str, platform: str, goal: str, posting_frequency: int) -> str:

    return f"""
You are an expert Social Media Growth Strategist.

Create a {posting_frequency}-day content strategy plan.

Platform: {platform}
Niche: {niche}
Goal: {goal}

Include:

1. 3–5 Content Pillars
2. Daily content ideas
3. Hook suggestions
4. CTA suggestions
5. Format recommendation (Reel/Carousel/Short)

Structure clearly and professionally.
"""

def build_calendar_prompt(platform: str, niche: str, posting_frequency: int) -> str:

    return f"""
You are a professional Social Media Content Planner.

Create a detailed {posting_frequency}-day posting calendar.

Platform: {platform}
Niche: {niche}

Include:

1. Daily post theme
2. Content type (Reel/Carousel/Short)
3. Suggested hook
4. Suggested CTA
5. Best posting time recommendation

Present clearly structured output.
"""
