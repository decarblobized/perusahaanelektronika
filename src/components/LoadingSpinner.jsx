import React from 'react';

export const LoadingSpinner = ({ size = 'medium', text = '' }) => {
  const sizeClasses = {
    small: 'spinner-sm',
    medium: 'spinner-md',
    large: 'spinner-lg'
  };

  return (
    <div className="spinner-wrapper" role="status" aria-live="polite">
      <div className={`spinner-circle ${sizeClasses[size] || 'spinner-md'}`}></div>
      {text && <span className="spinner-text">{text}</span>}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

