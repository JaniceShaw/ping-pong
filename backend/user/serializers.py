from django.contrib.auth import get_user_model
from rest_framework import serializers
from member_request.serializers import HelperRatingSerializer
from category.serializers import ListCategoriesSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'type']


# todo: add rating field for members and helpers
class MemberPublicProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'city', 'zip', 'profile_pic']


class HelperPublicProfileSerializer(serializers.ModelSerializer):
    helper_reviews = HelperRatingSerializer(many=True)
    helper_categories = ListCategoriesSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'city', 'zip', 'profile_pic', 'helper_categories',
                  'helper_available', 'helper_verified', 'helper_reviews', 'date_joined']


class MemberProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone', 'street', 'city', 'zip', 'lon', 'lat', 
        'profile_pic', 'description', 'last_login']

class HelperProfileSerializer(serializers.ModelSerializer):
    helper_categories = ListCategoriesSerializer(many=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone', 'street', 'city', 'zip', 'lon', 'lat', 
                  'profile_pic', 'description', 'last_login', 'helper_hourly_rate', 'helper_categories',
                  'helper_available', 'helper_verified']
