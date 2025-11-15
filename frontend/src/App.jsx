import { useState } from "react";
import { classifyEmail, classifyEmailText } from "./api";
import UploadForm from "./components/UploadForm";
import ResultBox from "./components/ResultBox";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (input) => {
    setLoading(true);
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
      alert("Ocorreu um erro ao classificar o email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Classificador de Email</h1>
      <UploadForm onSubmitFileOrText={handleSubmit} />
      {loading && <p>Processando...</p>}
      <ResultBox result={result} />
    </div>
  );
}
