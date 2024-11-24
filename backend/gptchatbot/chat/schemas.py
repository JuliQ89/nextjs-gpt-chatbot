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
    sender: str
    chat: uuid.UUID

class MessageSchemaOut(Schema):
    chat: ChatSchemaOut
    sequence_number: int
    text: str
    sender: str
    created: datetime
    id: int