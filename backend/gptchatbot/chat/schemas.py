from ninja import Schema
from .models import Chat, Message
from datetime import datetime
import uuid


class ChatSchemaIn(Schema):
    title: str


class ChatSchemaOut(Schema):
    title: str
    created: datetime
    id: uuid.UUID


class MessageSchemaIn(Schema):
    text: str

class MessageSchemaOut(Schema):
    chat: ChatSchemaOut
    sequence_number: int
    text: str
    sender: str
    created: datetime