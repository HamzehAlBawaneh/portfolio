import threatBanner from "../assets/images/projects/bannerThreat.webp";
import floorplanBanner from "../assets/images/projects/bannerFloorplan.webp";
import roboticsBanner from "../assets/images/projects/bannerRobotics.webp";
import mlBanner from "../assets/images/projects/bannerMl.webp";
import n8nBanner from "../assets/images/projects/bannerN8n.webp";
import saatiBanner from "../assets/images/projects/Saati Banner.webp";

const projects = [
  {
    id: "threat-detection",
    title: "AI Public Threat Detection",
    category: "Computer Vision / AI",
    description:
      "I wanted to see how far a real-time camera system could go beyond simple object detection. This project combines weapon detection, face recognition, threat assessment, and incident monitoring into one pipeline.",
    technologies: ["YOLOv8", "OpenCV", "ONNX", "Flask"],
    result: "94.6% Precision · 96.5% mAP@50",
    image: threatBanner,
    href: "https://github.com/HamzehAlBawaneh/AI-Public-Threat-Detection",
    featured: true,
  },

  {
    id: "floorplan-generator",
    title: "AI Floorplan Generator",
    category: "AI / Procedural Generation",
    description:
      "I wanted to explore how much of a floorplan could be generated from constraints instead of drawn by hand. The system adapts layouts to land shape, building type, space requirements, and geometry.",
    technologies: [
      "ConvNeXt",
      "PyTorch",
      "Shapely",
      "React",
      "Node.js",
    ],
    image: floorplanBanner,
    href: "https://github.com/HamzehAlBawaneh/AI-Floorplan-Generator",
    featured: true,
  },

  {
    id: "robotics",
    title: "AI + Embedded Robotics",
    category: "Robotics",
    description:
      "This project started with a simple question: what changes when software has to leave the screen and interact with the real world? I worked with embedded hardware, sensors, motor control, and autonomous behavior to build a small campus patrol platform.",
    technologies: ["AI", "Embedded Systems", "Robotics"],
    image: roboticsBanner,
    href: "https://github.com/HamzehAlBawaneh/CampusGuard-Robot",
    featured: true,
  },

  {
    id: "used-car-price-prediction",
    title: "Used Car Price Prediction",
    category: "Machine Learning",
    description:
      "A project built around taking messy vehicle data and turning it into something useful. The workflow covers cleaning, exploration, feature engineering, regression, and comparing model performance.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Regression",
    ],
    image: mlBanner,
    href: "https://github.com/HamzehAlBawaneh/Used-Car-Price-Prediction",
    featured: false,
  },

  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation with n8n",
    category: "AI Automation",
    description:
      "I wanted to see how repetitive decision-making could be turned into a workflow instead of a manual process. The system combines trend detection, rule-based filtering, LLM classification, human approval, and audit logging.",
    technologies: ["n8n", "LLM", "REST APIs", "Telegram"],
    image: n8nBanner,
    href: "https://github.com/HamzehAlBawaneh/AI-Workflow-Automation-with-n8n",
    featured: false,
  },

  {
    id: "alsa3ati",
    title: "ALSA3ATI",
    category: "Frontend / E-Commerce",
    description:
      "A frontend project focused on making a small e-commerce experience feel simple and usable. It includes product browsing, filtering, search, and persistent client-side cart data.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: saatiBanner,
    href: "https://github.com/HamzehAlBawaneh/ALSA3ATI",
    featured: false,
  },
];

export default projects;