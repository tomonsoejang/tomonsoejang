const productionHost =
  "https://firebasestorage.googleapis.com/v0/b/tomonsoejang-bf5a5.appspot.com/o";

const env = process.env.NODE_ENV;

const host = env === "production" ? productionHost : "http://localhost:5000";

const imagePath = "images/";
const filePath = "files/";
const encodedImagePath =
  env === "production" ? encodeURIComponent(imagePath) : imagePath;
const encodedFilePath =
  env === "production" ? encodeURIComponent(filePath) : filePath;

const imageHost = `${host}/${encodedImagePath}`;
const fileHost = `${host}/${encodedFilePath}`;

// just add file name
const profileImage = `${imageHost}me.jpg?alt=media`;
const kyfImage = `${imageHost}kyf-app-screenshots.png?alt=media`;
const bannerImage = `${imageHost}banner.jpg?alt=media`;
const resumeLink = `${fileHost}/sarphu-rongpi-resume.pdf?alt=media`;

const instagramProfile = "https://www.instagram.com/tomonsoejang";
const facebookProfile = "https://facebook.com/tomonsoejang";
const githubProfile = "https://github.com/tomonsoejang";
const linkedInProfile = "https://www.linkedin.com/in/sarphurongpi/";
const kyfAppPlayStoreLink =
  "https://play.google.com/store/apps/details?id=com.karbiyouthfestival";

const technologies = [
  "React",
  "React Native",
  "NodeJS",
  "ExpressJS",
  "NextJS",
  "Javascript",
  "Typescript",
  "GraphQL",
];
const aboutMe = { technologies };

const data = {
  bannerImage,
  profileImage,
  resumeLink,
  kyfImage,
  instagramProfile,
  facebookProfile,
  githubProfile,
  linkedInProfile,
  kyfAppPlayStoreLink,
  technologies,
  aboutMe,
};

export default data;
