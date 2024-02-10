import SkillList from "./SkillList";

const Frontend = [
  { loc: "html1.png", name: "HTML" },
  { loc: "css.png", name: "CSS" },
  { loc: "js1.png", name: "JavaScript" },
  { loc: "react.png", name: "React.Js" },
  { loc: "Redux.png", name: "Redux" },
  { loc: "bootstrap.png", name: "Bootstrap" },
  { loc: "materialui.png", name: "Material UI" },
  { loc: "tailwind.png", name: "Tailwind CSS" },
];
const Backend = [
  { loc: "node.png", name: "Node.js" },
  { loc: "express.png", name: "Express" },
  { loc: "mongodb.png", name: "MongoDB" },
  { loc: "firebase2.png", name: "Firebase" },
];

const Other = [
  { loc: "c++.png", name: "C++" },
  { loc: "c.png", name: "C" },
  { loc: "github.png", name: "GitHub" },
  { loc: "postman.png", name: "Postman" },
  { loc: "dsa.png", name: "Data Structures and Algorithms" },
];

const SkillContainer = () => {
  return (
    <center className="skillCo">
      <h1>Skills</h1>
      <div className="expPara">
        Here are some of my skills on which I have been working on for the
      </div>
      <p className="expPara">past 2 years.</p>
      <div className="skillContainer ">
        <div className="innersk bgCol">
          <center className="skillHeader">
            <h3>Frontend</h3>
          </center>
          <SkillList Frontend={Frontend} />
        </div>
        <div className="innersk bgCol">
          <center className="skillHeader">
            <h3>Backend</h3>
          </center>
          <SkillList Frontend={Backend} />
        </div>
        <div className="innersk bgCol">
          <center className="skillHeader">
            <h3>Other</h3>
          </center>
          <SkillList Frontend={Other} />
        </div>
      </div>
    </center>
  );
};

export default SkillContainer;
