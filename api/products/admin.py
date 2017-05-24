from django.contrib import admin
from products.models import Link, Menu, Component, Detail
# Register your models here.
admin.site.register(Menu)
admin.site.register(Link)
admin.site.register(Detail)
admin.site.register(Component)
