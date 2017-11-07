from django.shortcuts import render, HttpResponse
# the index function is called when root is visited
def index(request):
	return render(request, 'first_app/index.html')
def aboutme(request):
    return render(request, 'first_app/aboutme.html')
def testimonials(request):
	return render(request, 'first_app/testimonials.html')
def projects(request):
	print request.method
	return render(request, 'first_app/projects.html')
