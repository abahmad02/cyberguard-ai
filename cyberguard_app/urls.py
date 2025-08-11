"""
Basic Django URL Configuration (60% Implementation)
Core API endpoints established, advanced routing pending.
"""

from django.urls import path
from . import views

# Basic URL patterns for 60% implementation
urlpatterns = [
    # Core malware detection endpoint
    path('api/scan/', views.basic_upload_and_scan, name='basic_scan'),
    
    # Model information endpoint
    path('api/model-info/', views.basic_model_info, name='basic_model_info'),
    
    # Health check endpoint
    path('api/health/', views.basic_health_check, name='basic_health'),
    
    # Placeholder endpoints (not implemented yet)
    path('api/scan-history/', views.basic_not_implemented, name='scan_history_placeholder'),
    path('api/batch-scan/', views.basic_not_implemented, name='batch_scan_placeholder'),
    path('api/report-false-positive/', views.basic_not_implemented, name='report_fp_placeholder'),
]

# TODO: Advanced URL patterns for remaining 40% implementation:
# - User authentication endpoints
# - Advanced scan endpoints with parameters
# - API versioning routes
# - Threat intelligence integration endpoints
# - Statistics and analytics endpoints
# - File management endpoints
# - Settings and configuration endpoints
