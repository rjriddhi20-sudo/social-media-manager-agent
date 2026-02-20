import json
import os

FILE_PATH = "chat_history.json"

def load_memory():
    if not os.path.exists(FILE_PATH):
        return {}
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def save_memory(data):
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

def get_chat_history(chat_id):
    data = load_memory()
    return data.get(chat_id, [])

def append_message(chat_id, role, content):
    data = load_memory()
    if chat_id not in data:
        data[chat_id] = []

    data[chat_id].append({
        "role": role,
        "content": content
    })

    save_memory(data)

