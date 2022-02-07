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
    category = models.ForeignKey(to=Category, related_name='request_category', on_delete=models.CASCADE, default=1)
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

    def __str__(self):
        return self.title


class HelperReview(models.Model):
    text_content = models.TextField(blank=False, null=False)
    rating_choices = (
        (0, '0'),
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    rating = models.PositiveSmallIntegerField(choices=rating_choices, null=False, default=0)
    member_request = models.OneToOneField(to=MemberRequest, on_delete=models.CASCADE, related_name='helper_review')
    created = models.DateTimeField(auto_now_add=True)
    helper = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='helper_reviews', null=True)

    def __str__(self):
        return self.text_content

    def __unicode__(self):
        return f'{self.rating}'


class MemberReview(models.Model):
    text_content = models.TextField(blank=False, null=False)
    rating_choices = (
        (0, '0'),
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5'),
    )
    rating = models.PositiveSmallIntegerField(choices=rating_choices, null=False, default=0)
    member_request = models.OneToOneField(to=MemberRequest, on_delete=models.CASCADE, related_name='member_review')
    created = models.DateTimeField(auto_now_add=True)
    member = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='member_reviews', null=True)
