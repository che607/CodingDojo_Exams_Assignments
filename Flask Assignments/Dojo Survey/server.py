from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "my secret key"

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/users', methods=['POST'])
def create_users():
    print "Got Post Info"
    print request.form
    user = request.form
    session['user'] = request.form
    return redirect('/show')

@app.route('/show')
def show_user():
  return render_template('users.html')

app.run(debug=True)
