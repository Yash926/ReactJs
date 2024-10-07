import React from "react";
import PropTypes from 'prop-types';

function InstagramHome({ name, users }) {
  const Welcome = () => {
    alert(`Welcome, ${name}!`);
  };

  return (
    <div>
      <h1>Instagram</h1>
      <button onClick={Welcome}>Click me!</button>
      <p>Your Posts</p>
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

InstagramHome.propTypes = {
  name: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InstagramHome;