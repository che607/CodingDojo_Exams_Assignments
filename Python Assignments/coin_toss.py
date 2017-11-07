def coin_tosses():
    w = 1
    a = 1
    b = 1
    x = "heads"
    y = "tails"
    print "Starting the program"
    import random
    for count in range(0,5000):
        coin_toss = random.random()
        coin_rounded = round(coin_toss)
        if coin_rounded == 1.0:
            print "Attempt #", w,": Throwing a coin... It's a", x, "... Got", a, x, "and", b, y, "so far"
            a += 1
        elif coin_rounded == 0.0:
            print "Attempt #", w,": Throwing a coin... It's a", y, "... Got", b, y, "and", a, x, "so far"
            b += 1
        w += 1
    print "End the program.  Thank you."
coin_tosses()
