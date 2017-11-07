# from __future__ import unicode_literals
# from django.shortcuts import render, HttpResponse
# import datetime
# import json
# # the index function is called when root is visited
# def index(request):
#     time = datetime.datetime.strftime(time,"%-I:%M %p")
#     # date = datetime.datetime.strftime(time,"%B %-d, %Y")
#     # time = datetime.datetime.strftime(time,"%-I:%M %p")
#     # context = {
#     #     "date": date,
#     #     "time": time
#     # }
#     request.session['datetime'] = time
#     return render(request, 'first_app/index.html')
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
import datetime
import time

# Create your views here.
def index(request):
    print "*"*20
    time = datetime.datetime.now()
    date = datetime.datetime.strftime(time,"%m-%d-%Y %H:%I%p")
    # time = datetime.datetime.strftime(time,"%-I:%M %p")
    request.session['datetime'] = date
    # context = {
    #     "date": date
    #     # "time": time
    # }
    return render(request,'first_app/index.html')
