from rest_framework import generics, permissions
from base.models import Product
from base.serializers import ProductSerializer
from django.http import HttpResponse
from django.conf import settings
import os

class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductCreateAPIView(generics.CreateAPIView):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = ProductSerializer

class ProductUpdateAPIView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDeleteAPIView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAdminUser]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

