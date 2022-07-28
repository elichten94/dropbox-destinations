import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Results = (props) => {

  if (props.query.length < 1) {
    return null;
  }
  if (!props.result) {
    return null;
  }
  return props.query.map((trail) => {
    return (
      <div className="trail-box">
        <div>
          <strong> {trail.trail_name} </strong>
        </div>
      </div>
    )
  })
}

export default Results