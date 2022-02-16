from django.urls import path

from member_request.views import ListMemberRequestView, RetrieveUpdateDeleteJobView, ListMemberReviewView, \
    CreateMemberRequest, ListHelperReviewView, HelperReviewsView, CreateHelperReviewView, CreateMemberReviewView, \
    ListMemberJobsView, ListHelperJobsView

urlpatterns = [
    # job request endpoints
    path('request/', CreateMemberRequest.as_view()),
    path('list/', ListMemberRequestView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteJobView.as_view()),
    # Review endpoints
    path('review/helper/', CreateHelperReviewView.as_view()),
    path('review/member/', CreateMemberReviewView.as_view()),
    path('list/review/member/', ListMemberReviewView.as_view()),
    path('list/review/helper/', ListHelperReviewView.as_view()),

    # for helper / member profile - jobs - (not logged in user)
    path('helper/<int:helper_id>/', ListHelperJobsView()),
    path('member/<int:member_id>/', ListMemberJobsView()),

    path('review/helper/<int:helper_id>/', HelperReviewsView.as_view()),
    # path('list/', ListMemberRequests.as_view()),
]
