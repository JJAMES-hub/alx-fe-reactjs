import React, { useState } from "react"
import { fetchUserData } from "../services/githubService"

function Search() {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState("")
  const [minRepos, setMinRepos] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const users = await fetchUserData({ query, location, minRepos })
      setResults(users)
    } catch (err) {
      setError("Failed to fetch users. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Search username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Location (e.g., Kenya)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <input
          type="number"
          placeholder="Minimum Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Results */}
      <ul className="grid gap-4">
        {results.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded-lg shadow flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-blue-600"
              >
                {user.login}
              </a>
              <p className="text-gray-500">ID: {user.id}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search


