from django.urls import path

from user.views import ListHelperInfo, ListMemberInfo, RetrieveUserInfo

urlpatterns = [
    # path('me/', RetrieveUpdateUserProfileView.as_view()),
    # path('list/', ListProfilesView.as_view()),
    path('<int:user_id>/', RetrieveUserInfo.as_view()),
    path('list/helpers/', ListHelperInfo.as_view()),
    path('list/members/', ListMemberInfo.as_view()),
    # path('<str:username>/', RetrieveSearchUserInfo.as_view()),

]
