class Products(object):
    def __init__(self,price,item_name,weight,brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"

    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self,tax):
        tax1 = self.price * tax
        self.price += tax1
        return self

    def return_product(self,r_p):
        if r_p is 'defective':
            self.status = "defective"
            self.price = 0
        elif r_p is 'like_new':
            self.status = "for sale"
        elif r_p is 'used':
            self.status = "used"
            sale = self.price * .20
            self.price -= sale
        else:
            self.status = "for sale"
        return self

    def displayInfo(self):
        print self.price
        print self.item_name
        print self.weight
        print self.brand
        print self.status
        return self

product1 = Products(20,'dvd','2 lbs','sony')

print product1.sell().displayInfo()
