from django.contrib.auth.models import AbstractUser
from django.db import models
from category.models import Category
# from django.contrib.auth import get_user_model
# User = get_user_model()


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=25, blank=True, null=True)
    type_choices = (
        (1, 'Member'),
        (2, 'Helper'),
    )
    type = models.PositiveSmallIntegerField(choices=type_choices, null=False, default=1)
    street = models.CharField(max_length=150, blank=True, null=True)
    city = models.CharField(max_length=150, blank=True, null=True)
    zip = models.CharField(max_length=10, blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.ImageField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    # helper
    helper_verified = models.BooleanField(default=False)
    helper_verify_pic = models.ImageField(blank=True, null=True)
    helper_available_choices = (
        (1, 'Available'),
        (2, 'Busy'),
        (3, 'Not available'),
    )
    helper_available = models.PositiveSmallIntegerField(choices=helper_available_choices, null=False, default=1)
    helper_available_text = models.TextField(blank=True, null=True)
    # todo: change to many to many as user should be able to select more than one category
    helper_category = models.ForeignKey(to=Category, related_name='helper_category',
                                        on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.email
