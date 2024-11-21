from ninja import NinjaAPI

from gptchatbot.chat.api import chat_router, message_router

api = NinjaAPI()

api.add_router('/chat/', chat_router)
api.add_router('/message/', message_router)