const Header = ({ setWhatToShow, whatToShow }) => {
  const email = "ravisiitism@gmail.com";

  const handleMailTo = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  const handleNavigation = (section) => {
    setWhatToShow(section);
  };

  console.log(whatToShow);
  return (
    <div className="sticky-navbar bg-dark py-3">
      {" "}
      <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start navBarMargin">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 hoverEffect">
          <li
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("Home"); // Manually handle navigation
            }}
            // onClick={() => setWhatToShow("Home")}
          >
            <a
              href="#"
              className={`nav-link px-2   ${
                whatToShow === "Home" ? "text-secondary" : "text-white"
              }`}
            >
              Home
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("Experience"); // Manually handle navigation
            }}
            //  onClick={() => setWhatToShow("Experience")}
          >
            <a
              href="#"
              className={`nav-link px-2  ${
                whatToShow === "Experience" ? "text-secondary" : "text-white"
              }`}
            >
              Experience
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("Skill"); // Manually handle navigation
            }}
            //  onClick={() => setWhatToShow("Skill")}
          >
            <a
              href="#"
              className={`nav-link px-2 ${
                whatToShow === "Skill" ? "text-secondary" : "text-white"
              }`}
            >
              Skill
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("Education"); // Manually handle navigation
            }}
            //  onClick={() => setWhatToShow("Education")}
          >
            <a
              href="#"
              className={`nav-link px-2  ${
                whatToShow === "Education" ? "text-secondary" : "text-white"
              }`}
            >
              Education
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("Project"); // Manually handle navigation
            }}
            // onClick={() => setWhatToShow("Project")}
          >
            <a
              href="#"
              className={`nav-link px-2  ${
                whatToShow === "Project" ? "text-secondary" : "text-white"
              }`}
            >
              Project
            </a>
          </li>
        </ul>
        <div className="text-end ms-auto emailMargin">
          <button
            onClick={handleMailTo}
            type="button"
            className="btn btn-warning"
          >
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
