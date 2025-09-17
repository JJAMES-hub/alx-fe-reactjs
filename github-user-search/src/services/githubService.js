// This function talks to the GitHub API to get user info
export async function fetchUserData(username) {
  // Call GitHub API with the username entered
  const response = await fetch(`https://api.github.com/users/${username}`);

  // If the response is not OK (user not found, etc.)
  if (!response.ok) {
    throw new Error("User not found");
  }

  // Convert the response into JSON and return it
  return response.json();
}
