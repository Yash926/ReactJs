//using jsx
// import React, { Component } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation'
// ReactDOM.render(<h1>Lovely Professional University</h1>,document.getElementById("root"));


// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// using javascript
// var h1=document.createElement("h1");
// h1.innerHTML="Lovely Professional University";
// document.getElementById('root').appendChild(h1);


// import {Add,sub,Mul,Div} from './calculator';
// import HelloWorld from './helloworld';
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//     <HelloWorld/>
//   </React.StrictMode>
// );

//jsx Attribute content editable property.
// const name="LPU";
// const img1="https://dummyimage.com/640x480"
// ReactDOM.render(
//   <>
//   <h1 contentEditable="true"> {name}</h1>
//   <img src={img1}/>
//   </>,
//   document.getElementById('root')
// )
// reportWebVitals();


// Components in componenets

// function Car(){
//   return <h2>This is a car!</h2>;
// }
// function Garage(){
//   return(
//     <>
//     <h1>
//       The car is in Garage</h1>
//       <Car/>
//       </>
//   );
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);

//Compnents in Props
// function Car(props){
//   return <h2>I am a {props.color} car!</h2>;
// }
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car color="Black"/>);


//Components receiving props as argument.

// function Car(props){
//   return <h2>I am a {props.brand} car!</h2>;
// }
// const myElement=<Car brand="Ford"/>;
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Navigation title="LPU" type="Contact us"/>
</React.StrictMode>
)


