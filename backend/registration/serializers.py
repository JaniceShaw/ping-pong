from rest_framework import serializers
from registration.models import Registration
from django.contrib.auth import get_user_model
User = get_user_model()


class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        fields = ['email', 'status', 'code', 'type']

        def perform_create(self, serializer):
            serializer.save()


class RegistrationValidationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)
    username = serializers.CharField(max_length=200, min_length=1)
    code = serializers.CharField(min_length=1)
    # new for type
    type = serializers.IntegerField()
    password = serializers.CharField(min_length=1, max_length=100)
    password_repeat = serializers.CharField(min_length=1, max_length=100)
    first_name = serializers.CharField(min_length=1)
    last_name = serializers.CharField(min_length=1)

    def validate(self, data):
        request_username = data.get('username')
        request_email = data.get('email')
        request_code = data.get('code')
        # new for type
        # request_type = data.get('type')
        request_password = data.get('password')
        request_password_repeat = data.get('password_repeat')

        if User.objects.filter(username__exact=request_username):
            raise serializers.ValidationError('username already taken')
        if User.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('email already in use')
        if not Registration.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('Email not found')
        if not Registration.objects.filter(code__exact=request_code):
            raise serializers.ValidationError('incorrect code')
        if not Registration.objects.filter(email__exact=request_email, code__exact=request_code):
            raise serializers.ValidationError('The registration code does not match your email')
        if request_password != request_password_repeat:
            raise serializers.ValidationError('The passwords do not match')

        return data

    class Meta:
        model = Registration
        fields = ['email', 'username', 'code', 'type', 'password', 'password_repeat', 'first_name', 'last_name']


# class RegistrationInfoSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Registration
#         fields = ['email', 'code']
#         read_only_fields = fields
#
#

class PasswordResetSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(min_length=1)

    def validate(self, data):
        request_email = data.get('email')

        if not Registration.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('Email not found')

        return data

    class Meta:
        model = Registration
        fields = ['email']
        read_only_fields = fields


class PasswordResetValidationSerializer(serializers.ModelSerializer):
    code = serializers.CharField(min_length=1)
    email = serializers.EmailField(min_length=1)
    password = serializers.CharField(min_length=1, max_length=100)
    password_repeat = serializers.CharField(min_length=1, max_length=100)

    def validate(self, data):
        request_code = data.get('code')
        request_email = data.get('email')

        request_password = data.get('password')
        request_password_repeat = data.get('password_repeat')

        if not Registration.objects.filter(code__exact=request_code):
            raise serializers.ValidationError('incorrect code')
        if not Registration.objects.filter(email__exact=request_email):
            raise serializers.ValidationError('Email not found')
        if not Registration.objects.filter(email__exact=request_email, code__exact=request_code):
            raise serializers.ValidationError('The registration code does not match your email')
        if request_password != request_password_repeat:
            raise serializers.ValidationError('The passwords do not match')

        return data

    class Meta:
        model = Registration
        fields = ['code', 'email', 'password', 'password_repeat']
