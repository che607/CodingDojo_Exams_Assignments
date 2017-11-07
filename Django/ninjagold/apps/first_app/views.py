from __future__ import unicode_literals
from django.shortcuts import render, redirect
import random, time

def index(request):
  return render(request, 'first_app/index.html')

def processmoney(request):
    if request.POST["building"] == "farm":
        ran_num = random.randrange(10, 20)
        request.session["gold"] += ran_num
        request.session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.POST["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render(request, 'first_app/index.html')
    elif request.POST["building"] == "cave":
        ran_num = random.randrange(5, 10)
        request.session["gold"] += ran_num
        request.session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.POST["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render(request, 'first_app/index.html')
    elif request.POST["building"] == "house":
        ran_num = random.randrange(2, 5)
        request.session["gold"] += ran_num
        request.session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.POST["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render(request, 'first_app/index.html')
    else:
        ran_num = random.randrange(-50, 50)
        if ran_num < 0:
            request.session["gold"] += ran_num
            request.session["activities"] += "Lost  " + str(ran_num) + " golds from the " + request.POST["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
            return render(request, 'first_app/index.html')
        else:
            request.session["gold"] += ran_num
            request.session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.POST["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
            return render(request, 'first_app/index.html')

def reset(request):
    request.session["gold"] = 0
    request.session["activities"] = " "
    return redirect('/')
