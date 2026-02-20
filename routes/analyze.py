from fastapi import APIRouter
from pydantic import BaseModel

from services.scaledown_service import compress_prompt
from services.analytics_service import calculate_compression_stats

router = APIRouter(prefix="/analyze-prompt", tags=["Prompt Analysis"])


class AnalyzeRequest(BaseModel):
    prompt: str


@router.post("/")
def analyze_prompt(request: AnalyzeRequest):

    compression_result = compress_prompt(request.prompt)

    stats = calculate_compression_stats(compression_result)

    latency = compression_result.get("latency_ms", 0)

    return {
        "original_prompt": request.prompt,
        "compressed_prompt": compression_result.get("results", {}).get("compressed_prompt"),
        "compression_stats": stats,
        "latency_ms": latency
    }
