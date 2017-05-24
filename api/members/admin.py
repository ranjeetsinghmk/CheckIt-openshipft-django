from django.contrib import admin
from members.models import Profile, Country, Project, Skill, SkillCategory, Link, LinkBase

admin.site.register(Profile)
admin.site.register(Country)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(SkillCategory)
admin.site.register(Link)
admin.site.register(LinkBase)
