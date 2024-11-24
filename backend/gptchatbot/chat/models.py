from django.core.validators import MinValueValidator
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
    sequence_number = models.IntegerField(validators=[MinValueValidator(0)], blank=True)
    text = models.TextField()
    sender = models.CharField(max_length=155, choices=Sender)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["sequence_number"]

    def save(self, *args, **kwargs):
        if not self.pk:
            last_message = self.chat.messages.order_by('-sequence_number').first()
            self.sequence_number = last_message.sequence_number + 1 if last_message else 0
        super().save(*args, **kwargs)