# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from .models import Books

def index(request):
    return render(request, 'first_app/index.html')

def addbook(request):
    Books.objects.create(title = request.POST['title'],
    author = request.POST['author'], category = request.POST['category'])
    context = {
    "books": Books.objects.all()
    }
    return render(request, 'first_app/index.html', context)
