from django.urls import path

from user.views import ListHelperInfo, ListMemberInfo, RetrieveMemberInfo, RetrieveHelperInfo, \
    RetrieveUpdateMemberProfileView, RetrieveUpdateHelperProfileView

urlpatterns = [
    path('member/me/', RetrieveUpdateMemberProfileView.as_view()),
    path('helper/me/', RetrieveUpdateHelperProfileView.as_view()),
    # path('list/', ListProfilesView.as_view()),
    path('member/<int:user_id>/', RetrieveMemberInfo.as_view()),
    path('helper/<int:user_id>/', RetrieveHelperInfo.as_view()),
    path('list/helpers/', ListHelperInfo.as_view()),
    path('list/members/', ListMemberInfo.as_view()),

    # path('<str:username>/', RetrieveSearchUserInfo.as_view()),

]
