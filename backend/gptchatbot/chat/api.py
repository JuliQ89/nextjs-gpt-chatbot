from django.shortcuts import get_object_or_404
from ninja import Router
from .models import Chat, Message
from .schemas import ChatSchemaIn, ChatSchemaOut, MessageSchemaIn, MessageSchemaOut
from typing import List
import uuid


# ##### CHAT #####
chat_router = Router(tags=['Chat'])

@chat_router.get('/', response=List[ChatSchemaOut])
def get_chats(request):
    return Chat.objects.all()

@chat_router.get('/{id}/', response=ChatSchemaOut)
def get_chat(request, id: uuid.UUID):
    chat = get_object_or_404(Chat, id=id)
    return chat

@chat_router.post('/', response=ChatSchemaOut)
def post_chat(request, payload:ChatSchemaIn):
    chat = Chat.objects.create(**payload.dict())
    return chat

@chat_router.put('/{id}/', response=ChatSchemaOut)
def put_chat(request, payload:ChatSchemaIn, id:uuid.UUID):
    chat = get_object_or_404(Chat, id=id)
    for attr, value in payload.dict().items():
        setattr(chat, attr, value)
    chat.save()
    return chat

@chat_router.delete('/{id}/')
def delete_chat(request, id:uuid.UUID):
    chat = get_object_or_404(Chat, id=id)
    chat.delete()
    return 200, {"success": True}


# ##### MESSAGE #####
message_router = Router(tags=['Message'])

@message_router.get('/', response=List[MessageSchemaOut])
def get_messages(request):
    return Message.objects.all()

@message_router.get('/{id}/', response=MessageSchemaOut)
def get_message(request, id: int):
    message = get_object_or_404(Message, id=id)
    return message
    
@message_router.post('/', response=MessageSchemaOut)
def post_message(request, payload:MessageSchemaIn):
    message = Message.objects.create(**payload.dict())
    return message

    
@message_router.put('/{id}/', response=MessageSchemaOut)
def put_message(request, payload:MessageSchemaIn, id:int):
    message = get_object_or_404(Chat, id=id)
    for attr, value in payload.dict().items():
        setattr(message, attr, value)
    message.save()
    return message

@message_router.delete('/{id}/')
def delete_message(request, id:int):
    message = get_object_or_404(Message, id=id)
    message.delete()
    return 200, {"success": True}