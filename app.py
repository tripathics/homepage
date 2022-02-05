from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/posts")
def posts():
    return render_template("posts.html")

@app.route("/galary")
def galary():
    return render_template("galary.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")