import React from 'react'

const Sidebar = ({people}) => {

  return (
    <>
    {people.map((person)=>
    <div>{person}</div>
    )}
      </>
  );
};

export default Sidebar;