export async function loginUser(email, password) {
  try {
    const response = await fetch("http://localhost:3030/auth/login", {
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
