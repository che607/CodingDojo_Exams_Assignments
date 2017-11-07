from __future__ import unicode_literals
from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=40)
    weight = models.CharField(max_length=40)
    price = models.CharField(max_length=40)
    wholesale = models.CharField(max_length=40)
    category = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
