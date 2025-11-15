from utils.ai_client import ask_gemini

def classify_email(text: str) -> str:
    text_lower = text.lower().strip()
    
    improdutive_keywords = [
        'ok', 'confirmado', 'certo', 'entendido', 'de acordo',
        'obrigado', 'obrigada', 'valeu', 'grato', 'gratidão', 'obg',
        'olá', 'ola', 'oi', 'e aí', 'ei',
        'bom dia', 'boa tarde', 'boa noite',
        'tudo bem', 'como vai', 'td bem', 'blz',
        'show', 'legal', 'masss', 'top'
    ]
    
    if text_lower in improdutive_keywords:
        print(f"✅ CLASSIFICACAO MANUAL: '{text}' → IMPRODUTIVO")
        return "Improdutivo"
    
    words = text_lower.split()
    if len(words) <= 3:
        for keyword in improdutive_keywords:
            if keyword in text_lower:
                print(f"CLASSIFICACAO MANUAL (curto): '{text}' → IMPRODUTIVO")
                return "Improdutivo"
    
    prompt = f"""
    Classifique este email como "Produtivo" ou "Improdutivo":

    REGRAS CLARAS:
    - IMPRODUTIVO: "ok", "obrigado", "olá", "oi", "bom dia", confirmações, agradecimentos, saudações
    - PRODUTIVO: pede ação, informação, decisão, relatório, reunião, resolve problemas

    Email: "{text}"

    Responda APENAS: Produtivo ou Improdutivo
    """

    try:
        result = ask_gemini(prompt).strip().lower()
        print(f"RESPOSTA DA IA: '{result}'")
        
        if "produtivo" in result:
            return "Produtivo"
        else:
            return "Improdutivo"
            
    except Exception as e:
        print(f"ERRO NA IA: {e}")
        return "Improdutivo"

def generate_auto_response(email_text: str, category: str) -> str:

    text_lower = email_text.lower().strip()
    
    if category == "Improdutivo":
        if any(word in text_lower for word in ['ok', 'confirmado', 'certo', 'entendido']):
            return "Confirmado!"
        elif any(word in text_lower for word in ['obrigado', 'obrigada', 'grato']):
            return "Por nada!"
        elif any(word in text_lower for word in ['olá', 'ola', 'oi', 'e aí']):
            return "Olá! Em que posso ajudar?"
        elif any(word in text_lower for word in ['bom dia']):
            return "Bom dia! Como posso ajudar?"
        elif any(word in text_lower for word in ['boa tarde']):
            return "Boa tarde! Em que posso ajudar?"
        elif any(word in text_lower for word in ['boa noite']):
            return "Boa noite! Como posso ajudar?"
        elif any(word in text_lower for word in ['tudo bem', 'como vai']):
            return "Tudo bem! Em que posso ajudar?"
        else:
            return "Obrigado!"
    else:
        return "Entendido. Vou analisar e retorno em breve."