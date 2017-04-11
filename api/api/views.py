from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from api.serializers import UserSerializer, GroupSerializer
from auth.permissions import IsAuthenticatedOrReadOrCreateUser


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filter_fields = ('username', 'email',)
    search_fields = ('username', 'email',)
    permission_classes = (IsAuthenticatedOrReadOrCreateUser,)

    def retrieve(self, request, pk=None):
        """
        If provided 'pk' is "me" then return the current user.
        """
        if isinstance(pk, str) and pk == settings.GET_USER_DETAILS_END_POINT:
            return Response(UserSerializer(request.user).data)
        return super(UserViewSet, self).retrieve(request, pk)
    # def create(self, request, *args, **kwargs):
    #     response = super(UserViewSet, self).create(request, *args, **kwargs)
    #     if response.status_code == status.HTTP_201_CREATED:
    #         data = response.data

    #     print(response.data)

    #     return response


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

from django.views.generic import TemplateView, View
from api import settings


class AngularApp(TemplateView):
    template_name = 'index.html'
