import React from "react";

const FormAction = () => {
  const handleAciton = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <form action={handleAciton}>
      <input type="text" name="name" placeholder="Name" /> <br />
      <input type="email" name="email" id="" placeholder="Email" /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormAction;
