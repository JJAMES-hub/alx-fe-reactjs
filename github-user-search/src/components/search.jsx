import { useState } from "react"; // React hook for managing state
import { fetchUserData } from "../services/githubService"; // Import the function

function Search() {
  // State for the username input
  const [username, setUsername] = useState("");
  // State for the user data from GitHub
  const [userData, setUserData] = useState(null);
  // State for errors (like "User not found")
  const [error, setError] = useState("");

  // Function runs when the form is submitted
  const handleSearch = async (e) => {
    e.preventDefault(); // Stops the page from refreshing

    try {
      const data = await fetchUserData(username); // Call GitHub API
      setUserData(data); // Save user data
      setError(""); // Clear errors
    } catch (err) {
      setError(err.message); // Show error if something goes wrong
      setUserData(null); // Clear user data
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      {/* Form to enter username */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state
        />
        <button type="submit">Search</button>
      </form>

      {/* Show error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show user data if found */}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
