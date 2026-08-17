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
      "Real-time computer vision system for weapon detection, face recognition, threat assessment, and incident monitoring.",
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
      "AI-assisted floorplan generation combining land-shape classification, procedural generation, geometry processing, and full-stack integration.",
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
      "Robotics work combining AI concepts with embedded systems and autonomous behavior.",
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
      "End-to-end machine learning pipeline covering preprocessing, feature engineering, regression modeling, and model comparison.",
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
      "AI-powered workflow automation combining trend detection, rule-based filtering, LLM classification, human approval, and audit logging.",
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
      "Responsive front-end e-commerce experience with product browsing, filtering, search, and client-side cart persistence.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: saatiBanner,
    href: "https://github.com/HamzehAlBawaneh/ALSA3ATI",
    featured: false,
  },
];

export default projects;    