// import React, { useState } from 'react'

// function Hooks() {
//     const [count, setCount] = useState(0);
//   return (
//     <>
//       <p>Click Count: {count}</p>
//       <button onClick={() => {setCount(count+1)}}>Click me</button>
//       <button onClick={() => {setCount(count-1)}}>Reduce</button>
//     </>
//   )
// }

// export default Hooks


//Use effect
// import React, { useState, useEffect } from 'react'


// function Useeffect() {
//     function Timer() {

//         const [count, setCount] = useState(0);
    
//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 setCount((prevCount) => prevCount + 1);
//             }, 1000);
//         }, [count]);
//         return count;
//     }

//     return (
//         <div>
//             <h1>I have Rendered {Timer()} times.</h1>
//         </div>
//     );
// }

// export default Useeffect;


// import React, { useState, useEffect } from 'react'

// function Useeffect() {
//     const [message, setMessage] = useState('Hi! there, how are you?');
//     const Msg = () => {
//         useEffect(() => {
//             console.log('useEffect triggered')
//             const TmFunc = setTimeout(()=> {
//                 setMessage('I am fine, thanks for asking.');
//             }, 2000)
//             return () => clearTimeout(TmFunc)
//         }, []);
//         return message;
//     }
//     function Timer() {

//         const [count, setCount] = useState(0);
    
//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 setCount((prevCount) => prevCount + 1);
//             }, 1000);
//         }, [count]);
//         return count;
//     }

//     return (
//         <div>
//             <h1>I have Rendered {Timer()} times.</h1>
//             <h1>{Msg()}</h1>
//         </div>
//     );
// }

// export default Useeffect;


import React, { useState, useEffect } from 'react';

function ApiCall() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.agify.io?name=Yash&age=20');
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
          <h1>Fetched Data</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>{data ? `Name: ${data.name}, Age: ${data.age}` : 'No data found'}</p>
            )}
        </div>
    );
}

export default ApiCall;



