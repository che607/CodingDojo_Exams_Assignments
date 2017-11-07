from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from .models import Names
from django.contrib import messages

def index(request):
    return render(request, 'first_app/index.html')

def validate(request):
    name_validation = Names.objects.login(request.POST['name'])
    request.session['name'] = request.POST['name']
    print(Names.objects.all())
    context = {
    "names": Names.objects.all().order_by('-created_at')
    }
    if name_validation == True:
        context = {
        "names": Names.objects.all().order_by('-created_at')
        }
        return render(request, 'first_app/valid.html', context)
    else:
        for error in name_validation[1]:
                messages.error(request, error)
        return redirect('/')
