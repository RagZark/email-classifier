import axios from "axios";

const getApiBaseUrl = () => {
  if (import.meta.env.MODE === "development") {
    return "http://localhost:5000/api";
  }

  return "/api";
};

const API_BASE_URL = getApiBaseUrl();

console.log("API Base URL:", API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    if (import.meta.env.MODE === "development") {
      console.log(`Fazendo requisição para: ${config.url}`);
    }
    return config;
  },
  (error) => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (import.meta.env.MODE === "development") {
      console.log("Resposta recebida:", response.status);
    }
    return response;
  },
  (error) => {
    console.error("Erro na resposta:", error.response?.data || error.message);

    if (error.code === "ECONNREFUSED") {
      alert("⚠️ Servidor não está respondendo. Tente novamente mais tarde.");
    } else if (error.response?.status === 500) {
      alert("⚠️ Erro interno no servidor. Tente novamente.");
    } else if (error.response?.status === 404) {
      alert("⚠️ Endpoint não encontrado. Verifique a configuração.");
    }

    return Promise.reject(error);
  }
);

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
