# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-24 19:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Courses',
            new_name='Names',
        ),
    ]