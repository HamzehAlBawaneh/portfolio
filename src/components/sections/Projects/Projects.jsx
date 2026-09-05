import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import HeroBackground from "../Hero/HeroBackground";
import projects from "../../../data/projects";
import ProjectFeatured from "./ProjectFeatured";
import ProjectCard from "./ProjectCard";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.id === "threat-detection",
  );

  const secondaryProjects = projects.filter(
    (project) =>
      project.id === "floorplan-generator" || project.id === "robotics",
  );

  const supportingProjects = projects.filter(
    (project) =>
      project.id === "used-car-price-prediction" ||
      project.id === "ai-workflow-automation" ||
      project.id === "alsa3ati",
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 xl:py-28"
    >
      {/* Shared portfolio background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <HeroBackground />
      </div>

      {/* Projects content */}
      <Container className="relative z-10">
        <div className="mx-auto max-w-[1210px]">
          <SectionTitle
            eyebrow="02 / Selected Work"
            title="Things I built to figure things out."
            description="A collection of projects where I turned ideas, problems, and curiosity into working software."
          />

          {featuredProject && (
            <div className="mt-12 xl:mt-14">
              <ProjectFeatured {...featuredProject} />
            </div>
          )}

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
