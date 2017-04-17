from rest_framework import serializers
from products.models import Menu, Link


class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = ('pk', 'title', 'target', 'icon')


class MenuSerializer(serializers.ModelSerializer):
    links = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Menu
        fields = ('pk', 'photo', 'title', 'desc', 'links')
