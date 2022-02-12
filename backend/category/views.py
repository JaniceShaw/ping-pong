# from django.shortcuts import render
from rest_framework.generics import ListAPIView
from category.serializers import ListCategoriesSerializer, SubCategorySerializer
from category.models import Category, SubCategory
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# Create your views here.
class ListCategories(ListAPIView):

    queryset = Category.objects.all()
    serializer_class = ListCategoriesSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ListSubCategories(ListAPIView):

    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
