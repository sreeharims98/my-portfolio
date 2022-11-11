import myImage from "../assets/images/sreehari_ms.jpg";
import htmlLogo from "../assets/icons/html-5.png";
import cssLogo from "../assets/icons/css-3.png";
import tsLogo from "../assets/icons/ts.png";
import jsLogo from "../assets/icons/js.png";
import reactLogo from "../assets/icons/react.png";
import nextLogo from "../assets/icons/nextjs.svg";
import reduxLogo from "../assets/icons/redux.png";
import expressjsLogo from "../assets/icons/expressjs.png";
import figmaLogo from "../assets/icons/figma.svg";
import firebaseLogo from "../assets/icons/firebase.png";
import gitLogo from "../assets/icons/git.png";
import tailwindLogo from "../assets/icons/tailwind.svg";
import sassLogo from "../assets/icons/sass.svg";
import illustratorLogo from "../assets/icons/illustrator.svg";
import mongodbLogo from "../assets/icons/mongodb.png";
import nodejsLogo from "../assets/icons/nodejs.png";
import psLogo from "../assets/icons/ps.svg";
import githubLogo from "../assets/icons/github.png";
import linkedinLogo from "../assets/icons/linkedin.png";
import callLogo from "../assets/icons/call.png";
import gmailLogo from "../assets/icons/gmail.png";
import webLogo from "../assets/icons/web.png";
import outlogicsLogo from "../assets/icons/outlogics.png";
import tbhLogo from "../assets/icons/tbh.svg";

export const data = {
  personal: {
    name: "SREEHARI M S",
    image: myImage,
    jobs: ["👨‍💻 Full Stack Web Developer", "🎨 Graphic Designer", "👨🏽‍🏫 Mentor"],
    place: "📍 India, Kerala",
    exp: "📈 2+ Years Experience",
    current_position: "💼 Front-End Developer",
    current_company_name: "Outlogics",
  },
  contact: {
    title: "Contact",
    contact: [
      {
        name: "LinkedIn",
        logo: linkedinLogo,
        link: "https://www.linkedin.com/in/sreeharims",
      },
      {
        name: "Gmail",
        logo: gmailLogo,
        link: "mailto:iamsreeharims@gmail.com",
      },
      {
        name: "Phone",
        logo: callLogo,
        link: "tel:+919567550986",
      },
      {
        name: "Github",
        logo: githubLogo,
        link: "https://github.com/sreeharims98",
      },
      {
        name: "Website",
        logo: webLogo,
        link: "https://sreeharims.surge.sh",
      },
    ],
  },
  about: {
    title: "About",
    about: {
      title: "Hey Everyone👋",
      desc: "I'm Sreehari M S, a self-taught software developer with more than <b>TWO YEARS OF EXPERIENCE</b> in web development. I'm a <b>MENTOR</b> who teaches React.JS internship training. I've also worked as a <b>FREELANCE GRAPHICS DESIGNER</b>, I'm a problem-solver, and lifelong learner. I'm passionate about using technology to solve problems and make people's lives easier. I love learning new things and sharing my knowledge with others. I'm always looking for new challenges and opportunities to grow and learn.",
    },
  },
  skills: {
    title: "Tech Stack",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "TypeScript", logo: tsLogo },
      { name: "React.JS", logo: reactLogo },
      { name: "Next.JS", logo: nextLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Express.JS", logo: expressjsLogo },
      { name: "Node.JS", logo: nodejsLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Git", logo: gitLogo },
      { name: "Photoshop", logo: psLogo },
      { name: "Illustrator", logo: illustratorLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
  positions: {
    title: "Positions",
    positions: [
      {
        logo: outlogicsLogo,
        position: "Front-End Developer",
        company: "Outlogics",
        date: "Apr 2022 - Present",
        link: "https://outlogics.com",
      },
      {
        logo: tbhLogo,
        position: "Associate Software Developer",
        company: "TechByHeart",
        date: "Sep 2020 - Apr 2022",
        link: "https://techbyheart.in",
      },
    ],
  },
  education: {
    title: "Education",
    education: [
      {
        position: "B.Tech in Computer Science & Engineering",
        institution: "SNM Institute of Management and Technology",
        date: "2016 - 2020",
      },
      {
        position: "Higher Secondary Education in Computer Science",
        institution: "MES HSS",
        date: "2014 - 2016",
      },
    ],
  },
};
