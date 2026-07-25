from fastapi import FastAPI
from analytics import *

app = FastAPI()


@app.get("/api/n8n-analytics/")
def get_info_data():
    return {"sucess_rate":get_successRate(),"failure_rate":get_failureRate(),"Average Duration":get_averageDuration()}

@app.get("/")
def base_root():
    return "Hello"