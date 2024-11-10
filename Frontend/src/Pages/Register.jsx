import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function changeUsername(e) {
    setUsername(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  async function handlerSubmit(e) {
    e.preventDefault();
    await fetch("https://4-h-prac.vercel.app/register", {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({username, password})
    })
  }

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={username}
          onChange={changeUsername}
          placeholder="Enter Username"
        />
        <input
          type="text"
          value={password}
          onChange={changePassword}
          placeholder="Enter Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
