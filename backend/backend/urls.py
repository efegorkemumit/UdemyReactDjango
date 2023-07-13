
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/categorys/', include('base.urls.category_urls')),
  #  path('api/orders/', admin.site.urls),
  #   path('api/products/', admin.site.urls),
    #  path('api/orders/', admin.site.urls),
]
