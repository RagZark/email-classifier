import os
from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.classify_routes import routes

app = Flask(__name__, static_folder='../frontend/dist')

CORS(app)

app.register_blueprint(routes, url_prefix='/api')

@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route('/health')
def health_check():
    return {"status": "healthy", "service": "email-classifier"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)