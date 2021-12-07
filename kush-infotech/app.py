from flask_cors import CORS
from flask import Flask, render_template

app = Flask(__name__,  template_folder='public',static_url_path='',  static_folder='public')
CORS(app, expose_headers='SELECTION-CRITERIA')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, threaded=True)