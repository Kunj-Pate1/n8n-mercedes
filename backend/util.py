import json
import asyncio
import os

metrics = {
    "data": [],
    "success": 0,
    "failed": 0,
    "total_duration": 0,
    "total_workflows": 0,
}

def parse_data():
    with open("mock_data.json","r") as file:
        data = json.load(file)

    return data

def calculate_metrics():

    data = parse_data()

    success_workflows = 0
    failed_workflows = 0
    total_duration = 0
    total_workflows = len(data)

    for workflow in data:
        if workflow["status"] == "success":
            success_workflows += 1
        else:
            failed_workflows += 1

        total_duration += workflow["duration"]

    metrics["data"] = data
    metrics["success"] = success_workflows
    metrics["failed"] = failed_workflows
    metrics["total_duration"] = total_duration
    metrics["total_workflows"] = total_workflows




async def check_updates(path="mock_data.json"):
    last_modified = os.path.getmtime(path)

    while True:
        await asyncio.sleep(2)

        current = os.path.getmtime(path)
        if current != last_modified:
            last_modified = current
            await on_file_changed()

        


async def on_file_changed():
    calculate_metrics()
    print("----File changed-----")



