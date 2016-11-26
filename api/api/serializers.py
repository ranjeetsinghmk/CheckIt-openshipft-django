from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password',
                  'is_staff', 'date_joined', 'is_active')
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
        read_only_fields = ('is_staff', 'date_joined', 'is_active')

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance=None, validated_data=None):
        # call set_password on user object. Without this
        # the password will be stored in plain text.

        user = super(UserSerializer, self).update(instance, validated_data)
        user.set_password(validated_data['password'])
        user.save()  # Important
        return user


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Group
        fields = ('url', 'name')
