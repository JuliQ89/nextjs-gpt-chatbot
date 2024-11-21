from django.contrib import admin
from .models import Chat, Message

class ChatAdminModel(admin.ModelAdmin):
    search_fields = ['title']
    list_display = ['title', 'created']

class MessageAdminModel(admin.ModelAdmin):
    search_fields = ['sender', 'created']
    list_display = ['sender', 'sequence_number', 'created']

admin.site.register(Chat, ChatAdminModel)
admin.site.register(Message, MessageAdminModel)
