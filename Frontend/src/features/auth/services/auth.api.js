// Frontend/src/features/auth/services/auth.api.js
import axios from "axios";

// Base URL from environment variable or fallback to localhost
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// Create Axios instance with credentials support
const api = axios.create({
  baseURL,
  withCredentials: true, // important for cookies/auth headers
});

// ------------------- Auth API Functions -------------------

// Register a new user
export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/auth/register", { username, email, password });
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error("Backend error:", err.response.data);
      throw err.response.data;
    } else if (err.request) {
      console.error("No response received, possible CORS issue:", err.request);
      throw { message: "Network or CORS error" };
    } else {
      console.error("Error setting up request:", err.message);
      throw { message: err.message };
    }
  }
}

// Login user
export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error("Backend error:", err.response.data);
      throw err.response.data;
    } else if (err.request) {
      console.error("No response received, possible CORS issue:", err.request);
      throw { message: "Network or CORS error" };
    } else {
      console.error("Error setting up request:", err.message);
      throw { message: err.message };
    }
  }
}

// Logout user
export async function logout() {
  try {
    const response = await api.get("/api/auth/logout");
    return response.data;
  } catch (err) {
    console.error("Logout error:", err);
    throw err;
  }
}

// Get current logged-in user
export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me");
    return response.data;
  } catch (err) {
    if (err.response) {
      console.error("Backend error:", err.response.data);
      throw err.response.data;
    } else if (err.request) {
      console.error("No response received, possible CORS issue:", err.request);
      throw { message: "Network or CORS error" };
    } else {
      console.error("Error setting up request:", err.message);
      throw { message: err.message };
    }
  }
}
