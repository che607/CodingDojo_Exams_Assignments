from flask import Flask, render_template, redirect, request, session, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route('/', methods=['GET'])
def index():
  return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():
    print request.form['firstname']
    print type(request.form['firstname'])
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    elif len(request.form['firstname']) < 1:
        flash("First name cannot be blank!")
    elif bool(re.search(r'\d', request.form['firstname'])):
        print bool(re.search(r'\d', request.form['firstname']))
        flash("First name cannot contain number!")
    elif len(request.form['lastname']) < 1:
        flash("Last name cannot be blank!")
    elif bool(re.search(r'\d', request.form['lastname'])):
        flash("Last name cannot contain number!")
    elif len(request.form['password']) < 0:
        flash("Password cannot be blank!")
    elif len(request.form['password']) < 8:
        flash("Password must be at least 8 characters!")
    elif request.form['password'] != request.form['confirmpassword']:
        flash("Password does not match!")
    else:
        return redirect('/success')
    return redirect('/')

@app.route('/success')
def sucess():
    return render_template('success.html')

app.run(debug=True)
