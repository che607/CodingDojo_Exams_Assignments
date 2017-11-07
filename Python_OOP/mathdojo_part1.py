class MathDojo(object):
    def __init__(self):
        self.answer = 0
    def add(self, *args):
        self.answer += sum(args)
        return self
    def subtract(self, *args):
        for x in args:
            if type(x) is int:
                self.answer -= x
        return self
    def result(self):
        print self.answer
        return self

md = MathDojo()

print md.add(2,2).subtract(3,4).result()
