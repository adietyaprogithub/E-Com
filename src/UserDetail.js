// src/UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = ({ usersData }) => {
  const { id } = useParams();
  const user = usersData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <h3>{user.name}</h3>
      <p>ID: {user.id}</p>
      <img src={user.image} alt={user.name} />
    </div>
  );
};

export default UserDetail;
