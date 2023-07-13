from django.urls import path
from base.views.category_views import CategoryListAPIView, CategoryUpdateAPIView, CategoryCreateAPIView, CategoryDeleteAPIView

urlpatterns = [
    path('', CategoryListAPIView.as_view(), name='category-list'),
    path('update/<int:pk>/', CategoryUpdateAPIView.as_view(), name='category-update'),
    path('create/', CategoryCreateAPIView.as_view(), name='category-create'),
    path('<int:pk>/delete/', CategoryDeleteAPIView.as_view(), name='category-delete'),
]
