from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from .models import Users, Messages, Comments
from django.db import models
import time
import datetime

def index(request):
    return render(request, 'first_app/index.html')

def thewall(request):
    Messages.objects.all()
    context = {
    "messages": Messages.objects.all().order_by('-created_at'),
    }
    return render(request, 'first_app/thewall.html', context)

def createuser(request):
    Users.objects.create(firstname = request.POST['firstname'],
    lastname = request.POST['lastname'], email = request.POST['email'],
    password = request.POST['password'])
    context = {
    "users": Users.objects.all().order_by('-created_at'),
    "messages": Messages.objects.all().order_by('-created_at')
    }
    return render(request, 'first_app/thewall.html', context)

def postmessage(request, id):
    Messages.objects.create(message = request.POST['postmessage'], user_id = id)
    context = {
    "users": Users.objects.all().order_by('-created_at'),
    "messages": Messages.objects.all().order_by('-created_at'),
    "names": names
    }
    return render(request, 'first_app/thewall.html', context)

def postcomment(request, id):
    user = Users.objects.get(id=id)
    message = Messages.objects.get(id=id)
    Comments.objects.create(comment = request.POST['comment'], user = user, message = message)
    context = {
    "users": Users.objects.all().order_by('-created_at'),
    "messages": Messages.objects.all().order_by('-created_at'),
    "comments": Comments.objects.all()
    }
    return render(request, 'first_app/thewall.html', context)
