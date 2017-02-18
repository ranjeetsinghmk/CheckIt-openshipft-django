from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

#Will work automatically
@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
        print("Token generated")

#not using
def createTokenForAll():
    tokens = {}
    for user in User.objects.all():
        tokens[user] = Token.objects.get_or_create(user=user)
    return tokens
