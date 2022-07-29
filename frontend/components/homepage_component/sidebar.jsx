import React from 'react'
import {FaUserCircle} from 'react-icons/fa'

const Sidebar = ({people}) => {

  return (
    <>
    <div className='sidebar-title'>Dropboxers in your neighborhood</div>

    {people.map((person)=>(
      <div className='dropboxer' >
    <span className='anon'><FaUserCircle size={70} color={'#f2f2f2'}/></span>

    <div className='dbxer-name'>{person}</div>
    </div>
))}
      </>

  );
};

export default Sidebar;