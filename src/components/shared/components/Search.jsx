import { useState, useEffect } from "react";
import { clinet } from "../../../lib";

const Search = ({ onClose, onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await clinet.get(
          `/api/user/searchUser?search=${query}`
        );
        setResults(response.data.users || response.data);
        console.log(response.data.users);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (user) => {
    if (onSelect) onSelect(user);
    onClose();
  };

  return (
    <div className="absolute left-20 top-0 h-screen w-64 bg-white border-l shadow-md p-4 transition-all duration-500 ease-in-out">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded-md outline-none"
        autoFocus
      />

      {loading && <p className="text-gray-500 text-sm mt-2">Loading...</p>}

      {!loading && results.length > 0 && (
        <ul className="flex flex-col gap-2 mt-2 max-h-64 overflow-y-auto">
          {results.map((user) => (
            <li
              key={user._id || user.id}
              className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(user)}
            >
              {user.username || user.name}
            </li>
          ))}
        </ul>
      )}

      {!loading && results.length === 0 && query && (
        <p className="text-gray-500 text-sm mt-2">No results found</p>
      )}
    </div>
  );
};

export default Search;
