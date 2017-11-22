from __future__ import unicode_literals
from django.db import models
import re, bcrypt
from django.db.models import F
from datetime import date
from datetime import datetime
from ..logreg.models import User
from dateutil.parser import parse as parse_date

class UserManager(models.Manager):
    def GetCurrentUser(self, request):
        print "func GetCurrentUser"
        print (request.session['id'])
        try:
            usrReturn = User.objects.get(id=request.session['id'])
            print "test!! ",User.objects.get(id=request.session['id']).name
            return usrReturn
        except Exception as e:
            print '%s (%s)' % (e.message, type(e))
            return e

    def addAppointment(self, request, data):
        print "inside add appointment - models function"
        error = []
        today = date.today()
        currentUser = self.GetCurrentUser(request)
        idnum = currentUser.id
        checkapp = Appointments.objects.get(date=data['date'], time=data['time'])
        if checkapp:
            error.append("There is already an appointment for this date & time!")
            return (False, error)
        else:
            if len(data['task']) < 2:
                error.append("Task field cannot be blank!")
            today = datetime.now()
            if data['date']:
                unicode_text = data['date']
                dt = parse_date(unicode_text)
                if dt < today:
                    error.append("There must be a current date!")
            else:
                error.append("Date field cannot be blank!")

        print "date ",today
        if data['time'] < "%I:%M:%p":
            error.append("There must be a valid time!")


        if not error:
            try:
                Appointments.objects.create(user=currentUser,task=data['task'],
                time=data['time'],date=data['date'],
                status="pending")
                print "successfully added appointment"
                #registered = Appointments.objects.get(user=currentUser)
                return True
                print "TRUE"
            except:
                pass
        else:
            return (False,error)

    def edit1(self,data,id):
        error = []
        print "inside edit1 = models function"
        update = Appointments.objects.get(id=id)
        if len(data['task']) < 2:
            error.append("Task field cannot be blank!")
        today = datetime.now()
        if data['date']:
            unicode_text = data['date']
            dt = parse_date(unicode_text)
            if dt < today:
                error.append("There must be a current date!")
        else:
            error.append("Date field cannot be blank!")
        if data['time'] < "%I:%M:%p":
            error.append("There must be a valid time!")
        if not error:
            print "not error"
            print data['time'],data['date']
            update.task = data['task']
            update.status = data['status']
            update.time = data['time']
            update.date = data['date']
            update.save()
            return True
        else:
            print "there were errors"
            return (False,error)

    def delete(self,request,data):
        delete = Appointments.objects.get(id=data)
        delete.delete()
        return True

class Appointments(models.Model):
    user = models.ForeignKey(User,related_name="the_user")
    task = models.CharField(max_length=100)
    time = models.TimeField(null=True)
    date = models.DateField(default=date.today)
    status = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
