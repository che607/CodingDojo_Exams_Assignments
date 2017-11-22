from django.conf.urls import url
from . import views

app_name = "project"

urlpatterns = [
    url(r'^appointments$', views.appointments, name="appointments"),
    url(r'^addappointment$', views.addappointment, name="addappointment"),
    url(r'^edit/(?P<id>\d+)$', views.edit, name='edit'),
    url(r'^delete/(?P<id>\d+)$', views.delete, name='delete'),
    url(r'^edit1/(?P<id>\d+)$', views.edit1, name='edit1'),
    #url(r'^viewprofile/(?P<id>\d+)$', views.viewprofile, name='viewprofile'),
    #url(r'^removefriend/(?P<id>\d+)$', views.removefriend, name='removefriend'),
]
