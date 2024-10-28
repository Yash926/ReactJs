import React, { useEffect, useState } from 'react'

function FetchDataComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if(!res.ok) {
                throw new Error("network response is not ok");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
  return (
    <div>
        <h1>Fetched Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default FetchDataComponent