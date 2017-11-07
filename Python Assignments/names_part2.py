def students_instructors():
    users = {
    'students': [
        {'first_name':  '1 - Michael', 'last_name' : 'Jordan - 13'},
        {'first_name' : '2 - John', 'last_name' : 'Rosales - 11'},
        {'first_name' : '3 - Mark', 'last_name' : 'Guillen - 11'},
        {'first_name' : '4 - KB', 'last_name' : 'Tonel - 7'}
    ],
    }
    print "Students"
    for key, data in users.items():
        for value in data:
            print value['first_name'], value['last_name']

    users = {
        'instructors': [
        {'first_name' : '1 - Michael', 'last_name' : 'Choi - 11'},
        {'first_name' : '2 - Martin', 'last_name' : 'Puryear - 13'}
    ]
    }
    print "Instructors"
    for key, data in users.items():
        for value in data:
            print value['first_name'], value['last_name']

students_instructors()
