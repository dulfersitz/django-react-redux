from django.shortcuts import render

# Create your views here.
def index(request):
    print("index.html requested")
    return render(request, 'frontend/index.html')