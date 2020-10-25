from django.shortcuts import render

# Create your views here.

def elements(request):
    return render(request,'elements.html')

def generic(request):
    return render(request, 'generic.html')

def index(request):
    return render(request, 'index.html')
