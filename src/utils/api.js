// utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3131", // Substitua pela URL da sua API
  timeout: 10000, // Tempo limite de 10 segundos para as requisições
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/api/auth/login", { username, password });
    return response.data.token;
  } catch (error) {
    throw new Error("Erro ao fazer login");
  }
};

// Adicione outras funções de API conforme necessário (logout, etc.)
