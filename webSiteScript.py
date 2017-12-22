from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("homePage.html")

@app.route('/login/')
def login():
    return render_template("login.html")

@app.route('/workout/')
def workout():
    return render_template("liftForm.html")

if __name__ == "__main__":
    app.run(debug=True)