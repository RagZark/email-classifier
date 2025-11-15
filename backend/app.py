from flask import Flask
from routes.classify import classify_bp
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.register_blueprint(classify_bp)

@app.get("/")
def home():
    return {"status": "Backend inicializado com flask+gemini"}


if ___name___ == "__main__":
    app.run(debug=True)