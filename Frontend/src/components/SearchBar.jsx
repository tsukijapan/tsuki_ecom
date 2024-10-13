import React from "react";

function SearchBar() {
  return (
    <div>
      {/* Search Bar */}
      <div className="w-full max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full py-2 px-4 rounded-lg shadow-sm focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;
