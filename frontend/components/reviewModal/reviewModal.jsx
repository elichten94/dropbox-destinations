import React, { useState } from 'react'

function reviewModal(props) {



  return (
    <div className={`modalMain ${props.modalActive && 'modalActive'}`}>
      <div onClick={() => props.setModalActive(false)} className="overlay"></div>
      <form onSubmit={handleSubmit} className="modalForm">
        <input name="rec" type="text" />
        <input name="city" type="text" />
        <textarea name="description" type="text"></textarea>
        <div className="modalButtons">
          <button onClick={() => props.setModalActive(false)}>cancel</button>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default reviewModal