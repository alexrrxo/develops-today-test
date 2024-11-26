import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-white`}
    >
      {children}
    </div>
  );
};

export default Card;
