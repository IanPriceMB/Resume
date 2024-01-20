import React from 'react';
import './style.css';

type SubHeaderProps = {
  name: string;
};

function SubHeader({ 
  name,
}: SubHeaderProps) {
  return (
    <div className='job'>
      <h3 className="jobHeader">
        {name}
      </h3>
      <article>
        some information
      </article>
    </div>
  );
}

export default SubHeader;
