import { useState } from "react";

export default function UploadForm({ onSubmitFileOrText }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file) {
      onSubmitFileOrText(file);
    } else if (text.trim() !== "") {
      onSubmitFileOrText(text);
    } else {
      alert("Envie um arquivo ou digite algum texto.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Digite seu texto:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite seu envio de email aqui"
          rows={5}
        />
      </div>
      <div>
        <label>Ou envie um arquivo:</label>
        <input
          type="file"
          accept=".txt,.pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button type="submit">Classificar Email</button>
    </form>
  );
}
