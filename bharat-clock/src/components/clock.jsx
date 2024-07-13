import React from "react";
function Clock (){
    const currentDate = new Date();
    return (
        <div>  
            <h1>The current time is : {currentDate.toLocaleTimeString()} - {currentDate.toLocaleDateString()}</h1>
        </div>
    )
}
export default Clock;