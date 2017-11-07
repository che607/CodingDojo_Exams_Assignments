from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^createuser$', views.createuser),
    url(r'^postmessage/(?P<id>\d+)$', views.postmessage),
    url(r'^postcomment/(?P<id>\d+)$', views.postcomment),
    url(r'^thewall$', views.thewall)
]
