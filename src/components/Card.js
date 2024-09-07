import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
};

export default Card;
