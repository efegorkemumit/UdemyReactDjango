from django.urls import path
from base.views.order_views import *

urlpatterns = [
    path('cart/', CartCreateView.as_view(), name='cart-create'),
    path('cart/<int:pk>/', CartDetailView.as_view(), name='cart-detail'),
    path('cart-item/', CartItemCreateView.as_view(), name='cart-item-create'),
    path('cart-item/<int:pk>/', CartItemDetailView.as_view(), name='cart-item-detail'),
    path('order/', OrderCreateView.as_view(), name='order-create'),
    path('order/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
]
