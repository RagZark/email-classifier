export default function ResultBox({ result }) {
  if (!result) return null;
  return (
    <div>
      <h2>Categoria: {result.category}</h2>
      <p>Resposta sugerida: {result.reply}</p>
    </div>
  );
}
