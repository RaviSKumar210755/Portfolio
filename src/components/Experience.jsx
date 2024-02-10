const Experience = () => {
  return (
    <center className="exper">
      <h1>Experience</h1>
      <p className="expPara">
        My work experience as a software engineer and working on
      </p>
      <p className="expPara">different companies and projects.</p>
      <div className="experience">
        <div className="card text-center web bgCol">
          <h4 className="card-header">Web Developer Intern</h4>
          <div className="card-body">
            <h5 className="card-title">@ SkyBug</h5>
            <p className="card-text">
              Developed responsive web pages using ReactJs for client projects.
            </p>
            <p className="card-text">
              Contributed to a team project, implementing new features using
              React.js and improving user experience.
            </p>
            <p className="card-text">
              Identified and fixed performance bottlenecks, optimizing website
              load times by 20%.
            </p>
            <h5>
              Tech Stack : ReactJs, NodeJs, ExpressJs, MongoDB, Material Ui
            </h5>
          </div>
        </div>
        <div className="card text-center web bgCol">
          <h4 className="card-header">Frontend Developer Intern</h4>
          <div className="card-body">
            <h5 className="card-title">@ Infotrixs</h5>
            <p className="card-text">
              Created interactive UI components using React.js, contributing to
              a dashboard application.
            </p>
            <p className="card-text">
              Gained proficiency in responsive design principles, improving
              mobile responsiveness of websites.
            </p>
            <p className="card-text">
              Expanded proficiency in state management using Redux Toolkit,
              enhancing data flow in large-scale applications.
            </p>
            <h5>Tech Stack : ReactJs, Redux Toolkit, Bootstrap</h5>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Experience;
