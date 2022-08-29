import axios from "axios";
import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import User from "./User";
export default function Home() {
  const [usersData, setUSerData] = useState([]);
  const [searchUSer, setSearchUSer] = useState("");
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      console.log(res.data);
      setUSerData(res.data);
    });
  }, []);
  return (
    <div>
      <SearchInput
        searchUSer={searchUSer}
        setSearchUSer={setSearchUSer}
        setUSerData={setUSerData}
      />
      {usersData.length > 0
        ? usersData.map((user) => <User key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url} />)
        : "Data is Not here"}
    </div>
  );
}
