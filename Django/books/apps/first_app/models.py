from __future__ import unicode_literals
from django.db import models

class Books(models.Model):
    title = models.CharField(max_length=40)
    author = models.CharField(max_length=40)
    published_date = models.DateField(auto_now=False)
    category = models.CharField(max_length=40)
    in_print = models.BooleanField(False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
