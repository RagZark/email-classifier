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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Classificador de Email com IA</h1>
      <UploadForm onSubmitFileOrText={handleSubmit} />

      {loading && <p>Processando...</p>}

      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

      <ResultBox result={result} />
    </div>
  );
}
