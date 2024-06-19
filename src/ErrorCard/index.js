import React from 'react';
import './ErrorCard.css'; // Asegúrate de crear este archivo para los estilos

const ErrorCard = ({ title, imageUrl }) => {
  return (
    <div className="error-card">
      <img src={imageUrl} alt={title} className="error-image" />
      <h2 className="error-title">{title}</h2>
    </div>
  );
}

export {ErrorCard};
