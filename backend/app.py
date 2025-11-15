import os
from flask import Flask
from flask_cors import CORS
from routes.classify_routes import routes

app = Flask(__name__)

CORS(app)

app.register_blueprint(routes, url_prefix='/api')

@app.route('/')
def home():
    return {
        "message": "Email Classifier API is running! 🚀",
        "status": "success", 
        "version": "1.0.0"
    }

@app.route('/health')
def health_check():
    return {"status": "healthy", "service": "email-classifier"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)