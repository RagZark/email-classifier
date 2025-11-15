from flask import Flask
from flask_cors import CORS
from routes.classify_routes import routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(routes, url_prefix='/api')

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)