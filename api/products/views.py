from django.shortcuts import render
from rest_framework import viewsets
from products.models import Menu, Link
from products.serializers import LinkSerializer, MenuSerializer
from auth.permissions import IsAdminOrReadOnly


class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    permission_classes = (IsAdminOrReadOnly,)


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    permission_classes = (IsAdminOrReadOnly,)
