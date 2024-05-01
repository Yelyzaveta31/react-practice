// import { useState } from "react";

// const Points = () => {
//   const [points, setPoints] = useState({
//     one: 0,
//     two: 0,
//     three: 0,
//     four: 0,
//     five: 0,
//   });
//   const handleClick = (point) => {
//     setPoints((prev) => {
//       return { ...prev, [point]: prev[point] + 1 };
//     });
//     return (
//       <div>
//         <ul>
//           {Object.keys(points).map((el) => {
//             <li key={el}>
//               <button onClick={() => handleClick(el)}>{el}</button>
//             </li>;
//           })}
//         </ul>
//       </div>
//     );
//   };
// };

// export default Points;
