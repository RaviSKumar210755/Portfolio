const Contact = () => {
  const email = "ravisiitism@gmail.com";
  const subject = "Subject";
  const body = "Message";

  const handleMailTo = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <center>
      <h1>Contact</h1>
      <p className="expPara">
        Feel free to reach out to me for any questions or opportunities!
      </p>
      <div className="contact">
        <form className="form contactForm">
          <div className="mb-3 inputCss">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-3 inputCss">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3 inputCss">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Subject"
            />
          </div>
          <div className="mb-3 inputCss">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Message"
            />
          </div>
          <button
            onClick={handleMailTo}
            type="submit"
            className="btn btn-primary inputCss"
          >
            Submit
          </button>
        </form>
      </div>
    </center>
  );
};

export default Contact;
