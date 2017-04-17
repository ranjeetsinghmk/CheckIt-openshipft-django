from rest_framework import serializers
from products.models import Menu, Link


class MenuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Menu
        fields = ('pk', 'photo', 'title', 'desc', 'links')


class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = ('pk', 'title', 'target', 'icon')
