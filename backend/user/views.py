# from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, get_object_or_404, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from user.serializers import MemberPublicProfileSerializer, HelperPublicProfileSerializer, MemberProfileSerializer, HelperProfileSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.db.models import Avg
# from rest_framework import filters
# from .models import UserProfile
User = get_user_model()
user = User.objects.annotate(avg_rating=Avg('helper_reviews__rating'))

# class ListProfilesView(ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserProfileSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveUpdateMemberProfileView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Returns profile of logged-in Member

    patch:
    Updates profile of logged-in Member

    delete:
    delete profile of logged-in Member
    """
    queryset = User.objects.all()
    serializer_class = MemberProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile = User.objects.filter(id=self.request.user.id).filter(type=1)
        return get_object_or_404(profile, id=self.request.user.id)


class RetrieveUpdateHelperProfileView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Returns profile of logged-in Member

    patch:
    Updates profile of logged-in Member

    delete:
    delete profile of logged-in Member
    """
    queryset = User.objects.all()

    serializer_class = HelperProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile = User.objects.filter(id=self.request.user.id).filter(type=2)
        return get_object_or_404(profile, id=self.request.user.id)


class ListHelperInfo(ListAPIView):

    queryset = User.objects.filter(type=2)
    serializer_class = HelperPublicProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    # def get_queryset(self):
    #     return User.objects.filter(type=2).annotate(avg_rating=Avg('helper_reviews__rating'))

class ListMemberInfo(ListAPIView):

    queryset = User.objects.filter(type=1)
    serializer_class = MemberPublicProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class RetrieveMemberInfo(RetrieveAPIView):
    """
    get:
    Return Member profile of user id in url
    """
    queryset = User.objects.all().filter(type=1)
    serializer_class = MemberProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'


class RetrieveHelperInfo(RetrieveAPIView):
    """
    get:
    Return Helper profile of user id in url
    """
    queryset = User.objects.all().filter(type=2)
    serializer_class = HelperProfileSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'user_id'


# class RetrieveUpdateDeleteMemberView(RetrieveUpdateDestroyAPIView):
#     """
#     get:
#     Return details of restaurant by given id
#
#     patch:
#     update restaurant by given id
#
#     delete:
#     Delete restaurant by given id
#     """
#     queryset = Restaurant.objects.all()
#     serializer_class = RestaurantSerializer
#     lookup_field = 'id'
#     permission_classes = [IsAuthenticated]
