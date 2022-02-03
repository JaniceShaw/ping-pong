from registration.views import RegistrationView, RegistrationValidationView, PasswordResetView, PasswordResetValidationView
from django.urls import path

urlpatterns = [
    path('registration/', RegistrationView.as_view()),
    path('registration/validate/', RegistrationValidationView.as_view()),

    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset/validate/', PasswordResetValidationView.as_view())
]
