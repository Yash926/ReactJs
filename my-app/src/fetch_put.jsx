import React, { useState } from 'react';

function PutDataComponent() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const putData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: 'new value' })
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setResponseData(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Put Data Component</h2>
            <button onClick={putData}>Put Data</button>
            {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default PutDataComponent;
