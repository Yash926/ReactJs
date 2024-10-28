import React, { useState } from 'react';

const UserDetailsFetcher = () => {
  const [userId, setUserId] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUserDetails = async () => {
    setLoading(true);
    setError('');
    setUserDetails(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error('User not found.');
      }
      const data = await response.json();
      setUserDetails({
        id: data.id,
        name: data.name,
        email: data.email,
        city: data.address.city
      });
    } catch (err) {
      setError('User not found.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />
        <button 
          onClick={fetchUserDetails}
          disabled={loading}
        >
          Get User
        </button>
      </div>

      {loading && (
        <p>Loading...</p>
      )}

      {error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}

      {userDetails && (
        <div>
          <p>ID: {userDetails.id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>City: {userDetails.city}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsFetcher;