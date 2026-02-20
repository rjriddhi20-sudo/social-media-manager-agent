from fastapi import APIRouter
from pydantic import BaseModel

from services.prompt_builder import build_strategy_prompt
from services.scaledown_service import compress_prompt
from services.analytics_service import calculate_compression_stats

router = APIRouter(prefix="/optimize-strategy", tags=["Strategy Optimization"])


class StrategyRequest(BaseModel):
    niche: str
    platform: str
    goal: str
    posting_frequency: int


@router.post("/")
def optimize_strategy(request: StrategyRequest):

    original_prompt = build_strategy_prompt(
        niche=request.niche,
        platform=request.platform,
        goal=request.goal,
        posting_frequency=request.posting_frequency
    )

    compression_result = compress_prompt(original_prompt)

    stats = calculate_compression_stats(compression_result)

    return {
        "original_prompt": original_prompt,
        "compressed_prompt": compression_result.get("results", {}).get("compressed_prompt"),
        "compression_stats": stats,
        "metadata": compression_result
    }
