from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import Information, Secrets

def index(request):
    return render(request, 'first_app/index.html')

def secretspage(request):
    if 'id' in request.session:
        print request.session['id']
        context = {
            "users": Information.objects.all().order_by('-created_at'),
            "secrets": Secrets.objects.all().order_by('-created_at'),
            "currentUser": Secrets.objects.GetCurrentUser(request)
        }
        return render(request, 'first_app/secrets.html', context)


def register(request):
    validation = Information.objects.register(request.POST)
    print request.POST['firstname']
    if validation[0] == True:
        request.session['firstname'] = request.POST['firstname']
        for success in validation[1]:
            request.session['id'] = validation[2].id
        return redirect('/secretspage')
    else:
        print ("False")
        for error in validation[1]:
                messages.error(request, error)
        return render(request, 'first_app/index.html')

def login(request):

    logininformation = Information.objects.login(request.POST)

    if logininformation[0] == True:
        request.session['id'] = logininformation[2].id
        for success in logininformation[1]:
                messages.success(request, success)
        return redirect('/secretspage')
    else:
        print ("False")
        for error in logininformation[1]:
                messages.error(request, error)
        return render(request, 'first_app/index.html', context)

def postsecret(request):
    print "Function postsecret"
    if request.method == 'POST':
        response, context = Secrets.objects.CreateSecret(request)
    #Secrets.objects.CreateSecret(request)
    #print Secrets.objects.CreateSecret(request)
    return redirect('/secretspage')

def like(request,secret_id):
    print "Function Like"
    print secret_id

    like = Secrets.objects.LikeSecret(request, secret_id)

    if like:
        return redirect('/secretspage')
    else:
        messages.error(request, like)
    return redirect('/secretspage')

def delete(request,secret_id):
    print "Function Delete"
    print secret_id

    delete = Secrets.objects.DeleteSecret(request, secret_id)

    if delete:
        return redirect('/secretspage')
    else:
        messages.error(request, delete)
    return redirect('/secretspage')

def popular(request):
    return render(request, 'first_app/popular.html')
