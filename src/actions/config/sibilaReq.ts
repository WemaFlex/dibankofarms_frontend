"use client";
import axios from "axios";

const apiReq = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // your backend URL
  headers: { "x-app": "merchant" },
});

apiReq.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(
      process.env.NEXT_PUBLIC_API_AUTH_TOKEN ?? "auth_token"
    );
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default apiReq;
