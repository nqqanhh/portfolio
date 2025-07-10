import { ArrowRight, ExternalLink, Github } from "lucide-react";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.webp";
// Dùng ảnh thật hoặc import ảnh từ assets
const projects = [
  {
    id: 1,
    title: "Facebook Phishing Study Project",
    description: "Final course personal project in Information Systems Security to simulate how phishing a acking works",
    image: img1,
    tags: ["Nodejs", "Express", "React", "CSS", "MongoDB"],
    demoUrl: "https://example.com/demo-one",
    githubUrl: "https://github.com/your-repo/project-one",
  },
  {
    id: 2,
    title: "Food Deli App Clone",
    description: " A nal Mindx course group project to develop a food delivery website.",
    image: img2,
    tags: ["Node.js", "Express", "MongoDB", "Vue.js", "React"],
    demoUrl: "https://example.com/demo-two",
    _githubUrl: "https://github.com/ItsChiAnh/Food-Delivery-FE.git",
    githubUrl: "https://github.com/ItsChiAnh/Food-Delivery-BE.git",
  },
  {
    id: 3,
    title: "Football Pitch Booking System",
    description: "A brief description of project three.",
    image: "/images/project3.jpg",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    demoUrl: "https://example.com/demo-three",
    githubUrl: "https://github.com/your-repo/project-three",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    {project._githubUrl ? <a
                      href={project.githubUrl}
                      className="p-2 rounded-full hover:bg-primary/10 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a> : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="https://github.com/nqqanhh" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                Check My Github <ArrowRight size={16}  />
            </a>
        </div>
      </div>
    </section>
  );
};
