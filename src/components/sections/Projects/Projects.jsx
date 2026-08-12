import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Work"
          description="A selection of projects demonstrating my experience in Artificial Intelligence, Computer Vision, Data Science and Full-Stack Web Development."
        />

      </Container>
    </section>
  );
}

export default Projects;