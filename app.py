from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about/me')
def about():
    return render_template('about.html')

@app.route('/skills')
def skills():
    return render_template('education.html')

@app.route('/cntct')
def contact():
    return render_template('contact.html')

@app.route('/work')
def work():
    return render_template('project.html')


if __name__ == '__main__':
    app.run(debug=True)
