from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from members import views
from rest_framework.routers import DefaultRouter

# profile_list = views.ProfileViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# profile_detail = views.ProfileViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })

router = DefaultRouter()
router.register(r'projects', views.ProjectViewSet)
router.register(r'skills', views.SkillViewSet)
router.register(r'countries', views.CountryViewSet)
router.register(r'skill_categories', views.SkillCategoryViewSet)
router.register(r'profiles', views.ProfileViewSet)

urlpatterns = [
    # url(r'^countries/$', views.CountryList.as_view()),
    # url(r'^countries/(?P<pk>[0-9]+)/$', views.CountryDetail.as_view()),
    # url(r'^skill_categories/$', views.SkillCategoryList.as_view()),
    # url(r'^skill_categories/(?P<pk>[0-9]+)/$',
    #     views.SkillCategoryDetail.as_view()),
    # url(r'^profiles/$', profile_list, name='profile-list'),
    # url(r'^profiles/(?P<pk>[0-9]+)/$', profile_detail, name='profile-detail'),
    url(r'', include(router.urls))
] 

# urlpatterns = format_suffix_patterns(urlpatterns)
