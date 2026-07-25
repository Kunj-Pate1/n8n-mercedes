import json

def parse_data():
    with open("mock_data.json","r") as file:
        data = json.load(file)

    return data


data = parse_data()
print(data)

sucess_workflows = total_duration = failed_workflows = 0

total_workflows = len(data)

for workflows in data:
    if workflows['status'] == "success":
        sucess_workflows += 1

    else:
        failed_workflows += 1

    total_duration += workflows['duration']






