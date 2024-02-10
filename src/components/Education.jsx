const Education = ({ data }) => {
  return (
    <div className="education bgCol">
      <div className="education-item">
        <img src={data.logo} alt={data.name} className="school-logo" />
        <div className="education-details">
          <h3 className="school-name">{data.name}</h3>
          <p className="duration">{data.duration}</p>
          <p className="duration">{data.branch}</p>
        </div>
      </div>
      <div className="eduCont">
        <p className="grade">Grade: {data.grade}</p>
        <p className="comment">{data.content}</p>
      </div>
    </div>
  );
};

export default Education;
