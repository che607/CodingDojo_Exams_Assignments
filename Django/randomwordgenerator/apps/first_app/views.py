# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from random_words import RandomWords


# Create your views here.
def index(request):
  print "*"*50
  return render(request, 'first_app/index.html')

def generate(request):
     print (request.method)
     print "made it to the route"
     request.session['attempt'] += 1
     rw = RandomWords()
     request.session['random_word'] = word = rw.random_word()
     return redirect('/')
