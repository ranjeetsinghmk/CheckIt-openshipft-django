from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import permissions
from members.permissions import IsAdminOrReadOnly
from members.models import Country, Project, Profile, Skill, SkillCategory
from members.serializers import SkillCategorySerializer, CountrySerializer, ProfileSerializer, SkillSerializer, ProjectSerializer


# class SkillCategoryList(generics.ListCreateAPIView):
#     queryset = SkillCategory.objects.all()
#     serializer_class = SkillCategorySerializer
#     permission_classes = (IsAdminOrReadOnly,)


# class SkillCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = SkillCategory.objects.all()
#     serializer_class = SkillCategorySerializer
#     permission_classes = (IsAdminOrReadOnly,)


# class CountryList(APIView):
#     permission_classes = (IsAdminOrReadOnly,)

#     def get(self, request, format=None):
#         countries = Country.objects.all()
#         serializer = CountrySerializer(countries, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = CountrySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class CountryDetail(APIView):
#     permission_classes = (IsAdminOrReadOnly, )

#     def get_object(self, pk):
#         try:
#             return Country.objects.get(pk=pk)
#         except Country.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         country = self.get_object(pk)
#         serializer = CountrySerializer(country)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         country = self.get_object(pk)
#         serializer = CountrySerializer(country, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         country = self.get_object(pk)
#         country.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class SkillCategoryViewSet(viewsets.ModelViewSet):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer
    permission_class = (IsAdminOrReadOnly,)

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
    permission_class = (IsAdminOrReadOnly,)

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAdminOrReadOnly, permissions.IsAuthenticated,)

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
    permission_classes = (IsAdminOrReadOnly, permissions.IsAuthenticated)
