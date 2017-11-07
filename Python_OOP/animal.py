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
    def displayHealth(self):
        print "Name: " + str(self.name)
        print "Health: " + str(self.health)
        return self

animal1 = Animal("Mondongo")

print animal1.displayHealth().walk(3).run(2).displayHealth()
