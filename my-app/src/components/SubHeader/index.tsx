import React from 'react';
import './style.css';

type SubHeaderProps = {
  text: string;
};

function SubHeader({ 
  text,
}: SubHeaderProps) {
  return (
    <h2 className="subHeader">
      {text}
    </h2>
  );
}

export default SubHeader;
