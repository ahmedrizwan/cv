import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Ahmed Rizwan",
  initials: "AR",
  location: "Islamabad, Pakistan",
  locationLink: "https://www.google.com/maps/place/Islamabad",
  about:
    "Lead Front-end Engineer focused on building products with extra attention to details",
  summary: "TBD",
  avatarUrl: "https://avatars.githubusercontent.com/u/4357275?v=4",
  personalWebsiteUrl: "https://ahmedrizwan.com",
  contact: {
    email: "ahmedrizwan@outlook.com",
    tel: "+923465379140",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ahmedrizwan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmedrz/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sudo_rizwan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Comsats Institute of Information Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "TBD",
      link: "TBD",
      badges: ["Remote"],
      title: "TBD",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description: "TBD",
    },
    {
      company: "TBD",
      link: "TBD",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description: "TBD",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js/Remix", "Node.js", "C++"],
  projects: [
    {
      title: "TBD",
      techStack: ["NA", "NA", "NA"],
      description: "TBD",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "TBD",
      techStack: ["NA", "NA", "NA"],
      description: "NA",
      logo: CDGOLogo,
    },
  ],
} as const;
