export async function createUser(formData) {
  console.log("data in fetch", formData);
  try {
    const response = await fetch("http://localhost:3030/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      // Handle success
      console.log("User created successfully");
    } else {
      // Handle error
      console.error("Failed to create user");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
