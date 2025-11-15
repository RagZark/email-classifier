export default function ResultBox({ result }) {
  if (!result) return null;

  console.log("result:", result);
  console.log("category:", result.category);
  console.log("auto_response:", result.auto_response);

  return (
    <div className="w-80 bg-white/5 border-2 border-orange-400/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 flex flex-col justify-center">
      <h2 className="self-center text-orange-100 ">
        Categoria: {result.category}
      </h2>
      <p className="self-center text-orange-100 ">
        Resposta sugerida:{result.auto_response}
      </p>
    </div>
  );
}
