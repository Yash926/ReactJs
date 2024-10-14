import { useState } from "react";
function App(){
    const [inp, setINP]=useState("");
    const [name, setName]=useState("");
    const clk=()=>{
        setName(inp);
        setINP("");
    };
return(
    <div className="App">
    <h1>LPU</h1>
    {name? <h2>Your name:{name}</h2>:null}
    <input type="text" placeholder="Enter your name"  onChange={(e)=>setINP(e.target.value)} value={inp} />
    <button onClick={clk}>Save</button>{" "}
    </div>
    
);
}
export default App;