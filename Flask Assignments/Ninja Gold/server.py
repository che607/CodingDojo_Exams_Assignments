from flask import Flask, render_template, redirect, request, session
import random, os
import time
app = Flask(__name__)
app.secret_key = "SecretKey"

@app.route('/')
def index():
    print "Entered index app."
    return render_template('index.html')

@app.route('/process_money', methods=["POST"])
def processMoney():
    if request.form["building"] == "farm":
        ran_num = random.randrange(10, 20)
        session["gold"] += ran_num
        session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.form["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render_template("index.html")
    elif request.form["building"] == "cave":
        ran_num = random.randrange(5, 10)
        session["gold"] += ran_num
        session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.form["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render_template("index.html")
    elif request.form["building"] == "house":
        ran_num = random.randrange(2, 5)
        session["gold"] += ran_num
        session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.form["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
        return render_template("index.html")
    else:
        ran_num = random.randrange(-50, 50)
        if ran_num < 0:
            session["gold"] += ran_num
            session["activities"] += "Lost  " + str(ran_num) + " golds from the " + request.form["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
            return render_template("index.html")
        else:
            session["gold"] += ran_num
            session["activities"] += "Earned " + str(ran_num) + " golds from the " + request.form["building"] + " " + time.strftime("%b %d %Y %I:%M") + "<br>"
            return render_template("index.html")

@app.route('/reset')
def reset():
    session["gold"] = 0
    session["activities"] = " "
    return redirect('/')
app.run(debug=True)
