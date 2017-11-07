from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name']) > 0 and len(request.form['comment']) > 121:
        flash("120 character max for comments!")
        return redirect('/')
    elif len(request.form['name']) > 0 and len(request.form['comment']) > 0:
        print request.form
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comment'] = request.form['comment']
        return redirect('/submit_info')
    #   flash("Success! Your name is {}".format(request.form['name']) + " and your comment is {}".format(request.form['comment']))
    # flash("All feilds must be filled!") # just pass a string to the flash function
    else:
        flash("All feilds must be filled!")
        return redirect('/')
    # flash("Success! Your name is {}".format(request.form['name']) + "and your comment is {}".format(request.form['comment'])) # just pass a string to the flash function


@app.route('/submit_info')
def submit_info():
    return render_template('info.html') # either way the application should return to the index and display the message
app.run(debug=True)
