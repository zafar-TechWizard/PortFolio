from flask import Flask, render_template, send_from_directory, make_response
import os
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about/me')
def about():
    return render_template('about.html')


@app.route('/cntct')
def contact():
    return render_template('contact.html')

@app.route('/work')
def work():
    return render_template('project.html')

# SEO Routes
@app.route('/robots.txt')
def robots_txt():
    return send_from_directory(app.root_path, 'robots.txt')

@app.route('/sitemap.xml')
def sitemap_xml():
    return send_from_directory(app.root_path, 'sitemap.xml')

# Add security headers for better SEO and security
@app.after_request
def after_request(response):
    # Security headers
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    
    # SEO-friendly headers
    response.headers['Cache-Control'] = 'public, max-age=300'  # 5 minutes cache
    
    # Only add HSTS in production
    if not app.debug:
        response.headers['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains'
    
    return response

if __name__ == '__main__':
    app.run(debug=True)
