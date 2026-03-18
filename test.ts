// app/actions/triggerTask.ts
"use server";

export async function triggerHeavyTask(payload: any) {
  const response = await fetch("http://localhost:3000/api/files/768614e2-43ef-45de-9dd8-c5ee75bb7d11.csv", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Inject the secret key from the Next.js environment
      "X-API-Key": "super-secret-key-123",
    },

  });

  console.log("API response status:", response.status); 
  console.log("API response headers:", response.headers)

  return await response.json();
}

console.log("triggerTask module loaded");
const testPayload = { message: "Hello from Next.js!" };
triggerHeavyTask(testPayload)
  .then((data) => console.log("Task triggered successfully:", data))
  .catch((error) => console.error("Error triggering task:", error));