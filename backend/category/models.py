from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    name = models.CharField(max_length=50)
    category = models.ForeignKey(to=Category, related_name='sub_category', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
