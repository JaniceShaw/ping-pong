from django.db import models
from category.models import Category
from django.contrib.auth import get_user_model
User = get_user_model()


class MemberRequest(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    status_choices = (
        (1, 'Open'),
        (2, 'Active'),
        (3, 'Completed'),
    )
    status = models.PositiveSmallIntegerField(choices=status_choices, null=False, default=1)
    urgency_choices = (
        (1, 'I can wait'),
        (2, 'Soon please'),
        (3, 'Emergency!'),
    )
    urgency = models.PositiveSmallIntegerField(choices=urgency_choices, null=False, default=1)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    img_one = models.ImageField(blank=True, null=True)
    img_two = models.ImageField(blank=True, null=True)
    img_three = models.ImageField(blank=True, null=True)
    img_four = models.ImageField(blank=True, null=True)
    category = models.ForeignKey(to=Category, related_name='request_category', on_delete=models.CASCADE, null=True)
    # not sure if this is the best way or if we need sub_category
    # sub_category = models.ForeignKey(to=SubCategory, related_name='request_sub_category',
    # on_delete=models.CASCADE, null=True)
    member = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='member_request')
    helper = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='helper_request', blank=True, null=True)
    helper_status_choices = (
        (1, 'No response'),
        (2, 'Accepted'),
        (3, 'Rejected'),
    )
    helper_status = models.PositiveSmallIntegerField(choices=helper_status_choices, null=False, default=1)
    private = models.BooleanField(default=False)
    budget = models.CharField(max_length=50, blank=True, null=True)
