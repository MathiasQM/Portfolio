import React from 'react'
import './portfolio.css'

function ReadMore({ readMoreDescription, readMoreBillede, readMoreTitel, show, setShow}) {

  
  return (
    <dialog className='container_read_more' open={show}>
      <div className='readmore_container'>
        <img src={readMoreBillede} alt="" />

        <div className='readmore_header_container'>
          <div className='readmore_header'>
            <h2 className="read_more_title">{readMoreTitel}</h2>
            <button onClick={() => setShow(false)} className="btn btn-primary">Close</button>
          </div>
          <p>{readMoreDescription}</p>
        </div>

      </div>
    </dialog>
  );
}

export default ReadMore

