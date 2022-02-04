from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


# todo: add rating field for members and helpers
class MemberPublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'city', 'zip', 'profile_pic']


class HelperPublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'city', 'zip', 'profile_pic', 'helper_categories',
                  'helper_available', 'helper_verified']


class MemberProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone', 'street', 'city', 'zip',
                  'profile_pic', 'description', 'last_login']


class HelperProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'phone', 'street', 'city', 'zip',
                  'profile_pic', 'description', 'last_login', 'helper_hourly_rate', 'helper_categories',
                  'helper_available', 'helper_verified']
