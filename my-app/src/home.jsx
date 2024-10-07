// create a simple instagramHome Component. Display a welcome message with the username include a button that triggers an alert when clicked . use the map function to iterate over a list of posts and render them in an unordered list . use proptypes to validate the props . the username and list of post should be passed as props from parent component.


import React from 'react';
import InstagramHome from './InstagramHome';


const home = () => {
  const users=["post1","post2","post3","post4"];

  return (
   
   < InstagramHome
   name="John Doe"
   users={users}
   />

  );
};
export default home;