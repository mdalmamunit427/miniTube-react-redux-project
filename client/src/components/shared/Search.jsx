import React, { useEffect, useState } from "react";

const Search = ({handleSearch}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    handleSearch(search);
  }, [search, handleSearch]);

  return (
    <form>
      <input
        className="outline-none border mr-2 pl-2 py-1 rounded-sm"
        type="search"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
