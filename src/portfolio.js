/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Nikit Rauniyar",
  title: "Hi all, I'm Nikit",
  subTitle: emoji(
    "Full Stack Software Developer 👨‍💻"
  ),
  resumeLink:"https://1drv.ms/b/s!Ash1-emMte0S8QSNvykoyjwcIU2R",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/nikitrauniyar",
  linkedin: "https://www.linkedin.com/in/nikitrauniyar/",
  mail: "rauniyarnikit@gmail.com",
  facebook:"https://www.facebook.com/nikitrauniyar",
  instagram:"https://www.instagram.com/nikitrauniyar"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "BUILDING WEB APPS WITH MODERN TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Developing scalable and reusable front-end components with React.js"
    ),
    emoji("⚡ OAuth 2.0 Configurations using Microsoft and Google"),
    emoji(
      "⚡ Data handling and API calls to back-end with Node.js, Java or Python"
    ),
    emoji(
      "⚡ Data processing and storing in databases using SQL or NoSQL"
    ),
  ],

  softwareSkills: [
    {
      skillName: "React.js",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "Node.js",
      classname: "vscode-icons:file-type-node",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MySQL",
      classname: "logos:mysql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "PostgreSQL",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "MongoDB",
      classname: "simple-icons:mongodb",
      style: {
        color: "#3FA037",
      },
    },
    {
      skillName: "Ruby",
      classname: "logos:ruby",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Elements of AI",
      subtitle: "- University of Helsinki & Reaktor",
      logo_path: "elements-of-ai.png",
      certificate_link:
        "https://certificates.mooc.fi/validate/wbqds5be8c",
      alt_name: "Elementsofai",
      color_code: "#F6EAEA",
    },
    {
      title: "Learning MongoDB",
      subtitle: "- LinkedIn",
      logo_path: "coursecompletion.png",
      certificate_link:
        "https://1drv.ms/u/s!Ash1-emMte0S8QYUwtKVPhGDTso5",
      alt_name: "MongoDB",
      color_code: "#F0FFDD",
    },
    {
      title: "AI in Fintech",
      subtitle: "- LinkedIn",
      logo_path: "coursecompletion.png",
      certificate_link:
        "https://1drv.ms/u/s!Ash1-emMte0S8QfE-iAW947ux0It",
      alt_name: "Aiinfintech",
      color_code: "#FEF6E6",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Think I am a good fit for your team or just want to say hi? My Inbox is open for all.",
  number: "+61 0450092919",
  email_address: "rauniyarnikit@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  contactInfo,
  certifications,
};
