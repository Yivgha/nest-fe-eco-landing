export async function getUsers() {
  try {
    const response = await fetch("http://localhost:3030/user");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}

export async function getOneUser(id) {
  try {
    const response = await fetch(`http://localhost:3030/user/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user by id", id);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user by id:", id, error);
    throw error;
  }
}
