from django.urls import path
from . import views
from api.views import USDAPIView,EURAPIView,BTCAPIView,USD2APIView,EUR2APIView,BTC2APIView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('', views.getRoutes),
    path('test/', views.getRoutes),
    path('USD-BRL/', USDAPIView.as_view()),
    path('XBTeur/', EURAPIView.as_view()),
    path('XBTusd/', BTCAPIView.as_view()),
    path('USD-BRL/15/', USD2APIView.as_view()),
    path('EUR-BRL/15/', EUR2APIView.as_view()),
    path('BTC-BRL/15/', BTC2APIView.as_view()),