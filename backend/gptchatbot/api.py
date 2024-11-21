from ninja import NinjaAPI

from gptchatbot.chat.api import router as chat_router

api = NinjaAPI()

api.add_router('/chat/', chat_router)