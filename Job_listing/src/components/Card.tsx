import React from "react";


// have each card a component that we can wrap conents in .

interface CardProps {
  children: React.ReactNode;
  bg?: string;
}

const Card: React.FC<CardProps> = ({ children, bg = 'bg-light' }) => {
  return (
    <div className={`card ${bg} p-3 rounded shadow-sm`}>{children}</div>
  );
};


export default Card;

// const Card = ({ children }) => {
//     return <div> {children} </div>
// };

// export default Card;