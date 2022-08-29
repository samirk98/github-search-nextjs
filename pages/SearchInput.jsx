import React from "react";
import axios from "axios";
const SearchInput = ({ setSearchUSer, searchUSer, setUSerData }) => {
  const handleSearch = () => {
    axios
      .get(`https://api.github.com/search/users?q=${searchUSer}#rare_limit`)
      .then((res) => setUSerData(res.data.items))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setSearchUSer(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
