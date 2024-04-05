import Project from "./Project";

const ProjectData = [
  {
    imgsrc: "RealEstate.png",
    name: "RealEstate App",
    disc: "This app is used for Property listing and management for selling and renting properties",
    techStack: ["Reactjs", "NodeJs", "ExpressJs", "MongoDB", "Firebase"],
    wevsiteUrl: "https://estate-wave.onrender.com/",
    gitHubUrl: "https://github.com/RaviSKumar210755/Real-Estate",
  },
  {
    imgsrc: "https://i.postimg.cc/sxstyDb7/Screenshot-387.png",
    name: "VIChatify",
    disc: "– Implemented Real time Group and Personal Chatting, Video call features Boosting user engagement.",
    techStack: ["Socket.io","Reactjs", "NodeJs", "ExpressJs", "MongoDB"],
    wevsiteUrl: "https://chat-app-lyart-sigma.vercel.app/chat",
    gitHubUrl: "https://github.com/RaviSKumar210755/Video-Call-Chat-App-",
  },
  {
    imgsrc: "https://postimg.cc/qtHJLVb0",
    name: "EDashboard",
    disc: "– Implemented intuitive user interface, with robust features User management, Data visualization.",
    techStack: ["Nivo Charts","Reactjs", "NodeJs", "ExpressJs", "MongoDB","Redux","MaterialUI"],
    wevsiteUrl: "https://dashboard-x1h2.onrender.com/",
    gitHubUrl: "https://github.com/RaviSKumar210755/EDashboard",
  },
  {
    imgsrc: "Covid.png",
    name: "Covid 19",
    disc: "It displays Real time Covid 19 stats using graph also search functionality is Provided.",
    techStack: ["Reactjs", "Material Ui", "ChartJs"],
    wevsiteUrl: "https://covid19-ph8h.onrender.com/",
    gitHubUrl: "https://github.com/RaviSKumar210755/Covid-19-Stats",
  },
  {
    imgsrc: "Expance.png",
    name: "Expance Manager",
    disc: "You can track your Expances and Income easily using stats and graph.",
    techStack: ["Reactjs", "NodeJs", "Expressjs", "MongoDB", "AntDesign"],
    wevsiteUrl: "https://expance1.onrender.com/",
    gitHubUrl:
      "https://github.com/RaviSKumar210755/Expance-Tracker/tree/master",
  },
  {
    imgsrc: "ToDo.png",
    name: "To-Do App",
    disc: "User can create daily tasks and after competition delete tasks.",
    techStack: ["Reactjs", "NodeJs", "Expressjs"],
    wevsiteUrl: "#",
    gitHubUrl: "#",
  },
  {
    imgsrc: "Weather.png",
    name: "Weather App",
    disc: "You can find Weather Report using serach functionality.",
    techStack: ["HTML", "CSS", "JavaScript"],
    wevsiteUrl: "https://raviskumar210755.github.io/Infotrixs/",
    gitHubUrl: "https://github.com/RaviSKumar210755/Infotrixs",
  },
  {
    imgsrc: "https://i.ibb.co/6RFGM2s/NewsApp.png",
    name: "News App",
    disc: "User can read Updated news category wise which is integrated with AI.",
    techStack: ["HTML, CSS, JavaScript"],
    wevsiteUrl: "https://news-one-bice.vercel.app/",
    gitHubUrl: "https://github.com/RaviSKumar210755/News-App",
  },
  {
    imgsrc: "SocialMedia.png",
    name: "Social Media",
    disc: "User Can Upload their daily blogs using tags and also can delete.",
    techStack: ["React", "Bootstrap"],
    wevsiteUrl: "#",
    gitHubUrl: "#",
  },
  {
    imgsrc: "Calculator.png",
    name: "Calculator",
    disc: "This is a simle Calculator where you can use it for calculations.",
    techStack: ["React"],
    wevsiteUrl: "https://raviskumar210755.github.io/Calculator/",
    gitHubUrl: "https://github.com/RaviSKumar210755/Calculator",
  },
];

const ProjectList = () => {
  return (
    <div className="projc">
      <center>
        <h1>Projects</h1>
        <p className="expPara">I have worked on a wide range of projects.</p>
        <p className="expPara">Here are some of my projects.</p>
      </center>
      <div className="proj">
        {ProjectData.map((project) => (
          <Project data={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
