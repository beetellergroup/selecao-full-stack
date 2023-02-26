from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from api.serializer import TokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

class TokenObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)

class USDAPIView(APIView,):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    def get(self, request):
        response = requests.get('https://economia.awesomeapi.com.br/last/USD-BRL')
        data = response.json()
        return Response(data)

class EURAPIView(APIView):
    def get(self, request):
        response = requests.get("https://api.kraken.com/0/public/Ticker?pair=XBTeur")
        data = response.json()
        return Response(data)
    
class BTCAPIView(APIView):
    def get(self, request):
        response = requests.get("https://api.kraken.com/0/public/Ticker?pair=XBTusd")
        data = response.json()
        return Response(data)

class USD2APIView(APIView):
    def get(self, request):
        response = requests.get("https://economia.awesomeapi.com.br/json/daily/USD-BRL/15")
        data = response.json()
        return Response(data)

class EUR2APIView(APIView):
    def get(self, request):
        response = requests.get("https://economia.awesomeapi.com.br/json/daily/EUR-BRL/15")
        data = response.json()
        return Response(data)

class BTC2APIView(APIView):
    def get(self, request):
        response = requests.get("https://economia.awesomeapi.com.br/json/daily/BTC-BRL/15")
        data = response.json()
        return Response(data) 