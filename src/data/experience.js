import nonerdsLogo from "../assets/images/experience/nonerdsLogo.webp";
import metaservLogo from "../assets/images/experience/metaservLogo.webp";
import jfaLogo from "../assets/images/experience/jfaLogo.webp";

const experience = [
  {
    id: "nonerds",
    title: "Teaching AI Major Materials",
    organization: "NoNerds / Jo Academy",
    period: "Part-time · Current",
    logo: nonerdsLogo,
    category: "Education",
    description:
      "I create and organize learning material for AI-major students, currently focusing on Data Structures and Algorithms and turning difficult concepts into material that is easier to understand and use.",
    skills: [
      "Data Structures",
      "Algorithms",
      "AI Education",
      "Technical Instruction",
    ],
  },

  {
    id: "metaserv",
    title: "AI Engineer Intern",
    organization: "MetaServ AI",
    period: "Nov 2025 – Feb 2026",
    logo: metaservLogo,
    category: "AI Engineering",
    description:
      "During my internship, I worked on turning business requirements into working automated workflows. I used n8n, AI models, and APIs to connect different pieces of a process and make repetitive work easier to run.",
    skills: [
      "n8n",
      "LLM Integration",
      "REST APIs",
      "Workflow Automation",
    ],
  },

  {
    id: "jfa",
    title: "VAR Operator",
    organization: "Jordan Football Association",
    period: "Part-time · Current",
    logo: jfaLogo,
    category: "Technical Operations",
    description:
      "A very different kind of technical work. Before matches, I help prepare and verify the VAR system, cameras, and server. During the match, I operate camera feeds and review tools under referee instructions, where precision and timing matter.",
    skills: [
      "VAR Systems",
      "Camera Systems",
      "Server Connectivity",
      "Technical Operations",
      "Real-Time Troubleshooting",
    ],
  },
];

export default experience;