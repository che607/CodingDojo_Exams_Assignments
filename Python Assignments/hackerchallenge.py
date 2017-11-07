def multiply(a,b):
    c = []
    x  = 0
    while x < len(a):
            c.append(a[x] * b)
            x += 1
    return c


def layered_multiples(arr):
    z = 0
    y = []
    while z < len(arr):
        arr[z] = 1
        z += 1
        y.append(arr)
    print y
    return y


layered_multiples(multiply([4,3,6],5))
