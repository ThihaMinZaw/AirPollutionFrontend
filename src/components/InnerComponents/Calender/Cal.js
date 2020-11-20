import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
 
const Cal=()=>{

  
 
  return (
    <div className="cal" style={{paddingLeft:"50px"}}>
      <Calendar
        // onChange={onChange}
        // value={value}
      />
    </div>
  );
}

export default Cal;