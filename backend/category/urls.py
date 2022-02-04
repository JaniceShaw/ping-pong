from django.urls import path

from category.views import ListCategories, ListSubCategories

urlpatterns = [
    path('list/', ListCategories.as_view()),
    path('sub/list/', ListSubCategories.as_view()),
    # path('<str:username>/', RetrieveSearchUserInfo.as_view()),
]
