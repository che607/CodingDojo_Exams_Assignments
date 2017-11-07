from __future__ import unicode_literals
from django.db import models
import re, bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

class InformationManager(models.Manager):

    def register(self, data):
        error = []
        success = []
        if len(data['firstname']) < 2:
            #print (request.POST['firstname'])
            error.append("First name cannot be blank!")
        elif bool(re.search(r'\d', data['firstname'])):
            #print bool(re.search(r'\d', request.POST['firstname']))
            error.append("First name cannot contain a number!")
        if len(data['lastname']) < 1:
            #print request.POST['lastname']
            error.append("Last name cannot be blank!")
        elif bool(re.search(r'\d', data['lastname'])):
            #print bool(re.search(r'\d', request.POST['lastname']))
            error.append("Last name cannot contain number!")
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
        else:
            password = data['password'].encode()
            pw_hash = bcrypt.hashpw(password, bcrypt.gensalt())
            confirm = data['confirm'].encode()
            pw_confirm_hash = bcrypt.hashpw(confirm, bcrypt.gensalt())
            Information.objects.create(firstname=data['firstname'],
            lastname=data['lastname'],email=data['email'],
            password=pw_hash,confirm=pw_confirm_hash)
            print("successfully added information to database")
            success.append("Success, Welcome " + data['firstname'])
            success.append("Succesfully registered!")
            return (True, success)
        return (False,error)

    def login(self,data):
        error=[]
        success=[]
        try:
            #password = data['password'].encode()
            registered = Information.objects.get(email=data['email'])
            if bcrypt.checkpw(data['password'].encode(), registered.password.encode()) != True:
                    error.append("email or password incorrect")
                    return(False, error, registered)
            else:
                success.append("Success, Welcome ")
                success.append("Succesfully logged in!")
                return(True, success, registered)
        except:
            error.append("email or password not valid")
            return(False, error)

class Information(models.Model):
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    password= models.CharField(max_length=40)
    confirm = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = InformationManager()
