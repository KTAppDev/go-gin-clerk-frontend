import { auth } from "@clerk/nextjs";

export async function getTokenServer() {
  const { userId, getToken } = auth();
  if (!userId) {
    console.log("Unauthorized");
  }
  const token = await getToken({ template: "60seconds" });
  let response: any = await fetch("http://localhost:8080/albums", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      // Add other headers as needed
    },
  });
  let data = await response.json();
  console.log(data);
  return data;
}
