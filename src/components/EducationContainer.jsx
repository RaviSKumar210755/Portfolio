import Education from "./Education";

const EduDetail = [
  {
    logo: "ism.jpeg",
    name: "Indian Institute of Technology (ISM) Dhanbad",
    duration: "NOV 2021 - May 2025",
    branch: "Bachelor of Technology - BTech, Mechanical Engineering",
    grade: "7.83 CGPA",
    content:
      "I am currently pursuing a Bachelor's degree in Mechanical Engineering at Indian Institute of Technology, Dhanbad. I have completed 5 semesters and have a CGPA of 7.83. I have taken courses in Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems. I am also a member of the CodeISM and CodeElectronics at IIT Dhanbad , where I am learning and working on exciting projects with a team of talented developers.",
  },
  {
    logo: "OIG..jpeg",
    name: "High School Karai Parsurai, Nalanda",
    duration: "Apr 2019 - Mar 2020",
    branch: "ISC(XII), Science",
    grade: "90.20%",
    content:
      "I have completed my class 12th at High School Karai Parsurai, Nalanda where i have studied about Physics, Chemistry and Mathematics along with language Paper.",
  },
  {
    logo: "OIG..jpeg",
    name: "High School Karai Parsurai, Nalanda",
    duration: "Apr 2017 - Mar 2018",
    branch: "BSEB(X)",
    grade: "84.20%",
    content:
      "I have completed my class 10th  at  High School Karai Parsurai, Nalanda where i have studied about basic Science, Mathematics, Social Studies as well as language Paper.",
  },
];

const EducationContainer = () => {
  return (
    <div className="ed">
      <center>
        <h1>Education</h1>
        <p className="expPara">
          My education has been a journey of self-discovery and growth. My
        </p>
        <p className="expPara">educational details are as follows.</p>
      </center>
      <div className="parent-container educationCont">
        {EduDetail.map((data, index) => (
          <div className="edu" key={index}>
            <Education data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationContainer;
