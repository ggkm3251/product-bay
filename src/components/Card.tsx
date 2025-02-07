import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="">
    <h2 className="">{title}</h2>
    {children}
  </div>
);

export default Card;
