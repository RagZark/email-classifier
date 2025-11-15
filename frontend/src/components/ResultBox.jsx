export default function ResultBox({ result }) {
  if (!result) return null;

  console.log("result:", result);
  console.log("category:", result.category);
  console.log("auto_response:", result.auto_response);

  return (
    <div className="w-80 h-80 bg-white/5 border-2 border-orange-400/30 rounded-xl text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/50 flex flex-col justify-center pl-4">
      <h2 className="text-orange-100 mb-8">
        <span className="font-semibold">Categoria:</span>
        <br /> {result.category}
      </h2>
      <p className="text-orange-100 ">
        <span className="font-semibold">Resposta sugerida:</span>
        <br />
        {result.auto_response}
      </p>
    </div>
  );
}
