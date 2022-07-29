import React from 'react'

const HomePageRecs = ({recs}) => {

  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  return (
    <>
    <div className='recommendation'>
   <div className='rec-title'> { pickRandom(['Magical ', 'Number 1 ', 'Delicious ', 'Quiet '])}{pickRandom(['Coffee', 'Cafe', 'Black', 'Bottle', 'Tea', 'Boba', 'Bean Juice'])} </div>
   <div className='rec-location'> San Francisco</div>
   <div className='rec-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    </>
  );
};

export default HomePageRecs;