import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
    const [data, setData] = useState([]);
    const [postData, setPostData] = useState({ title: '', body: '' });
    const [updateData, setUpdateData] = useState({ id: '', title: '', body: '' });
    const [deleteId, setDeleteId] = useState('');

    useEffect(() => {
        // GET Request
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error('There was an error fetching the data!', err);
            });
    }, []);

    const handlePost = () => {
        // POST Request
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
            .then((res) => {
                console.log('Post response:', res.data);
                setData([...data, res.data]); // Add new data to current data
            })
            .catch((err) => {
                console.error('There is an error in handling post data!', err);
            });
    };

    const handleUpdate = () => {
        // PUT Request
        axios.put(`https://jsonplaceholder.typicode.com/posts/${updateData.id}`, updateData)
            .then((res) => {
                console.log('Update response:', res.data);
                setData(data.map(item => item.id === updateData.id ? res.data : item)); // Update specific data item
            })
            .catch((err) => {
                console.error('There is an error in updating data!', err);
            });
    };

    const handleDelete = () => {
        // DELETE Request
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${deleteId}`)
            .then((res) => {
                console.log('Delete response:', res.data);
                setData(data.filter(item => item.id !== parseInt(deleteId))); // Remove deleted item from state
            })
            .catch((err) => {
                console.error('There is an error in deleting data!', err);
            });
    };

    return (
        <div>
            <h1>Axios CRUD Operations</h1>

            {/* Display Data */}
            <h2>Data</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <strong>{item.title}</strong>||<strong>{item.id}</strong> - {item.body}
                    </li>
                ))}
            </ul>

            {/* POST Request */}
            <h2>Create Post</h2>
            <input
                type="text"
                placeholder="Title"
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Body"
                value={postData.body}
                onChange={(e) => setPostData({ ...postData, body: e.target.value })}
            />
            <button onClick={handlePost}>Create Post</button>

            {/* PUT Request */}
            <h2>Update Post</h2>
            <input
                type="text"
                placeholder="ID"
                value={updateData.id}
                onChange={(e) => setUpdateData({ ...updateData, id: e.target.value })}
            />
            <input
                type="text"
                placeholder="Title"
                value={updateData.title}
                onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Body"
                value={updateData.body}
                onChange={(e) => setUpdateData({ ...updateData, body: e.target.value })}
            />
            <button onClick={handleUpdate}>Update Post</button>

            {/* DELETE Request */}
            <h2>Delete Post</h2>
            <input
                type="text"
                placeholder="ID"
                value={deleteId}
                onChange={(e) => setDeleteId(e.target.value)}
            />
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    );
}

export default Axios;
