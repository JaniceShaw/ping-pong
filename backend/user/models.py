from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# from django.contrib.auth import get_user_model
# User = get_user_model()


class User(AbstractUser):
    # Field used for authentication - renames it to email
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=25, blank=False, null=False)
    type = models.PositiveSmallIntegerField(blank=False, null=False, default=1)
    street = models.CharField(max_length=150, blank=False, null=False)
    city = models.CharField(max_length=150, blank=False, null=False)
    zip = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=100, blank=False, null=False)
    profile_pic = models.ImageField(blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email


class HelperProfile(models.Model):
    description = models.TextField(blank=False, null=False)
    verified = models.BooleanField(default=False)
    available = models.PositiveSmallIntegerField(
        blank=False, null=False, default=1, validators=[MaxValueValidator(3), MinValueValidator(1)])
    available_text = models.TextField(blank=True, null=True)
    # category -- need to make category app
    # user = models.OneToOneField(to=User)


class MemberProfile(models.Model):
    description = models.TextField(blank=True, null=True)
    # user = models.OneToOneField(to=User)

