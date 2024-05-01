const PointsOptions = ({points, onLeavePoint}) => {
  return (
    <div>
      <ul>
        {points.map((el, index) => (
          <li key={el}>
            <button onClick={() => onLeavePoint(el, index + 1)}>{el}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsOptions;
