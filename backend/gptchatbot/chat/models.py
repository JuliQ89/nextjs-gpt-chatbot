from django.db import models
import uuid


class Chat(models.Model):
    title = models.CharField(max_length=155)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.title
    

class Message(models.Model):
    class Sender(models.TextChoices):
        USER = "USER"
        BOT = "BOT"

    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sequence_number = models.IntegerField()
    text = models.TextField()
    sender = models.CharField(max_length=155, choices=Sender)
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        last_message = Message.objects.last()
        self.sequence_number = last_message.sequence_number if last_message.sequence_number else 0
        return super().save(*args, **kwargs)