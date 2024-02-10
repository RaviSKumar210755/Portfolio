const Footer = () => {
  const handleLinkdin = () => {
    const url = "https://www.linkedin.com/in/ravishankar-kumar-664778236/";
    window.open(url, "_blank");
  };
  const handleGitHub = () => {
    const url = "https://github.com/RaviSKumar210755";
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={handleLinkdin}>
              <a href="#" className="nav-link px-2 text-body-secondary">
                Linkdin
              </a>
            </li>
            <li className="nav-item" onClick={handleGitHub}>
              <a href="#" className="nav-link px-2 text-body-secondary">
                GitHub
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li> */}
          </ul>
          <p className="text-center text-body-secondary">
            © 2024 Ravishankar Kumar
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
