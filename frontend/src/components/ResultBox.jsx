export default function ResultBox({ result }) {
  if (!result) return null;

  console.log("result:", result);
  console.log("category:", result.category);
  console.log("auto_response:", result.auto_response);

  return (
    <div
      style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc" }}
    >
      <h2>Categoria: {result.category}</h2>
      <p>Resposta sugerida: {result.auto_response}</p>
    </div>
  );
}
