# from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, get_object_or_404, RetrieveAPIView
from user.serializers import UserProfileSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
# from rest_framework import filters
# from .models import UserProfile
User = get_user_model()


class ListProfilesView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUpdateUserProfileView(RetrieveUpdateAPIView):
    """
    get:
    Returns profile of logged-in user

    patch:
    Updates profile of logged-in user
    """

    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile = User.objects.filter(id=self.request.user.id)
        return get_object_or_404(profile, id=self.request.user.id)


class RetrieveUserInfo(RetrieveAPIView):
    """
    get:
    Return user profile of user id in url
    """
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'


# class RetrieveSearchUserInfo(RetrieveAPIView):
#     """
#     get:
#     Return user profile of user id in url
#     """
#     # search_fields = ['username']
#     # filter_backends = (filters.SearchFilter,)
#
#     serializer_class = UserProfileSerializer
#     def get_queryset(self):
#         queryset = User.objects.all()
#     # permission_classes = [IsAuthenticated]
#         username = self.request.query_params.get('search')
#         if username is not None:
#             queryset = queryset.filter(username=username)
#         return queryset
