from __future__ import unicode_literals
from django.db import models
import re, bcrypt
from django.db.models import F
from datetime import datetime, date
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

class UserManager(models.Manager):

    def register(self, data):
        error = []
        success = []
        if len(data['name']) < 2:
            #print (request.POST['firstname'])
            error.append("Name cannot be blank!")
        elif bool(re.search(r'\d', data['name'])):
            #print bool(re.search(r'\d', request.POST['firstname']))
            error.append("Name cannot contain a number!")
        if len(data['alias']) < 1:
            #print request.POST['lastname']
            error.append("Alias name cannot be blank!")
        elif bool(re.search(r'\d', data['alias'])):
            #print bool(re.search(r'\d', request.POST['lastname']))
            error.append("Alias name cannot contain number!")
        if len(data['email']) < 1:
            #print request.POST['email']
            error.append("Email cannot be blank!")
        elif not EMAIL_REGEX.match(data['email']):
            error.append("Invalid Email Address!")
        if len(data['password']) <= 0:
            error.append("Password cannot be blank!")
        elif len(data['password']) < 8:
            error.append("Password must be at least 8 characters!")
        elif data['password'] != data['confirm']:
            error.append("Password does not match!")
        if data['dob'] < "%Y-%m-%d":
            error.append("There must be a birthday!")

        try:
            password = data['password'].encode()
            pw_hash = bcrypt.hashpw(password, bcrypt.gensalt())
            confirm = data['confirm'].encode()
            pw_confirm_hash = bcrypt.hashpw(confirm, bcrypt.gensalt())
            User.objects.create(name=data['name'],
            alias=data['alias'],email=data['email'],
            password=pw_hash, dob=datetime.strptime(data['dob'], "%Y-%m-%d").date())
            print("successfully added information to database")
            registered = User.objects.get(email=data['email'])
            success.append(" ")
            success.append(" ")
            return (True,success, registered)
        except:
            pass
        return (False,error)

    def login(self,data):
        error=[]
        success=[]
        try:
            #password = data['password'].encode()
            registered = User.objects.get(email=data['email'])
            if bcrypt.checkpw(data['password'].encode(), registered.password.encode()) != True:
                    error.append("email or password incorrect")
                    return(False, error, registered)
            else:
                success.append(" ")
                success.append(" ")
                return(True, success, registered)
        except:
            error.append("email or password not valid")
            return(False, error)

    def GetCurrentUser(self, request):
        print "func GetCurrentUser"
        print (request.session['id'])
        #request.session['id'] = Information.objects.get(id=id)
        try:
            usrReturn = User.objects.get(id=request.session['id'])
            print "test!! ",User.objects.get(id=request.session['id']).name
            return usrReturn
        except Exception as e:
            print '%s (%s)' % (e.message, type(e))
            return e


class User(models.Model):
    name = models.CharField(max_length=40)
    alias = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    dob = models.DateField(default=date.today)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
