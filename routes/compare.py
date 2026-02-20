from fastapi import APIRouter
from pydantic import BaseModel

from services.prompt_builder import build_chat_prompt
from services.scaledown_service import compress_prompt
from services.analytics_service import calculate_compression_stats

router = APIRouter(prefix="/compare-prompts", tags=["Prompt Comparison"])


class CompareRequest(BaseModel):
    message: str
    platform: str
    niche: str
    tone: str


@router.post("/")
def compare_prompts(request: CompareRequest):

    # Naive prompt (messy)
    naive_prompt = f"""
    Give me social media content ideas for {request.platform}.
    Topic is {request.niche}.
    Tone should be {request.tone}.
    User said: {request.message}
    """

    # Engineered structured prompt
    optimized_prompt = build_chat_prompt(
        message=request.message,
        platform=request.platform,
        niche=request.niche,
        tone=request.tone
    )

    # Compress both
    naive_result = compress_prompt(naive_prompt)
    optimized_result = compress_prompt(optimized_prompt)

    # Calculate stats
    naive_stats = calculate_compression_stats(naive_result)
    optimized_stats = calculate_compression_stats(optimized_result)

    return {
        "naive_prompt_stats": naive_stats,
        "optimized_prompt_stats": optimized_stats,
       "optimization_gain_percent":
    optimized_stats.get("reduction_percent", 0) -
    naive_stats.get("reduction_percent", 0)

    }
