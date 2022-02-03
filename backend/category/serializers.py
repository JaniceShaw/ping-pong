# from django.contrib.auth import get_user_model
from rest_framework import serializers
from category.models import Category, SubCategory


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ["id", "name", "category"]


class ListCategoriesSerializer(serializers.ModelSerializer):
    # sub_categories = serializers.CharField(source='sub_categories.id', read_only=True)
    # sub_categories = SubCategory.objects.all()
    # sub_categories_name = sub_categories['name']
    # sub_categories = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['name', 'sub_categories']

    @staticmethod
    def get_sub_categories(obj):
        return SubCategorySerializer(obj, many=True, read_only=True).data.name



