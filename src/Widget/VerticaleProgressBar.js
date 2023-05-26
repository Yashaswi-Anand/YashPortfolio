import React, { useEffect, useState } from "react";

const VerticalProgressBar = ({ percentage, color }) => {
  const [width, setWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('gray')

  // Update the width of the progress bar whenever the percentage prop changes
  useEffect(() => {
    setWidth(percentage);
    setBackgroundColor(color)
  }, [percentage, color]);

  return (
    <div className="progress-bar">
      <div className="fill" style={{ height: `${width}%` , color:{backgroundColor}}}><p style={{color:'white'}}>{percentage}%</p></div>
    </div>
  );
};
  
export default VerticalProgressBar;