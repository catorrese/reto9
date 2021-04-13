import React, { useState } from "react";

const CreateOffer = () => {
  return (
    <div>
      <h1>Add a new offer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" onChange={handleChange} />
        <label htmlFor="company"> Company:</label>
        <input id="company" type="text" name="company" onChange={handleChange} />
        <label htmlFor="salary">Salary:</label>
        <input id="salary" type="text" name="salary" onChange={handleChange} />
        <label htmlFor="city">City:</label>
        <input id="city" type="text" name="city" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const handleChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
      [name]: value
  });
};

const handleSubmit = (event) => {
  fetch("/offers", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
  }).then(res => {
      return res.json();
  }).then(res => {
      console.log("Res", res);
      this.props.action();
  });

  event.preventDefault();
};

export default CreateOffer;