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
          <h4 className="card-header">Frontend Web Developer Intern</h4>
          <div className="card-body">
            <h5 className="card-title">@ Infotrixs/h5>
            <p className="card-text">
             Worked on Internship Portal With Senior Developers fixing bugs and added extra functionality.
            </p>
            <p className="card-text">
             Optimized user experiences through responsive design, resulting in a 15% boost in mobile satisfaction.
            </p>
            <p className="card-text">
              Collaborated with the QA team to achieve a 95% bug-free release and led to 10% retention boost.
            </p>
            <h5>
              Tech Stack : ReactJs, Redux, Material Ui
            </h5>
          </div>
        </div>
        <div className="card text-center web bgCol">
          <h4 className="card-header">Web Developer</h4>
          <div className="card-body">
            <h5 className="card-title">@ NVCTI (IIT Dhanbad)</h5>
            <p className="card-text">
             Worked on Home page and Event page for IIT Dhanbad cultural fest Srijan 23 drawing 2000+ users.
            </p>
            <p className="card-text">
              Created Admin dashboard for Managing Organization’s various events seamless.
            </p>
            <p className="card-text">
              Handled backend part of the event page for IIT Dhanbad TechFest Concetto 23.
            </p>
            <h5>Tech Stack : ReactJs, Nodejs, ExpressJs, MongoDB, Material UI</h5>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Experience;
