// API utility for fetching fish data

const API_URL = "http://localhost:5001/gofish?apikey=abrradiology";

export async function fetchFishData() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch fish data");
  return res.json();
}
