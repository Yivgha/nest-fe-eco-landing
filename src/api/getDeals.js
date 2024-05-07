const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getDeals() {
  try {
    const response = await fetch(`${BASE_URL}/deals`);
    if (!response.ok) {
      throw new Error("Failed to fetch deals");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deals:", error);
    throw error;
  }
}

export async function getOneDeal(id) {
  try {
    const response = await fetch(`${BASE_URL}/deals/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch deal by id", id);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deal by id:", id, error);
    throw error;
  }
}
