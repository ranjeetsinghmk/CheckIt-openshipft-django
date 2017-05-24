from django.shortcuts import render
from rest_framework import viewsets
from products.models import Menu, Link, Component, Detail
from products.serializers import LinkSerializer, MenuSerializer, DetailSerializer, ComponentSerializer
from auth.permissions import IsAdminOrReadOnly


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAdminOrReadOnly,)


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    permission_classes = (IsAdminOrReadOnly,)


class DetailViewSet(viewsets.ModelViewSet):
    queryset = Detail.objects.all()
    serializer_class = DetailSerializer
    permission_classes = (IsAdminOrReadOnly,)


class ComponentViewSet(viewsets.ModelViewSet):
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer
    permission_classes = (IsAdminOrReadOnly,)
