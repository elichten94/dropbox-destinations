import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const [open, setOpen] = React.useState(false);

  function handleClick(e) {
    if (!e.target.closest('#dropdown-container') && open) {
      setOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener('mouseover', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  const display = (
    <div className='nav-btns'>
      <div className="sign-button">Sign up</div>
      <div className="sign-button">Sign In</div>
    </div>
  );

  return (
    <header className="nav-bar">
      <div>
        {display}
      </div>
    </header>
  );
};