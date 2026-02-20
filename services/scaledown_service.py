import requests
from config import SCALEDOWN_API_KEY


SCALEDOWN_URL = "https://api.scaledown.xyz/compress/raw/"


def compress_prompt(prompt: str):
    try:
        headers = {
            "x-api-key": SCALEDOWN_API_KEY,
            "Content-Type": "application/json"
        }

        payload = {
            "context": "Optimize and compress this prompt efficiently.",
            "prompt": prompt,
            "model": "gpt-4o",
            "scaledown": {
                "rate": "auto"
            }
        }

        response = requests.post(
            SCALEDOWN_URL,
            headers=headers,
            json=payload,
            timeout=10
        )

        data = response.json()

        if data.get("successful") or data.get("results", {}).get("success"):
            # Handle both possible structures
            if "compressed_prompt" in data:
                return data["compressed_prompt"]

            if "results" in data and "compressed_prompt" in data["results"]:
                return data["results"]["compressed_prompt"]

        return None

    except Exception:
        return None
