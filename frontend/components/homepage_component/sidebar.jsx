import React from 'react'


const Sidebar = ({people}) => {

  return (
    <>
    <div>Dropboxers in your neighborhood</div>

    {people.map((person)=>{
      <>
    <i class="fa-solid fa-image-user"></i>

    <div>{person}</div>
    </>
})}
      </>

  );
};

export default Sidebar;