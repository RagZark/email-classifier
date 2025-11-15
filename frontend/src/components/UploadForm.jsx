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

  return (
    <form className="mr-10" onSubmit={handleSubmit}>
      <div>
        <label className="text-orange-100">Digite seu texto:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite seu envio de email aqui"
          rows={6}
          className="w-full px-4 py-3 bg-white/5 border-2 border-orange-400/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 transition-all resize-none"
        />
      </div>
      <div>
        <label
          htmlFor="file-input"
          className="block text-orange-100 font-semibold mb-2 text-sm"
        >
          Arquivo
        </label>
        <div className="relative">
          <input
            type="file"
            accept=".txt,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          <label
            htmlFor="file-input"
            className="flex items-center justify-center gap-3 w-full px-20 py-4 bg-white/5 border-2 border-dashed border-orange-400/30 rounded-xl cursor-pointer hover:bg-white/10 hover:border-orange-400 transition-all group"
          >
            <span className="text-orange-100">
              "Clique para selecionar um arquivo"
            </span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold mt-4 py-4 px-6 rounded-xl shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        Classificar Email
      </button>
    </form>
  );
}
