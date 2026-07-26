import type { Analytics } from "../types/analytics";
const backend_url = import.meta.env.VITE_BACKEND_URL;

const API_URL = `${backend_url}/api/n8n-analytics` ;

export async function fetchAnalytics(): Promise<Analytics> {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch analytics");
  }

  const data: Analytics = await response.json();

  return data;
}