from __future__ import unicode_literals
from django.db import models

class NamesManager(models.Manager):

    def login(self, data):
        error = []
        print("inside login manager function")
        print(data)
        if len(data) > 8 and len(data) < 16:
            print("This is a valid name.")
            success = Names.objects.create(name=data)
            if success:
                print("successfully added name to database")
            else:
                print("did not add name to database")
            return True;
        else:
            print("This is not a valid name.")
            error.append("Username is not valid")
            return (False, error)


class Names(models.Model):
    name = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    objects = NamesManager()
