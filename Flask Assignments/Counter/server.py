from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "SecretKey"

@app.route('/')
def index():
    print "Inside index."
    session["counter"]+=session["incrementor"]
    return render_template ('index.html')

@app.route('/incrementor2')
def incrementor2():
    print "Inside incrementor 2."
    session["counter"]+=1
    return redirect('/')

@app.route('/reset')
def reset():
    print "counter is reset."
    session["counter"]=-1
    return redirect('/')
app.run(debug=True)
