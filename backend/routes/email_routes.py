from flask import Blueprint, request, jsonify
from utils.extract_text import extract_text_from_file
from services.classifier_service import classify_email

routes = Blueprint("routes", __name__)

@routes.post("/classify")
def classify():
    if "file" not in request.files:
        return jsonify({"error": "Nenhum arquivo enviado"}), 400

    file = request.files["file"]
    text = extract_text_from_file(file)

    category = classify_email(text)

    return jsonify({
        "text": text,
        "category": category
    })