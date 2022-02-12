# from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from member_request.serializers import ListMemberRequestSerializer, MemberRequestSerializer, MemberReviewSerializer, HelperReviewSerializer
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated
from pingpong_app.permissions import IsOwnerOrReadOnly
# from category.models import Category, SubCategory
from member_request.models import MemberRequest, MemberReview, HelperReview


# to create a new request
class CreateMemberRequest(CreateAPIView):
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]


# display info for job list page
class ListMemberRequestView(ListAPIView):

    serializer_class = ListMemberRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MemberRequest.objects.filter(~Q(status=3))  # not equal to 3


# todo: add security so that only the member that created the request can edit or delete it,
#  also only a helper can except the job, change status
class RetrieveUpdateDeleteJobView(RetrieveUpdateDestroyAPIView):
    """
    get:
    Return details of job by given id

    patch:
    update job by given id

    delete:
    Delete job by given id
    """
    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    lookup_field = 'id'
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]


# probably don't need this -- DELETE --
class MemberRequestView(ListAPIView):

    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]


class CreateHelperReviewView(CreateAPIView):

    queryset = HelperReview.objects.all()
    serializer_class = HelperReviewSerializer
    permission_classes = [IsAuthenticated]


class ListMemberReviewView(ListAPIView):
    queryset = MemberReview.objects.all()
    serializer_class = MemberReviewSerializer
    permission_classes = [IsAuthenticated]


class ListHelperReviewView(ListAPIView):
    queryset = HelperReview.objects.all()
    serializer_class = HelperReviewSerializer
    permission_classes = [IsAuthenticated]


class HelperReviewsView(ListAPIView):
    serializer_class = HelperReviewSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'helper_id'

    def get_queryset(self):
        return HelperReview.objects.filter(helper=self.kwargs['helper_id'])
