from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key="Secret Key"

@app.route('/')
def index():
    print "Entered Index app."
    # session[ran_num]=session[random.randrange(0, 101)]
    return render_template("index.html")

@app.route('/button', methods=["POST"])
def button():
    session["ran_num"]=random.randrange(0, 101)
    print type(request.form['name'])
    print session["ran_num"]
    print request.form["name"]
    integer = int(request.form["name"])
    print type(integer)
    print integer
    if integer < session["ran_num"]:
        return render_template('toolow.html')
    elif integer > session["ran_num"]:
        return render_template('toohigh.html')
    else:
        return render_template('win.html')

app.run(debug=True)
