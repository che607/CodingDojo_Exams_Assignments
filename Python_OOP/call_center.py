class Call(object):
    def __init__(self,unique_id,caller_name,caller_phone_number,time_of_call,reason_for_call):
        self.unique_id = unique_id
        self.caller_name = caller_name
        self.caller_phone_number = caller_phone_number
        self.time_of_call = time_of_call
        self.reason_for_call = reason_for_call
        return
    def display(self):
        print "-ID: {} -Name: {} -Ph: {} -Reason: {} -Time: {}".format(self.unique_id,self.caller_name,
        self.caller_phone_number,self.reason_for_call,self.time_of_call)
        return self

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue_size = 0
        return
    def add_call(self, unique_id, caller_name, caller_phone_number, time_of_call,reason_for_call):
        self.queue_size += 1
        new_call = Call(unique_id,caller_name,caller_phone_number,time_of_call,reason_for_call)
        self.calls.append(new_call)
        return self
    def remove(self):
        del self.calls[0]
        self.queue_size -= 1
        return self
    def info(self):
        for calls in self.calls:
            calls.display()
        print self.queue_size
        return self

call_center = CallCenter()
print call_center.add_call(5,"Jones","5556789","4:30PM","wrong number").add_call(10,"Juana","2356789","2:30PM","emergency").add_call(4,"Harry","3456789","4:45PM","right number").remove().info()
