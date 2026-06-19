"use client";

import axios from "axios";

const setAuthTokenHeader = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(
      process.env.NEXT_PUBLIC_API_AUTH_TOKEN ?? ""
    );

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }
};

export default setAuthTokenHeader;
