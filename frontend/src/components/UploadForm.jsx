import { useState } from "react";

export default function UploadForm({ onSubmitFileOrText }) {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

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
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Limpa o texto quando um arquivo é selecionado
    if (selectedFile) {
      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);

    // Limpa o arquivo quando texto é digitado
    if (e.target.value.trim() !== "") {
      setFile(null);
    }
  };

  return (
    <form className="mr-10" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-orange-100 font-semibold mb-3">
          Digite seu texto:
        </label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Digite seu envio de email aqui"
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border-2 border-orange-400/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 transition-all resize-none"
        />
      </div>

      <div className="mb-6">
        <label className="block text-orange-100 font-semibold mb-3">
          Ou envie um arquivo:
        </label>
        <div className="relative">
          <input
            id="file-input"
            type="file"
            accept=".txt,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className="flex flex-col items-center justify-center gap-2 w-full px-4 py-6 bg-white/5 border-2 border-dashed border-orange-400/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-orange-400 transition-all group"
          >
            <svg
              className="w-8 h-8 text-orange-300 group-hover:text-orange-200 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>

            <span className="text-orange-100 text-center">
              {file ? file.name : "Clique para selecionar um arquivo"}
            </span>
            <span className="text-orange-300/70 text-sm">
              Formatos suportados: .txt, .pdf
            </span>
          </label>
        </div>

        {file && (
          <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Arquivo selecionado: {file.name}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!file && !text.trim()}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
      >
        Classificar Email
      </button>
      <div className="mt-4 text-center">
        <p className="text-orange-300/60 text-sm">
          💡 Preencha apenas um dos campos acima
        </p>
      </div>
    </form>
  );
}
