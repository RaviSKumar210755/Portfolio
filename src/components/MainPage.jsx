const MainPage = () => {
  const handleNavigate = () => {
    const url =
      "https://drive.google.com/file/d/10VrU34v8xkh9sy8gbLvA60N9O0thJOFC/view?usp=sharing";
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://i.ibb.co/H75bBmF/Ravi-Img.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Hii I'm
            </h1>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Ravishankar Kumar
            </h1>
            <p className="lead">
              I am a Full stack software developer with expertise in front-end
              and back-end development experienced in leading cross-functional
              teams.Proficient in DSA & Competative Programming, adept with
              algorithms, data structures, and problem-solving.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                onClick={handleNavigate}
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
