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
class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150
    def pet(self,mult):
        self.health += 5 * mult
        return self

dog1 = Dog("Fido")

print dog1.displayHealth().walk(3).run(2).pet(1).displayHealth()
