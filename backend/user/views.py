# from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, get_object_or_404, RetrieveAPIView
from user.serializers import MemberPublicProfileSerializer, HelperPublicProfileSerializer, MemberProfileSerializer, HelperProfileSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
# from rest_framework import filters
# from .models import UserProfile
User = get_user_model()


# class ListProfilesView(ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]


# class RetrieveUpdateUserProfileView(RetrieveUpdateAPIView):
#     """
#     get:
#     Returns profile of logged-in user
#
#     patch:
#     Updates profile of logged-in user
#     """

    # queryset = User.objects.all()
    # serializer_class = UserProfileSerializer    """
# #     get:
# #     Returns profile of logged-in user
# #
# #     patch:
# #     Updates profile of logged-in user
# #     """
    # permission_classes = [IsAuthenticated]
    #
    # def get_object(self):
    #     profile = User.objects.filter(id=self.request.user.id)
    #     return get_object_or_404(profile, id=self.request.user.id)


class ListHelperInfo(ListAPIView):

    queryset = User.objects.filter(type=2)
    serializer_class = HelperPublicProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class ListMemberInfo(ListAPIView):

    queryset = User.objects.filter(type=1)
    serializer_class = MemberPublicProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveMemberInfo(RetrieveAPIView):
    """
    get:
    Return Member profile of user id in url
    """
    queryset = User.objects.all()
    serializer_class = MemberProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'


class RetrieveHelperInfo(RetrieveAPIView):
    """
    get:
    Return Helper profile of user id in url
    """
    queryset = User.objects.all()
    serializer_class = HelperProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'
