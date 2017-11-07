from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse
from .models import Books

def index(request):
    Books.objects.create(title="The Bible", author="God",
    published_date="1985-02-11", category="religion", in_print=True)
    books = Books.objects.all()
    print (books)
    for book in books:
        print (book.title, book.author, book.published_date, book.category, book.in_print)
    return render(request, 'first_app/index.html')
