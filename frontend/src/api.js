import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const classifyEmail = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post("/classify", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const classifyEmailText = async (text) => {
  const response = await api.post(
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
