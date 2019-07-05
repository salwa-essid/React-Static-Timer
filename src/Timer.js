import React from 'react';
import './timer.css';
const Timer=() =>{
    return <div className="time">
        <div className="hour">  
             <h1><strong> 00:</strong></h1>
             <p>Hour</p>
        </div>
        <div className="Minute">  
             <h1><strong> 30:</strong></h1>
             <p>Minute</p>
        </div>
        <div className="Second">  
             <h1><strong> 00</strong></h1>
             <p>Minute</p>
        </div>
    </div>

}
export default Timer;