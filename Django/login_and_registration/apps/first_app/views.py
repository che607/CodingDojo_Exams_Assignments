from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from django.contrib import messages
from .models import Information


def index(request):
    return render(request, 'first_app/index.html')

def register(request):
    #go into models.Manager and register form information
    validation = Information.objects.register(request.POST)

    #Figure out, if the information processed from models.Manager is
    #either True or False
    if validation[0] == True:
        print ("True")
        for success in validation[1]:
                messages.success(request, success)
        return render(request, 'first_app/success.html')
    else:
        print ("False")
        for error in validation[1]:
                messages.error(request, error)
        return render(request, 'first_app/index.html')

def login(request):
    #go into models.Manager and login and validate form information
    logininformation = Information.objects.login(request.POST)

    #Figure out, if the information processed from models.Manager is
    #either True or False
    if logininformation[0] == True:
        print ("True")
        for success in logininformation[1]:
                messages.success(request, success)
        return render(request, 'first_app/success.html')
    else:
        print ("False")
        for error in logininformation[1]:
                messages.error(request, error)
        return render(request, 'first_app/index.html')
