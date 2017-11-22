from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User, Appointments
from datetime import datetime, date, timedelta

def appointments(request):
    print "in friends - views function"
    appointments = Appointments.objects.all().order_by('-date')
    currentUser = User.objects.GetCurrentUser(request)
    todayapp = []
    otherapp = []
    for appointment in appointments:
        if appointment.date > date.today():
            todayapp.append(appointment)
        else:
            otherapp.append(appointment)
    appointments = Appointments.objects.all()
    today = date.today()
    context = {
        "todayapp": todayapp,
        "otherapp": otherapp,
        "today": today,
        #"appointments": appointments,
        "currentUser": currentUser,
    }
    return render(request, 'project/appointments.html',context)

def addappointment(request):
    validation = Appointments.objects.addAppointment(request,request.POST)
    if validation == True:
        print "True"
        print "user.id ",request.session['id']
        return redirect('project:appointments')
    else:
        print "else"
        print validation
        for error in validation[1]:
                messages.error(request, error)
        return redirect('project:appointments')

def edit(request,id):
    appointment = Appointments.objects.get(id=id)
    context = {
    "appointment": appointment
    }
    return render(request, 'project/edit.html',context)

def edit1(request,id):
    appfunc = Appointments.objects.edit1(request.POST,id)
    appointment = Appointments.objects.get(id=id)
    if appointment:
        print appointment.task, appointment.status, appointment.date, appointment.time
    context = {
    "appointment": appointment
    }
    if appfunc == True:
        return render(request, 'project/edit.html',context)
    else:
        for error in appfunc[1]:
                messages.error(request, error)
        return render(request, 'project/edit.html',context)

def delete(request,id):
    delete = Appointments.objects.delete(request,id)
    return redirect('project:appointments')
