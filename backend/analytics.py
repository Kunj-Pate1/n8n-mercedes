from util import metrics

def get_successRate():
    success_workflows = metrics["success"]
    total_workflows = metrics["total_workflows"]
    return (success_workflows/total_workflows)*100

def get_failureRate():
    failed_workflows = metrics["failed"]
    total_workflows = metrics["total_workflows"]
    return (failed_workflows/total_workflows) * 100
    

def get_averageDuration():
    total_duration = metrics["total_duration"]
    total_workflows = metrics["total_workflows"]
    return total_duration/total_workflows
    
    
