import React, { useState } from 'react'
import './style.css';

const Counter = () => {
  const [number,setNumber] = useState(0)
  const handleClick = (e)=>{
   if(e.target.innerHTML == 'Increase'){
    setNumber(number+1)
   }else if (e.target.innerHTML == 'Reset'){
      setNumber(0)
   }else{
    setNumber(number-1)
   }
  }
  return (
    <>
   <div className="container text-center">
            <h1 className={`display-1 ${number > 0 ? "text-success" : "text-danger"} ${number == 0 && 'yellow'}`}>
               {number}</h1>
            <button onClick={handleClick} className="btn mx-2 btn-success">Increase</button>
            <button onClick={handleClick} className="btn mx-2 btn-warning">Reset</button>
            <button onClick={handleClick} className="btn mx-2 btn-danger">Dcrease</button>

        </div>
    </>
  )
}

export default Counter