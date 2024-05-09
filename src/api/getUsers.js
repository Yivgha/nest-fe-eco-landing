export async function loginUser(email, password) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    const { user } = await response.json();
    return user;
  } catch (error) {
    console.error("Error login user by email", email);
    throw error;
  }
}

