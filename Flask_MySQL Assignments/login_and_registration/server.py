from flask import Flask, render_template, redirect, request, session, flash
import re
import time
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'log_reg_users')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create():
    print request.form['first_name']
    print bool(re.search(r'\d', request.form['first_name']))
    print request.form['last_name']
    print bool(re.search(r'\d', request.form['last_name']))
    print request.form['password']
    print request.form['confirm_password']
    print request.form['email']
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
    elif request.form['confirm_password'] != request.form['password']:
        flash("Password confirmation must be the same as the password!")
    elif len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        flash("The email address you entered (" + request.form['email'] + ") is a valid email address! Thank you!")
        password = request.form['password']
        confirm_pass = request.form['confirm_password']
        pw_hash = bcrypt.generate_password_hash(password)
        confirm_pw_hash = bcrypt.generate_password_hash(confirm_pass)
        print bcrypt.generate_password_hash(password)
        print bcrypt.generate_password_hash(confirm_pass)
        query = "INSERT INTO users (first_name, last_name, email, password_hash, confirm_pass_hash, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password_hash, :confirm_pass_hash, NOW(), NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password_hash': pw_hash,
            'confirm_pass_hash': confirm_pw_hash,
           }
        mysql.query_db(query, data)
        return render_template('success.html')

    return redirect('/')


@app.route('/home')
def home():
    return redirect('/')

app.run(debug=True)
