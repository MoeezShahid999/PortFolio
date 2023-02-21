/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Moeez Shahid",
  title: "Hi all, I'm Moeez",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZqNTE_GB0LkxQM6moRt3EbGBdeVdg2l4/view?usp=share_link",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MoeezShahid999",
  linkedin: "https://www.linkedin.com/in/moeez-shahid-8736851a3/",
  gmail: "moeezshahidfin@gmail.com",
  // gitlab: 'https://gitlab.com/saadpasta',
  facebook: "https://www.facebook.com/profile.php?id=100008401602535",
  // medium: 'https://medium.com/@saadpasta',
  stackoverflow: "https://stackoverflow.com/users/12053447/moeezshahid",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces and Optimzed / Scalable Backend for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Twilio/ AWS / FCM"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      //Change it
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongodb-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    // {//Change it
    //   skillName: 'typescript',
    //   fontAwesomeClassname: 'fab fa-ts',
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Govt Postgraduate College Of Science, Faisalabad",
      logo: require("./assets/images/gpLogo.jfif"),
      subHeader: "Intermediate in Computer Science",
      duration: "2014 - 2016",
      desc: "Ranked 3rd in whole batch",

    },
    {
      schoolName: "Govt Postgraduate College Samanabad, Faisalabad",
      logo: require("./assets/images/gpcsfLogo.jfif"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2016 - 2020",
      desc:
        "Develop a discussion Web Application in MERN stack as my FYP",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "95%",
    },
    {
      Stack: "Programming",
      progressPercentage: "100%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Kwanso Inc.",
      companylogo: "K",
      date: "May 2021 – Present",
      desc:
        "Started as a software engineer, promoted to lead a project under senior Project Manager.",
      color: "#e52e70",
    },
    {
      role: "MERN STACK Developer",
      company: "BT Softwarehouse an AI Technologies",
      companylogo: "BT",
      date: "September 2020 – April 2021",
      desc:
        "My responsibilities in BT Softwarehouse were mainly to develop optimized APIs and provide solutions to a scalable online Taxi Service 'WOW'.",
      color: "blue",
    },
    {
      role: "MERN STACK Developer",
      company: "Maxenius",
      companylogo: "M",
      date: "July 2020 – August 2020",
      desc:
        "During my short span at Maxenius, I developed a web application, for the company, that keeps track of employees day to day work. I also developed the base of a project called Desenio using ReactJS in which users can decorate a wall  with artistic paintings by drag-and-drop fetched from Woo-Commerce Store that was build on WordPress. Users can buy these painting along with their frames.",
      color: "red",
    },
    {
      role: "MERN STACK INTERN",
      company: "GamicaCloud",
      companylogo: "G",
      date: "Feb 2020 – June 2020",
      desc:
        "During this time I take part in developing a clone of magento e-commerce platform using ReactJS (React-Router-Dom, React-Redux, Redux-Thunk, Material-UI & AntD) and NodeJS. I was also responsible for integration of the project.",
      color: "purple",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MoeezShahid999", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [


    {
      image: "https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/listings/kjf0LueUfRgo.jpg",
      projectName: "College Advisor",
      projectDesc: "I joined CollegeAdvisor Project in July 2021, since then I am working on this project. Since mid of 2022 I am working as a lead in this project.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.collegeadvisor.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: "https://realrepp.com/images/main-logo.png",
      projectName: "RealRepp",
      projectDesc: "I have developed a chrome extension for RealRepp ATS along with a few UI Components & APIs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://realrepp.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: "data:image/jpeg;base64,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",
      projectName: "WOW",
      projectDesc: "I developed several APIs for Website/Admin Panel and both the mobile appplications of this amazing project",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://wowets.com/",
        },
      ],
    },
    {
      image: "https://i.pinimg.com/originals/d7/f6/6c/d7f66cab7ea016ccbdfc6d8b107a0059.jpg",
      projectName: "Desenio",
      projectDesc: "I have developed the base of this project including drag-and-drop and fetching products from woocommerce API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://desenio.co.uk/en/ak/inspiration/create-your-gallery-wall#/",
        },
        //  you can add extra buttons here.
      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CISCO Certified IT-Essentials",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: "https://www.ubt-uni.net/wp-content/uploads/2019/02/IT-ESSENTIALS.jpg",
      // footerLink: [
      //   {
      //     name: "Certification",
      //     url:
      //       "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
      //   },
      //   {
      //     name: "Award Letter",
      //     url:
      //       "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
      //   },
      //   {
      //     name: "Google Code-in Blog",
      //     url:
      //       "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
      //   },
      // ],
    },
    {
      title: "Certified MERN Stack developer",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "data:image/png;base64,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",
      // footerLink: [
      //   {
      //     name: "View Google Assistant Action",
      //     url:
      //       "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
      //   },
      // ],
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/",
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: '+92-3440666341',
  emailAddress: "moeezshahidfin@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
