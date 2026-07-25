from util import total_duration,sucess_workflows,failed_workflows,total_workflows

def get_successRate():
    return (sucess_workflows/total_workflows)*100

def get_failureRate():
      return (failed_workflows/total_workflows) * 100
    

def get_averageDuration():
    return total_duration/total_workflows
    
    
