# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-24 19:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0008_auto_20161120_1104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='skill',
            name='profiles',
            field=models.ManyToManyField(default=None, to='members.Profile'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='ranking',
            field=models.IntegerField(default=0),
        ),
    ]