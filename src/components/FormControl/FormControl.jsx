import React, { useState } from "react";

const FormControl = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(e.target.username.value);
  };

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 8) {
      setError("Password length must be 8 Character");
      return;
    } else if (password.includes("*") === false) {
      setError("A symbol * needed");
      return;
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="" placeholder="Username" />
      <br />

      <input
        type="password"
        name="password"
        id=""
        placeholder="Password"
        defaultValue={password}
        onChange={handleChange}
      />
      <br />

      <p className="text-xs text-red-600">{error}</p>

      <button>Submit</button>
    </form>
  );
};

export default FormControl;
