export const personalInfo = {
  name: "Harshit Purviya",
  monogram: "H/P",
  role: "Web Developer",
  location: "Bhopal, India",
  headline: "I turn ideas into experiences on the web.",
  bio: "I turn ideas into digital experiences. I build modern, engaging, and functional websites and web applications that help businesses and individuals establish their digital presence.",
  email: "harshitpurviya@gmail.com",
  phone: "9238621518",
  availabilityStatus: "Available for freelance projects",
  taglines: [
    "Exploring Ideas. Building Beyond Limits.",
    "Beyond the Ordinary.",
  ],
}

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/harshitpurviya-max",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harshit-purviya-36a691346/",
  },
  {
    label: "Email",
    href: "mailto:harshitpurviya@gmail.com",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919238621518",
  },
]

export const projects = [
  {
    id: "kisan-setu",
    title: "Kisan Setu",
    category: "SIH / Agriculture Technology",
    team: "Swadeshi Stack",
    role: "Team Leader & Lead Builder",
    overview:
      "A digital mandi procurement platform designed to improve transparency and streamline the procurement journey for farmers and mandi officers.",
    keyFeatures: [
      "Farmer token and queue tracking",
      "Officer procurement workflow",
      "Transparent procurement stages",
    ],
    languageBreakdown: [
      { name: "Python", percentage: "63.5%", color: "#3776AB" },
      { name: "JavaScript", percentage: "36.0%", color: "#F7DF1E" },
      { name: "Other", percentage: "0.5%", color: "#94A3B8" },
    ],
    techTags: ["Python", "JavaScript"],
    liveUrl: "https://sih-farm-project.vercel.app/",
    featured: true,
  },
  {
    id: "royal-rajasthani-wedding",
    title: "Royal Rajasthani Wedding Invitation",
    category: "Creative Web Experience",
    team: "Independent",
    role: "Frontend Developer & UI Designer",
    overview:
      "A bespoke Rajasthani-themed digital wedding invitation featuring an animated Hawa Mahal opening experience, event itinerary and venue navigation.",
    keyFeatures: [
      "Animated Hawa Mahal opening experience",
      "Event itinerary",
      "Venue navigation",
    ],
    languageBreakdown: [
      { name: "JavaScript", percentage: "51.2%", color: "#F7DF1E" },
      { name: "CSS3", percentage: "48.4%", color: "#264DE4" },
      { name: "HTML5", percentage: "0.4%", color: "#E34F26" },
    ],
    techTags: ["JavaScript", "CSS3", "HTML5"],
    liveUrl: "https://wedding-invitation-mocha-seven.vercel.app/",
    featured: true,
  },
]

export const skills = [
  {
    category: "Frontend Development",
    items: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tooling & Environment",
    items: ["Vite", "Git", "GitHub", "VS Code"],
  },
  {
    category: "Deployment",
    items: ["Vercel"],
  },
  {
    category: "Design & Prototyping",
    items: ["Canva", "UI/UX Layout Design"],
  },
  {
    category: "AI-Assisted Workflow",
    items: ["GitHub Copilot", "ChatGPT", "Prompt Engineering"],
  },
]

export const services = [
  {
    id: "business-websites",
    title: "Business Website Development",
    description:
      "Modern, responsive websites for businesses looking to establish a professional online presence.",
  },
  {
    id: "landing-pages",
    title: "Landing Page Development",
    description:
      "Focused landing pages designed to communicate value clearly and encourage user action.",
  },
  {
    id: "responsive-webapps",
    title: "Responsive Web Applications",
    description:
      "Interactive web experiences that work smoothly across desktop, tablet and mobile devices.",
  },
  {
    id: "ui-web-design",
    title: "UI & Layout Design",
    description:
      "Clean, engaging and visually structured interfaces with attention to usability and presentation.",
  },
]

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon — Internal Round",
    role: "Team Leader & Lead Builder",
    team: "Swadeshi Stack",
    recognition: "Qualified through the college internal selection round.",
  },
  {
    id: 2,
    title: "Production Web Deployments",
    recognition: "Successfully built and deployed live web projects.",
    projects: ["Kisan Setu", "Royal Rajasthani Wedding Invitation"],
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Mahi Singh",
    relation: "Teammate on Kisan Setu & Sister of Wedding Client",
    project: "Royal Rajasthani Wedding Invitation & Kisan Setu",
    quote:
      "Harshit created a beautiful wedding invitation website for my elder sister's wedding, and I really liked how he brought the whole experience together. From the Rajasthani-inspired design to the animations and event details, he paid attention to the little things that made the website feel special. It was more than just an invitation; it gave our guests a lovely first glimpse of the wedding celebrations. I've also worked with him on Kisan Setu, and his creativity and dedication are qualities I've seen in both projects.",
  },
  {
    id: 2,
    name: "Anuj Kumar",
    relation: "Teammate on Kisan Setu (Smart India Hackathon)",
    project: "Kisan Setu",
    quote:
      "I worked with Harshit as a teammate on Kisan Setu during our Smart India Hackathon internal-round preparation. I helped him with the PowerPoint presentation, while he handled the overall project development and execution. What stood out to me was his initiative and willingness to take responsibility. He consistently worked towards improving the project and making sure everything was ready for the presentation. It was a good experience being part of the team and contributing to the project.",
  },
  {
    id: 3,
    name: "Divyansh Rai",
    relation: "Teammate on Kisan Setu (Smart India Hackathon)",
    project: "Kisan Setu",
    quote:
      "Being part of the Kisan Setu team with Harshit gave me a chance to see his dedication towards the project. I contributed to the PPT preparation and helped with various smaller tasks during the development and presentation process. Harshit took responsibility for bringing the different parts of the project together and kept pushing to make the final outcome better. His commitment and hands-on approach played an important role in keeping the team moving forward.",
  },
]

export default {
  personalInfo,
  socialLinks,
  projects,
  skills,
  services,
  achievements,
  testimonials,
}
