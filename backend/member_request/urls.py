from django.urls import path

from member_request.views import ListMemberRequestView, RetrieveUpdateDeleteJobView

urlpatterns = [
    path('list/', ListMemberRequestView.as_view()),
    # path('list/', ListMemberRequests.as_view()),

    path('<int:id>/', RetrieveUpdateDeleteJobView.as_view()),
]
