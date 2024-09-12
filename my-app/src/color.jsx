import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("");
  const [user, setUser] = useState({
    name: "Yash",
    age: 20,
    web: "www.google.com",
    salary: 20000
  });
  const [like, setlike]=useState(1000);
  const [unlike, setunlike]=useState(1000);


  function updateAge() {
    setUser((e) => ({
      ...e,
      age: e.age + 1,
    }));
  }
  function updateSalary() {
    setUser((e) => ({
      ...e,
      salary: e.salary + 1000,
    }));
  }
  function reduceSalary() {
    setUser((e) => ({
      ...e,
      salary: e.salary - 1000,
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
      <p>Salary: {user.salary}</p>
      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateSalary}>Increase Salary</button>
      <button onClick={reduceSalary}>Decrease Salary</button>
      <p>like {like}</p>
      <p>unlike {unlike}</p>
      <button onClick={
        (e)=>{
          setlike(like+1);
          setunlike(unlike-1);
        }
      }>Like</button>
      <button onClick={
        (e)=>{
          setlike(like-1);
          setunlike(unlike+1);
        }
      }>Unlike</button>
    </div>
  );
}

export default Color;
