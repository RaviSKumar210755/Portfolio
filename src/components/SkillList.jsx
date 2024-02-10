import Skill from "./skill";

const SkillList = ({ Frontend }) => {
  return (
    <div className="skill">
      {Frontend.map((front) => (
        <Skill key={front.loc} imgsrc={front} />
      ))}
    </div>
  );
};

export default SkillList;
