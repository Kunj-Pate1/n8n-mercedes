from fastapi import APIRouter
from analytics import *

router = APIRouter()


@router.get("/api/n8n-analytics/")
def get_info_data():
    return {"success_rate":get_successRate(),"failure_rate":get_failureRate(),"average_duration":get_averageDuration()}

@router.get("/")
def base_root():
    return "Hello"