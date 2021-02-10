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
    "https://drive.google.com/file/d/1KjoM6Mu_7LIwZrC5Hdzlq_XQ03PQTvFD/view?usp=sharing",
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
      role: "MERN STACK Developer",
      company: "BT Softwarehouse an AI Technologies",
      companylogo: "BT",
      date: "September 2020 – Present",
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
      image: "https://desenio.co.uk/includes/2017/images/content/desenio-logo.png",
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
    {
      image: "https://wowetphoto.s3-ap-southeast-1.amazonaws.com/images/Logo15.png",
      projectName: "WOW",
      projectDesc: "I developed several APIs for Website/Admin Panel and both the mobile appplications of this amazing project",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://wowets.com/",
        },
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
