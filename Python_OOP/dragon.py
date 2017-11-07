class Animal(object):
    def __init__(self,name):
        self.name = name
        self.health = 100
    def walk(self,mult):
        self.health -= 1 * mult
        return self
    def run(self,mult):
        self.health -= 5 * mult
        return self
    def displayHealth(self,call):
        print call
        print "Name: " + str(self.name)
        print "Health: " + str(self.health)
        return self
class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170
    def fly(self,mult):
        self.health -= 10 * mult
        return self

dragon1 = Dragon("Scorcher")

print dragon1.displayHealth("This is a dragon!").walk(3).run(2).fly(2).displayHealth("This is a dragon!")
