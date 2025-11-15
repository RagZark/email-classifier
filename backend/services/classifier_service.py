from utils.ai_client import ask_gemini

def classify_email(text: str) -> str:
    text_lower = text.lower().strip()
    
    obvious_improductive = [
        'olá', 'ola', 'oi', 'e aí', 'ei',
        'bom dia', 'boa tarde', 'boa noite', 
        'tudo bem', 'como vai', 'td bem', 'blz',
        'ok', 'obrigado', 'obrigada', 'valeu', 'grato', 'confirmado'
    ]
    
    if text_lower in obvious_improductive:
        print(f"✅ CLASSIFICAÇÃO MANUAL: '{text}' → IMPRODUTIVO")
        return "Improdutivo"
    
    words = text_lower.split()
    if len(words) <= 3:
        for keyword in obvious_improductive:
            if keyword in text_lower:
                print(f"✅ CLASSIFICAÇÃO MANUAL (curto): '{text}' → IMPRODUTIVO")
                return "Improdutivo"
    
    prompt = f"Classifique como Produtivo ou Improdutivo: '{text}'"
    
    try:
        print(f"🎯 CONSULTANDO IA: '{text}'")
        result = ask_gemini(prompt).strip().lower()
        print(f"🔍 RESPOSTA IA: '{result}'")
        
        if "produtivo" in result:
            category = "Produtivo"
        else:
            category = "Improdutivo"
            
        print(f"✅ CATEGORIA FINAL: {category}")
        return category
            
    except Exception as e:
        print(f"❌ ERRO: {e}")
        return "Improdutivo"

def generate_auto_response(email_text: str, category: str) -> str:

    print(f"💬 GERANDO RESPOSTA - Categoria: {category}")
    
    if category == "Improdutivo":
        text_lower = email_text.lower().strip()
        
        if any(word in text_lower for word in ['ok', 'confirmado', 'certo']):
            return "Confirmado!"
        elif any(word in text_lower for word in ['obrigado', 'obrigada', 'grato']):
            return "Por nada!"
        elif any(word in text_lower for word in ['olá', 'ola', 'oi', 'e aí']):
            return "Olá! Em que posso ajudar?"
        elif any(word in text_lower for word in ['bom dia', 'boa tarde', 'boa noite']):
            return "Bom dia! Como posso ajudar?"
        elif any(word in text_lower for word in ['tudo bem', 'como vai']):
            return "Tudo bem! Em que posso ajudar?"
        else:
            return "Obrigado!"
    
    else:
        prompt = f"Gere uma resposta profissional útil para: '{email_text}' - Seja direto (2-3 frases) em português:"
        
        try:
            response = ask_gemini(prompt).strip()
            print(f"💬 RESPOSTA PERSONALIZADA: '{response}'")
            return response
        except Exception as e:
            print(f"ERRO: {e}")
            return "Entendido. Vou analisar e retorno em breve."