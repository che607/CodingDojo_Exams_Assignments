# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-21 19:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='wholasale',
            new_name='wholesale',
        ),
    ]
