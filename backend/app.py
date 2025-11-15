from flask import Flask
from routes.classify_routes import routes

app = Flask(__name__)

try:
    from flask_cors import CORS
    CORS(app)
    print("CORS habilitado")
except ImportError:
    print("flask-cors não instalado. Execute: pip install flask-cors")

app.register_blueprint(routes, url_prefix='/api')

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)