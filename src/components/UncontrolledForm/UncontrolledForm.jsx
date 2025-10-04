import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current, passwordRef.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="" ref={nameRef} />
      <br />
      <input type="password" name="password" id="" ref={passwordRef} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;

