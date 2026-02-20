from fastapi import APIRouter
from pydantic import BaseModel

from services.prompt_builder import build_chat_prompt
from services.scaledown_service import compress_prompt
from services.analytics_service import calculate_compression_stats
from services.llm_service import generate_response
from services.memory_service import (
    load_history,
    save_user_message,
    save_ai_message
)

router = APIRouter(prefix="/chat", tags=["AI Chat"])


# -----------------------------
# Request Model
# -----------------------------
class ChatRequest(BaseModel):
    chat_id: str
    message: str
    platform: str
    niche: str
    tone: str


# -----------------------------
# Chat Endpoint
# -----------------------------
@router.post("/")
def chat(request: ChatRequest):
    try:
        # Extract fields
        chat_id = request.chat_id
        message = request.message
        platform = request.platform
        niche = request.niche
        tone = request.tone

        # Load conversation history
        history = load_history(chat_id)

        # Save user message
        save_user_message(chat_id, message)

        # Build structured system prompt
        structured_prompt = build_chat_prompt(
            message=message,
            platform=platform,
            niche=niche,
            tone=tone,
            history=history
        )

        # Optional: Compress prompt using ScaleDown
        compressed_prompt = structured_prompt

        # Calculate compression analytics
        compression_stats = calculate_compression_stats(
            structured_prompt,
            compressed_prompt
        )

        # If compression fails, use original prompt
        final_prompt = compressed_prompt if compressed_prompt else structured_prompt

        # Generate AI response
        ai_response = generate_response(final_prompt)

        # Save AI response
        save_ai_message(chat_id, ai_response)

        return {
            "status": "success",
            "ai_response": ai_response,
            "original_prompt": structured_prompt,
            "compressed_prompt": compressed_prompt,
            "compression_stats": compression_stats,
            "history": load_history(chat_id)
        }

    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
