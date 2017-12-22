from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("homePage.html")

@app.route('/signIn/')
def signIn():
    return render_template("signin.html")

@app.route('/workout/')
def workout():
    return render_template("liftForm.html")

@app.route('/signUp/')
def signUp():
    return render_template("signup.html")

if __name__ == "__main__":
    app.run(debug=True)
