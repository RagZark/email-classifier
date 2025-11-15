import { useState } from "react";
import { classifyEmail, classifyEmailText } from "./api";
import UploadForm from "./components/UploadForm";
import ResultBox from "./components/ResultBox";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (input) => {
    setLoading(true);

    setError(null);
    setResult(null);

    try {
      let data;
      if (input instanceof File) {
        data = await classifyEmail(input);
      } else {
        data = await classifyEmailText(input);
      }

      console.log("📨 Dados recebidos do backend:", data);
      setResult(data);
    } catch (error) {
      console.error("Erro ao classificar:", error);
      setError(
        "Ocorreu um erro ao classificar o email. Verifique se o backend está rodando."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-orange-900 to-amber-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-white mb-4">
        Classificador de Email com IA
      </h1>
      <div className="flex w-full justify-center items-center">
        <UploadForm onSubmitFileOrText={handleSubmit} />

        {loading && (
          <p className="w-80 h-80 bg-white/5 border-2 border-orange-400/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 flex flex-col justify-center pl-4">
            Processando...
          </p>
        )}

        {error && (
          <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
        )}

        <ResultBox result={result} />
      </div>
    </div>
  );
}
