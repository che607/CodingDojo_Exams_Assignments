# str = "If monkeys like bananas, then I must be a monkey!"
# print str.find("monkeys")
# print str.replace("monkey!", "alligator!")
x = [3,5,1,3,-4,2,-10]

print min(x)
print max(x)

y = ['hello',3,6,7,2,3,'world']
print y[0] + " " + y[6]

i = [3,5,4,6,7,5,3,2]
i.sort()
print i[:4]
print i[4:]
u = i[:4]
t = i[4:]
print u
print t
t.insert(0, u)
print t
