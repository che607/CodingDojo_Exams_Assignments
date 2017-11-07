class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0
        if self.price > 10000:
            self.tax = .15
        elif self.price < 10000:
            self.tax = .12

    def display_all(self):
        print "price:", self.price
        print "speed:", self.speed
        print "fuel:", self.fuel
        print "mileage:", self.mileage
        print  "tax:", self.tax
        return self

car1 = Car(9000, '150mph', 'regular', 34567)
car2 = Car(12000, '50mph', 'full', 45621)
car3 = Car(11000, '45mph', 'regular', 67843)
car4 = Car(5000, '56mph', 'deseil', 56784)
car5 = Car(5700, '34mph', 'regular', 12876)
car6 = Car(3000, '56mph', 'unleaded', 34000)

print car1.display_all()
print car2.display_all()
print car3.display_all()
print car4.display_all()
print car5.display_all()
print car6.display_all()
