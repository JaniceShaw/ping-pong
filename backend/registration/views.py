from rest_framework.generics import CreateAPIView, UpdateAPIView, GenericAPIView
from .serializers import RegisterSerializer, RegistrationValidationSerializer, PasswordResetSerializer, PasswordResetValidationSerializer
from .models import Registration
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny


# for the email and auth
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

from registration.models import Registration

# from user.serializers import UserSerializer

User = get_user_model()


# View to register user - receives am email address, returns status, email, code
class RegistrationView(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = RegisterSerializer

    def perform_create(self, serializer):

        serializer.save()
        email = serializer.data['email']
        code = serializer.data['code']
        # type = serializer.data['type']

        html_mail = '<div style="background-color:#E6E1FC; margin:0 auto; ' \
                    'border-radius:5px; width:100%; text-align:center; height:400px; padding:0">' \
                    '<h1 style="color:#3B1A74; padding:30px">Thank you for registering at Ping-pong!</h1>' \
                    '<p style="font-size:14px; padding-bottom:40px;">' \
                    'Your validation code is: <strong>{}</strong></p>' \
                    '<p><a href="https://ping-pong.propulsion-learn.ch" target="_blank">Ping-pong</a>' \
                    '</p></div>'.format(code)

        send_mail(
            'Thank you for registering!',
            'Thank you for registering: your validation code is: {}'.format(code),
            'ping-pong@gmail.com',
            [email],
            fail_silently=False,
            html_message=html_mail
        )
        return Response(status=status.HTTP_200_OK)


# password reset -
# get password check if password is in registration table if found send the related code by email
class PasswordResetView(GenericAPIView):
    """
    post:
    sends email with code
    """

    permission_classes = [AllowAny]
    serializer_class = PasswordResetSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data['email']
            code = Registration.objects.filter(email=email)[0].code

            html_mail = '<div style="background-color:#E6E1FC; margin:0 auto; ' \
                        'border-radius:5px; width:100%; text-align:center; height:400px; padding:0">' \
                        '<h1 style="color:#3B1A74; padding:30px">Your validation code for Ping-pong!</h1>' \
                        '<p style="font-size:14px; padding-bottom:40px;">' \
                        'Your validation code is: <strong>{}</strong></p>' \
                        '<p><a href="https://motion-jos.propulsion-learn.ch" target="_blank">Ping-pong</a>' \
                        '</p></div>'.format(code)

            send_mail(
                'Password reset',
                'your validation code is: {}'.format(code),
                'ping-pong@gmail.com',
                [email],
                fail_silently=False,
                html_message=html_mail
            )
            return Response(status=status.HTTP_200_OK)


# View to validate registration and add new user
class RegistrationValidationView(UpdateAPIView):

    permission_classes = []
    serializer_class = RegistrationValidationSerializer

    def patch(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            User.objects.create_user(email=serializer.validated_data['email'],
                                     password=serializer.validated_data['password'],
                                     type=serializer.validated_data['type'],
                                     username=serializer.validated_data['username'],
                                     first_name=serializer.validated_data['first_name'],
                                     last_name=serializer.validated_data['last_name'])
            return Response(status=status.HTTP_200_OK)


# View to validate password reset and update password
class PasswordResetValidationView(UpdateAPIView):

    permission_classes = []
    serializer_class = PasswordResetValidationSerializer

    def patch(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # set_password hash the password
            obj = User.objects.filter(email=serializer.validated_data['email'])[0]
            obj.set_password(serializer.validated_data['password'])
            obj.save()

            return Response(status=status.HTTP_200_OK)
