export default function ResultBox({ result }) {
  if (!result) return null;

  return (
    <div
      style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc" }}
    >
      <h2>Categoria: {result.category}</h2>
      <p>
        <strong>Resposta sugerida:</strong> {result.auto_response}
      </p>
    </div>
  );
}
