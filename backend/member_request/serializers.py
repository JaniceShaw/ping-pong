# from django.contrib.auth import get_user_model
from rest_framework import serializers
# from category.models import Category, SubCategory
from member_request.models import MemberRequest


# class SubCategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SubCategory
#         fields = ["id", "name", "category"]
#
#
# class ListCategoriesSerializer(serializers.ModelSerializer):
#     # get all info from related foreign key
#     sub_categories = SubCategorySerializer(many=True)
#
#     class Meta:
#         model = Category
#         fields = ['id', 'name', 'sub_categories']

class ListMemberRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberRequest
        fields = '__all__'


class MemberRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberRequest
        fields = '__all__'

