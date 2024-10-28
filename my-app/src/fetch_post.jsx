import React, { useState } from 'react';

function PostDataComponent() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const postData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: 'value' })
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
            <h2>Post Data Component</h2>
            <button onClick={postData}>Post Data</button>
            {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default PostDataComponent;
