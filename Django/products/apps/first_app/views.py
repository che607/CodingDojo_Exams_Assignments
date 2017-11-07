from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from .models import Products

def index(request):
    Products.objects.create(name="iphone", description="The latest iphone 7",
    weight="2 lbs", price="$700", wholesale="$350", category="Smart Phone")
    products = Products.objects.all()
    print (products)
    return render(request, 'first_app/index.html')
