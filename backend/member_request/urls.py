from django.urls import path

from member_request.views import ListMemberRequestView, RetrieveUpdateDeleteJobView, ListMemberReviewView, CreateMemberRequest, ListHelperReviewView, HelperReviewsView, CreateReviewView

urlpatterns = [
    path('request/', CreateMemberRequest.as_view()),
    path('list/', ListMemberRequestView.as_view()),
    path('/review/member/', CreateReviewView.as_view()),
    path('list/review/member/', ListMemberReviewView.as_view()),
    path('list/review/helper/', ListHelperReviewView.as_view()),
    path('list/review/helper/<int:helper_id>/', HelperReviewsView.as_view()),
    # path('list/', ListMemberRequests.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteJobView.as_view()),
]
