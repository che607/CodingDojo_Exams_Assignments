from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^aboutme$', views.aboutme),
    url(r'^projects$', views.projects),
    url(r'^testimonials$', views.testimonials)
]
