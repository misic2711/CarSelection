const API_BASE_URL = "https://new.api.nexusautotransport.com/api/vehicles";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const getYears = async () => {
  const response = await fetch(`${API_BASE_URL}/years`, { headers });
  if (!response.ok) throw new Error("Failed to fetch years");
  return response.json();
};

export const getMakes = async (year) => {
  const response = await fetch(`${API_BASE_URL}/makes?year=${year}`, {
    headers,
  });
  if (!response.ok) throw new Error("Failed to fetch makes");
  return response.json();
};

export const getModels = async (year, make) => {
  const response = await fetch(
    `${API_BASE_URL}/models?year=${year}&make=${make}`,
    { headers }
  );
  if (!response.ok) throw new Error("Failed to fetch models");
  return response.json();
};



