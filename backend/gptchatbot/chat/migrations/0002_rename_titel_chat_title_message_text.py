# Generated by Django 5.1.3 on 2024-11-21 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chat',
            old_name='titel',
            new_name='title',
        ),
        migrations.AddField(
            model_name='message',
            name='text',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
