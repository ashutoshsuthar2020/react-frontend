import React, { useEffect, useState } from "react";
let ClockTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div>
      <h1>
        The current time is : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </h1>
    </div>
  );
};
export default ClockTime;
