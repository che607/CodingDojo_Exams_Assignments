from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^postsecret$', views.postsecret),
    url(r'^login$', views.login),
    url(r'^like/(?P<secret_id>\d+)$', views.like),
    url(r'^delete/(?P<secret_id>\d+)$', views.delete),
    url(r'^secretspage$', views.secretspage),
    url(r'^popular$', views.popular)
]
