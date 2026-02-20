from storage.memory_store import get_chat_history, append_message

def load_history(chat_id):
    return get_chat_history(chat_id)

def save_user_message(chat_id, message):
    append_message(chat_id, "user", message)

def save_ai_message(chat_id, message):
    append_message(chat_id, "assistant", message)

