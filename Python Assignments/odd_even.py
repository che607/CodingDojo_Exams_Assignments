def odd_even():
    x = 1
    y = 2
    i = 0
    while i <= 1000:
        if x <= 1999:
            print "Number is", x, " - This is an odd number!"
            if y <= 2000:
                print "Number s", y, " - This is an even number!"
                x += 2
                y += 2
                i += 1

odd_even()
