import axios from "axios";

// Para arquivos (FormData)
export const classifyEmail = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/classify", formData);
  return response.data;
};

// Para texto (JSON)
export const classifyEmailText = async (text) => {
  const response = await axios.post(
    "/classify",
    { text },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
