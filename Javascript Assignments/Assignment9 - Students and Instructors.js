var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function names(students){
  for(x = 0; x < students.length; x++){
    if(x == 0){
      console.log(students[x].first_name, students[x].last_name)
    }
    else if(x == 1){
      console.log(students[x].first_name, students[x].last_name)
    }
    else if(x == 2){
      console.log(students[x].first_name, students[x].last_name)
    }
    else if (x == 3){
      console.log(students[x].first_name, students[x].last_name)
    }
  }
}

names(students)
