from django.db import models


class SubCategory(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class Category(models.Model):
    name = models.CharField(max_length=50)
    sub_categories = models.ManyToManyField(to=SubCategory, related_name='category', blank=True)

    def __str__(self):
        return self.name
