# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, 'first_app/index.html')

def inputsurvey(request):
    request.session['name'] = request.POST['name']
    request.session['dojo_location'] = request.POST['dojo_location']
    request.session['favorite_language'] = request.POST['favorite_language']
    request.session['comments'] = request.POST['comments']
    request.session['counter'] += 1
    return redirect('/result')

def result(request):
    return render(request, 'first_app/display.html')

def back(request):
    return redirect('/')
