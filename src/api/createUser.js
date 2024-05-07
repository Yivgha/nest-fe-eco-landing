const BASE_URL = process.env.REACT_APP_BASE_URL;
export async function createUser(formData) {
  console.log("data in fetch", formData);
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("User created successfully");
    } else {
      console.error("Failed to create user");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

