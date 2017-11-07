from flask import Flask, render_template, redirect, request, session, flash
import re
import time
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'the_wall')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=["POST"])
def login():
    if len(request.form['email']) < 1:
        flash("Email field cannot be blank!")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    if len(request.form['password']) < 1:
        flash("Password field cannot be blank!")
        return redirect('/')

    email = request.form['email']
    password = request.form['password']

    query = "SELECT * FROM users WHERE email = :email"
    data = {
        'email': email
    }
    users = mysql.query_db(query, data)

    if not users:
        flash("User does not exist!")
        return redirect('/')
    elif not bcrypt.check_password_hash(users[0]['password'], password):
        flash("Wrong password!")
        return redirect('/')

    session['user'] = {
        'id': users[0]['id'],
        'first_name': users[0]['first_name'],
        'last_name': users[0]['first_name']
    }
    return render_template('/wall.html')

@app.route('/register', methods=['POST'] )
def register():
    if len(request.form['first_name']) < 1:
        flash("First name cannot be blank!")
    elif len(request.form['first_name']) < 2:
        flash("First name cannot be less than 2 characters!")
    elif bool(re.search(r'\d', request.form['first_name'])):
        print bool(re.search(r'\d', request.form['first_name']))
        flash("First name cannot contain number!")
    elif len(request.form['last_name']) < 1:
        flash("Last name cannot be blank!")
    elif len(request.form['last_name']) < 2:
        flash("Last name cannot be less than 2 characters!")
    elif bool(re.search(r'\d', request.form['last_name'])):
        flash("Last name cannot contain number!")
    elif len(request.form['password']) < 8:
        flash("Password cannot be less than 8 characters!")
    elif len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        password = request.form['password']
        pw_hash = bcrypt.generate_password_hash(password)
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': pw_hash,
           }
        mysql.query_db(query, data)
        return render_template('wall.html')
    return redirect('/')

@app.route('/thewall')
def the_wall():
    query = "SELECT * FROM users LEFT JOIN messages ON users.id = messages.id"
    users = mysql.query_db(query)
    return render_template('wall.html', all_users=users)

@app.route('/message/<id>', methods=['POST'])
def message(id):
    query = "INSERT INTO messages (message, created_at, updated_at, users_id) VALUES (:message, NOW(), NOW(), :users_id)"
    data = {
        'message': request.form['message'],
        'users_id': id
       }
    mysql.query_db(query, data)
    return redirect('/thewall')

app.run(debug=True)
