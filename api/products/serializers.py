from rest_framework import serializers
from products.models import Menu, Link, Component, Detail


class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = ('pk', 'title', 'target', 'icon')


class MenuSerializer(serializers.ModelSerializer):
    links = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Menu
        fields = ('pk', 'photo', 'title', 'detail', 'desc', 'links')


class ComponentSerializer(serializers.ModelSerializer):

    actions = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Component
        fields = ('pk', 'heading', 'text', 'actions', 'photo')


class DetailSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True, read_only=True)

    class Meta:
        model = Detail
        fields = ('pk', 'display_name', 'photo', 'desc', 'components')
