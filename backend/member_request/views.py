# from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from member_request.serializers import ListMemberRequestSerializer, MemberRequestSerializer
from rest_framework.permissions import IsAuthenticated
# from category.models import Category, SubCategory
from member_request.models import MemberRequest

# display info for job list page
class ListMemberRequestView(ListAPIView):

    serializer_class = ListMemberRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MemberRequest.objects.filter(status=1)


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
    permission_classes = [IsAuthenticated]


# probably don't need this -- DELETE --
class MemberRequestView(ListAPIView):

    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]
