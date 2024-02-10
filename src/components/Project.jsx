const Project = ({ data }) => {
  const handleWebClick = () => {
    window.open(data.wevsiteUrl, "_blank");
  };
  const handleGitClick = () => {
    window.open(data.gitHubUrl, "_blank");
  };
  return (
    <div className="projectContainer ">
      <div className="card  bgCol cardHeight" style={{ width: "18rem" }}>
        <div className="imgSize">
          <img
            src={data.imgsrc}
            className="card-img-top inImgHeight"
            alt="..."
          />
        </div>
        <div className="card-body InnerProj">
          <h4>{data.name}</h4>
          <p className="card-text">{data.disc}</p>
          <span>
            Tech Stack:
            {data.techStack.map((techStackName) => (
              <span className="badge text-bg-info badge" key={techStackName}>
                {techStackName}
              </span>
            ))}
          </span>
          <div>
            <button
              type="button"
              className="btn btn-warning showbtn"
              onClick={handleWebClick}
            >
              Website
            </button>
            <button
              type="button"
              className="btn btn-warning showbtn"
              onClick={handleGitClick}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
