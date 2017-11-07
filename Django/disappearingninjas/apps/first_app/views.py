from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, 'first_app/index.html')

def ninja(request):
    return render(request, 'first_app/ninja.html')

def ninjas(request, id):
    if id == "orange":
        context = {
            "ninja": 'michelangelo'
        }
    elif id == "blue":
        context = {
            "ninja": 'leonardo'
        }
    elif id == "red":
        context = {
            "ninja": 'raphael'
        }
    elif id == "purple":
        context = {
            "ninja": 'donatello'
        }
    else:
        context = {
            "ninja": 'notapril'
        }
    return render(request, 'first_app/singleninja.html', context)
