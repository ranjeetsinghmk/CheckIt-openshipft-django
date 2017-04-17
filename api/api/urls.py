from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from django.contrib import admin
from api import views
from api.views import AngularApp
from api import settings
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/members/', include('members.urls')),
    url(r'^api/products/', include('products.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api-token-auth/', obtain_auth_token),
    url(r'^admin/', admin.site.urls)
]

urlpatterns.append(url(r'^(?!ng/).*$', AngularApp.as_view(), name='angular_app'))
print(settings.DEBUG)
if not settings.DEBUG:
    from django.views.static import serve
    urlpatterns += [
        url(r'^static/(?P<path>.*)$', serve,
            {'document_root': settings.STATIC_ROOT}),  # if debug mode is False
        url(r'^media/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT})
    ]  # if debug mode is False

