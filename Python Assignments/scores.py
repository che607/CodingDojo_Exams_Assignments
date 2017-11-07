def scores():
    print 'Scores and Grades'
    return 'Scores and Grades'
    import random
    for count in range(0,10):
        ran_num = random.randint(60,100)
        if ran_num >= 60 and ran_num <= 69:
            print 'Score:', ran_num, '; your grade is D'
        elif ran_num >= 70 and ran_num <= 79:
            print 'Score:', ran_num, '; your grade is C'
        elif ran_num >=  80 and ran_num <= 89:
            print 'Score:', ran_num, '; your grade is B'
        elif ran_num >= 90 and ran_num <= 100:
            print 'Score:', ran_num, '; your grade is A'
    return ran_num
    print "End of the program.  Bye!"
    return "End of the program.  Bye!"
scores()
