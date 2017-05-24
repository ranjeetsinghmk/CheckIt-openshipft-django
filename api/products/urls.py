from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from products import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'menus', views.MenuViewSet)
router.register(r'links', views.LinkViewSet)
router.register(r'details', views.DetailViewSet)
router.register(r'components', views.ComponentViewSet)

urlpatterns = [url(r'', include(router.urls))]

# urlpatterns = format_suffix_patterns(urlpatterns)
