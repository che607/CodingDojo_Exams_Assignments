class MathDojo(object):
    def __init__(self):
        self.answer = 0
    def add(self, *args):
        # self.answer += sum(args)
        for x in args:
            if type(x) is int:
                self.answer += x
            else:
                # for y in x:
                #     self.answer -= y
                for y in range(0, len(x)):
                    self.answer += x[y]
        return self
    def subtract(self, *args):

        for x in args:
            if type(x) is int:
                self.answer -= x
            else:
                # for y in x:
                #     self.answer -= y
                for y in range(0, len(x)):
                    self.answer -= x[y]
        return self
    def result(self):
        print self.answer
        return self

md = MathDojo()

print md.add(2,2,[2,2]).subtract(3,[4,3]).result()
