export async function getDeals() {
  try {
    const response = await fetch("http://localhost:3030/deals");
    if (!response.ok) {
      throw new Error("Failed to fetch deals");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deals:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

export async function getOneDeal(id) {
  try {
    const response = await fetch(`http://localhost:3030/deals/${id}`);
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
