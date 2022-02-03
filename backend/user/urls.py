from django.urls import path

from user.views import ListProfilesView, RetrieveUpdateUserProfileView, RetrieveUserInfo

urlpatterns = [
    path('me/', RetrieveUpdateUserProfileView.as_view()),
    path('list/', ListProfilesView.as_view()),
    path('<int:user_id>/', RetrieveUserInfo.as_view()),
    # path('<str:username>/', RetrieveSearchUserInfo.as_view()),

]
