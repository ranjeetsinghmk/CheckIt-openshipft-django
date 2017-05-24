from rest_framework import serializers
from members.models import Country, Project, Profile, Skill, SkillCategory, Link, LinkBase


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('id', 'url', 'base', 'profile',)


class LinkBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkBase
        fields = ('id', 'handler', 'logo',)



class CountrySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    country = serializers.CharField(max_length=50)
    tel_code = serializers.IntegerField()

    def create(self, validated_data):
        return Country.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.country = validated_data.get('country', instance.country)
        instance.tel_code = validated_data.get('tel_code', instance.tel_code)
        instance.save()
        return instance


class SkillCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = SkillCategory
        fields = ('id', 'category', 'ranking',)


class ProfileSerializer(serializers.ModelSerializer):

    links = LinkSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ('id', 'user', 'photo', 'firstName', 'lastName',
                  'nickname', 'aim', 'contact', 'country', 'resume', 'about')


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ('id', 'skill', 'skill_category', 'profiles',)



class ProjectSerializer(serializers.ModelSerializer):

    def validate(self, data):
        """
        Check that the start is before the stop.
        """
        if data['start_date'] > data['end_date']:
            raise serializers.ValidationError("finish must occur after start")
        return data

    class Meta:
        model = Project
        fields = ('id', 'profile', 'title', 'start_date',
                  'end_date', 'location', 'about', 'certificate')
