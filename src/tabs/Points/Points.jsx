import PointsOptions from "components/PointsOptions/PointsOptions";
import { useState } from "react";

const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });
  const handleClick = (point, value) => {
    setPoints(prev => ({ ...prev, [points]: prev[point] + value}));
  };
  console.log(points);
  return (
      <div>
<PointsOptions points={Object.keys(points)} onLeavePoints={handleClick}/>

      </div>
    );
  };


export default Points;
