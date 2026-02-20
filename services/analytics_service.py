def calculate_compression_stats(original_prompt, compressed_prompt):
    """
    Calculates token reduction statistics between
    original and compressed prompt.
    """

    if not compressed_prompt:
        return {
            "error": "Compression failed"
        }

    original_tokens = len(original_prompt.split())
    compressed_tokens = len(compressed_prompt.split())

    tokens_saved = original_tokens - compressed_tokens

    reduction_percent = round(
        (tokens_saved / original_tokens) * 100, 2
    ) if original_tokens > 0 else 0

    return {
        "original_tokens": original_tokens,
        "compressed_tokens": compressed_tokens,
        "tokens_saved": tokens_saved,
        "reduction_percent": reduction_percent
    }
