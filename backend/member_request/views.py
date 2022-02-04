# from django.shortcuts import render
from rest_framework.generics import ListAPIView
from member_request.serializers import ListMemberRequestSerializer, MemberRequestSerializer
from rest_framework.permissions import IsAuthenticated
# from category.models import Category, SubCategory
from member_request.models import MemberRequest


class ListMemberRequestView(ListAPIView):

    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]


class MemberRequestView(ListAPIView):

    queryset = MemberRequest.objects.all()
    serializer_class = MemberRequestSerializer
    permission_classes = [IsAuthenticated]
