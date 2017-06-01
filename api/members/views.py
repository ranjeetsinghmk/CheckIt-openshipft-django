from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import viewsets
from auth.permissions import IsAdminOrReadOnly, IsAuthenticated
from members.models import Country, Project, Profile, Skill, SkillCategory, Link, LinkBase
from members.serializers import SkillCategorySerializer, CountrySerializer, ProfileSerializer, SkillSerializer, ProjectSerializer, LinkSerializer, LinkBaseSerializer


class SkillCategoryViewSet(viewsets.ModelViewSet):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer
    permission_classes = (IsAdminOrReadOnly,)


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_classes = (IsAdminOrReadOnly,)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAdminOrReadOnly,)

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.ranking = instance.ranking + 1
            instance.save()
        except:
            pass
        return super(ProfileViewSet, self).retrieve(request, *args, **kwargs)


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = (IsAdminOrReadOnly,)

    def perform_create(self, serializer):
        data = serializer.validated_data
        if data['profiles']:
            data['ranking'] = len(data['profiles'])
        else:
            data['ranking'] = 0
        serializer.validated_data['ranking'] = data['ranking']
        serializer.is_valid(raise_exception=True)
        super(SkillViewSet, self).perform_create(serializer)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (IsAdminOrReadOnly,)


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    permission_classes = (IsAdminOrReadOnly,)


class LinkBaseViewSet(viewsets.ModelViewSet):
    queryset = LinkBase.objects.all()
    serializer_class = LinkBaseSerializer
    permission_classes = (IsAdminOrReadOnly,)
