import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("");
  const [user, setUser] = useState({
    name: "Yash",
    age: 20,
    web: "www.google.com",
  });

  function updateAge() {
    setUser((e) => ({
      ...e,
      age: e.age + 1,
    }));
  }

  return (
    <div>
      <div className="board" style={{ background: color }}></div>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <p>My Favorite color is: {color}</p>
      <br />
      <p>Username: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Website: {user.web}</p>
      <button onClick={updateAge}>Update</button>
    </div>
  );
}

export default Color;
