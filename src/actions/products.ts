"use client";

import siblaReq from "./config/sibilaReq";
import { filterFalslyValues } from "../utils/common";
import { APIResponse, Contact } from "@/types";

export const createProduct = async (data: Partial<Contact>) => {
  const res = await siblaReq.post(
    "/api/v1/merchant/products", 
    { ...data, app: "merchant"}
  );

  return res.data;
};

export const getProductsSummary = async (filter = {}): Promise<APIResponse<Contact>> => {
  const res = await siblaReq.get("/api/v1/merchant/products/summary", {
    params: filterFalslyValues(filter),
  });

  return res.data;
};

export const getProducts = async (filter = {}): Promise<APIResponse<Contact>> => {
  const res = await siblaReq.get("/api/v1/merchant/products", {
    params: filterFalslyValues(filter),
  });

  return res.data;
};

export const getProduct = async (residentId: string) => {
  const res = await siblaReq.get("/api/v1/merchant/products/" + residentId);

  return res.data;
};

export const updateProduct = async (residentId: string, updates: Partial<Contact>) => {
  const res = await siblaReq.put(
    "/api/v1/merchant/products/" + residentId, 
    updates
  );

  return res.data;
};

export const exportProducts = async (_filter: object, setEnabled?: any) =>  {
  try {
    const response = await siblaReq.get("/api/v1/merchant/products/export", {
      responseType: "blob",
      headers: { "Content-Type": "text/csv" },
      params: filterFalslyValues(_filter),
    });

    const blob = new Blob([response.data], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `platform-users-${new Date().toISOString()}.csv`);
    document.body.appendChild(link);
    link.click();

    if(link.parentNode) link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (e) {
       alert("Export exporting records", )
  } finally {
       if (setEnabled) setEnabled(false)
  }
};