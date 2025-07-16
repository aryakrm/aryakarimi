import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Full-Stack Development",
    academy: "Develhope S.L.R",
    dec: "8-months intensive course to become a Full Stack Developer. Here I learned front-end and back-end development with Html, CSS and Javascript, how to use Git and acquired the necessary skills on TypeScript. In the second part I deepened all the essentials of developing software in React.JS & Node.JS and developed a real web application with AGILE methodologies. Check out my Github profile here … https://github.com/aryakrm.",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    academy: "Udemy (Angel Yu)",
    dec: "Front-end Development (React.js), Back-end (Node.js), Python",
    startYear: "2020",
    endYear: "2021",
  },
  {
    id: 3,
    title: "English Translation",
    academy: "Kirikkale University",
    dec: "Front-end Development (React.js), Back-end (Node.js), Python",
    startYear: "2018",
    endYear: "2020",
  },
  {
    id: 4,
    title: "High School",
    academy: "Kirikkale High School",
    dec: "",
    startYear: "2015",
    endYear: "2017",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Full-Stack Web Developer",
    company: "Vita Altera IVF Center",
    dec: "",
    startYear: "2024",
    endYear: false,
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Fiverr.com",
    dec: "",
    startYear: "2022",
    endYear: false,
  },
  {
    id: 3,
    title: "Intern Full-Stack Developer",
    company: "Develhope S.L.R",
    dec: "",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "Freelancer",
    dec: "",
    startYear: "2021",
    endYear: "2022",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
