import axios from "axios";

/* Backend API base URL */
function Domain() {
  const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/"
  return baseURL;
}

// Centralized API instance with Authorization header
const API = axios.create({
  baseURL: Domain(),
});

// Add token to Authorization header for every request
API.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to retrieve the token from session storage
export function AuthToken() {
  const authToken = sessionStorage.getItem("authToken");
  return authToken ? `Bearer ${authToken}` : null;
}

// Function to retrieve the Admin Name
export function AdminName() {
  return sessionStorage.getItem("AdminName") || "Admin";
}

// Logout function to clear session and redirect to Login page
export function Logout() {
  sessionStorage.clear();
  window.location.href = "/Login";
}

export default API;
