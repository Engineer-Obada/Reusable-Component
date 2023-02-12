import React, { useState } from "react";
import AddUser from "./Component/Users/AddUser";
import UsersList from "./Component/Users/UsersList";
import ErroeModal from "./Component/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const handelSubmit = (uName, uAge) =>
    setUsers((prev) => [
      ...prev,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);

  return (
    <div>
      <AddUser handelSubmit={handelSubmit} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
