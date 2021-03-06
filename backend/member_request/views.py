# from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from member_request.serializers import ListMemberRequestSerializer, MemberRequestSerializer, MemberReviewSerializer, HelperReviewSerializer, ListJobsSerializer
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
# from pingpong_app.permissions import IsOwnerOrReadOnly
# from category.models import Category, SubCategory
from member_request.models import MemberRequest, MemberReview, HelperReview


# to create a new request
class CreateMemberRequest(CreateAPIView):
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]


# display info for job list page
class ListMemberRequestView(ListAPIView):

    serializer_class = ListMemberRequestSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return MemberRequest.objects.filter(~Q(status=3))  # not equal to 3


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
    permission_classes = [IsAuthenticated]


# probably don't need this -- DELETE --
class MemberRequestView(ListAPIView):

    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]


class CreateHelperReviewView(CreateAPIView):

    queryset = HelperReview.objects.all()
    serializer_class = HelperReviewSerializer
    permission_classes = [IsAuthenticated]


class CreateMemberReviewView(CreateAPIView):

    queryset = MemberReview.objects.all()
    serializer_class = MemberReviewSerializer
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


class ListHelperJobsView(ListAPIView):
    serializer_class = ListJobsSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'helper_id'

    def get_queryset(self):
        return MemberRequest.objects.filter(helper=self.kwargs['helper_id'])


class ListMemberJobsView(ListAPIView):
    serializer_class = ListJobsSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'member_id'

    def get_queryset(self):
        return MemberRequest.objects.filter(member=self.kwargs['member_id'])
