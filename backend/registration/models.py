from django.contrib.auth import get_user_model
from django.db import models

from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()
random_number = User.objects.make_random_password(length=5, allowed_chars='123456789')


class Registration(models.Model):
    email = models.EmailField(blank=False, null=False, max_length=100, unique=True)
    status = models.CharField(blank=False, null=False, max_length=12, default='inactive')
    code = models.CharField(blank=False, null=False, max_length=12, default=random_number)
    type_choices = (
        (1, 'Member'),
        (2, 'Helper'),
    )
    type = models.PositiveSmallIntegerField(choices=type_choices, null=False, default=1)

    def __str__(self):
        return f'email: {self.email} status: {self.status} code:{self.code}'

    # update table when new user has been validated -- use signals
    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = Registration.objects.get_or_create(email=instance.email)
        if created:
            profile.status = 'active'
            profile.save()
        else:
            profile.status = 'active'
            profile.save()
