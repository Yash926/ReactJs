import React, { useState } from 'react';

function DeleteDataComponent() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const deleteData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'DELETE',
            });
            console.log('Response status:', response.status);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json().catch(() => ({})); // Handles cases with no JSON response
            console.log('Response data:', data);
            setResponseData(data);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Delete Data</h2>
            <button onClick={deleteData}>Delete Data</button>
            {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default DeleteDataComponent;
