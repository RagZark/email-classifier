echo

# Build do frontend
echo 
cd frontend
npm install
npm run build
cd ..

# Configuração do Python
echo 
cd backend
pip install -r requirements.txt
cd ..

echo