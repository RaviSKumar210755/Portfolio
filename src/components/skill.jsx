// import React from "react";

// const Skill = ({ imgsrc }) => {
//   const cardStyle = {
//     width: "6rem",
//     marginTop: "2rem",
//   };

//   const cardBodyStyle = {
//     paddingTop: "0rem",
//     paddingBottom: "0rem",
//   };

//   return (
//     <div className="card" style={cardStyle}>
//       <img src={imgsrc.loc} className="card-img-top" alt="..." />
//       <div className="card-body" style={cardBodyStyle}>
//         <h4 className="card-text">{imgsrc.name}</h4>
//       </div>
//     </div>
//   );
// };

// export default Skill;

import React from "react";

const Skill = ({ imgsrc }) => {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "25px",
    padding: "8px",
    boxSizing: "border-box",
    width: "fit-content",
    margin: "7px", // Adjusted to fit content
  };

  const imageStyle = {
    width: "30px", // Adjust the width of the image as needed
    marginRight: "1rem",
    flexShrink: 0, // Prevent image from shrinking
  };

  const textStyle = {
    minWidth: "50px",
    // fontWeight: "bold",
    fontSize: "20px",
  };

  return (
    <div style={cardStyle}>
      <img src={imgsrc.loc} alt={imgsrc.name} style={imageStyle} />
      <span style={textStyle}>{imgsrc.name}</span>
    </div>
  );
};

export default Skill;
