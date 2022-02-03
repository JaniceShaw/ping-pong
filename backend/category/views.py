# from django.shortcuts import render
from rest_framework.generics import ListAPIView
from category.serializers import ListCategoriesSerializer, SubCategorySerializer
from category.models import Category, SubCategory


# Create your views here.
class ListCategories(ListAPIView):

    queryset = Category.objects.all()
    serializer_class = ListCategoriesSerializer
    permission_classes = []


class ListSubCategories(ListAPIView):

    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    permission_classes = []
