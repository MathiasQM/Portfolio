import React from 'react'
import './portfolio.css'

function ReadMore(props) {
  
  return (props.trigger) ? (
    <div className='container_read_more'>
        <h2>d</h2>
        <button onClick={() => props.setTrigger(false)} >Close</button>
    </div>
  ) : "";
}

export default ReadMore