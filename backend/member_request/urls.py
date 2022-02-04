from django.urls import path

from member_request.views import ListMemberRequestView

urlpatterns = [
    path('list/', ListMemberRequestView.as_view()),
    # path('list/', ListMemberRequests.as_view()),

    # path('<str:username>/', RetrieveSearchUserInfo.as_view()),
]
