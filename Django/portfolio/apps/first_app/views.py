from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
def index(request):
  return render(request, 'first_app/index.html')

def testimonials(request):
  return render(request, 'first_app/testimonials.html')
