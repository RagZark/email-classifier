from flask import Blueprint, request, jsonify
from utils.ai_client import ask_gemini
from utils.extract_text import extract_text_from_file

routes = Blueprint("classify_routes", __name__)

@routes.route("/classify", methods=["POST"])
def classify():
    text = ""

    if "file" in request.files:
        file = request.files["file"]
        text = extract_text_from_file(file)
    else:
        data = request.get_json()
        if data:
            text = data.get("text", "")
    
    if not text.strip():
        return jsonify({"error": "Nenhum texto ou arquivo enviado"}), 400

    # Chama a IA
    result = ask_gemini(text)
    return jsonify(result)