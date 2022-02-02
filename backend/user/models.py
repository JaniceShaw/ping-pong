from django.contrib.auth.models import AbstractUser
from django.db import models
# from django.contrib.auth import get_user_model

# User = get_user_model()
import pingpong_app.settings


class User(AbstractUser):
    # Field used for authentication - renames it to email
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)

    # following
    # following = models.ManyToManyField(to=pingpong_app.settings.AUTH_USER_MODEL, related_name='followed_by',  blank=True)

    # Todo: could add avatar here -- not sure how?
    # avatar =

    def __str__(self):
        return self.email
