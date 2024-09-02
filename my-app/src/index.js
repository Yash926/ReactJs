//using jsx
import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render(<h1>Lovely Professional University</h1>,document.getElementById("root"));


// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

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
const name="LPU";
const img1="https://dummyimage.com/640x480"
ReactDOM.render(
  <>
  <h1 contentEditable="true"> {name}</h1>
  <img src={img1}/>
  </>,
  document.getElementById('root')
)
reportWebVitals();