import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BlogNest",
    description:
      "A Full-stack Blog Website where  Admin can create, update, or delete posts, while all other users can view posts publicly",
    image: "/projects/project6.png",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Express"],
    githubUrl: "https://github.com/Ayush-Sareen/BlogNest.git",
  },
  
  {
    id: 2,
    title: "NewsVerse",
    description:
      "A News visualization dashboard that provides real-time insights into global news trends along with integrated Live Chatbot.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
    githubUrl: "https://github.com/Ayush-Sareen/NewsVerse.git",
  },
  {
    id: 3,
    title: "PassOP",
    description:
      "Full-featured Password Manager with Options to add ,delete ,edit Passwords.",
    image: "/projects/project3.png",
    tags: ["React", "Express", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/Ayush-Sareen/Pass-OP.git",
  },
  {
    id: 4,
    title: "MemoVista",
    description: "A Virtual Memory Management Simulator built using React , Tailwind and Flask.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Flask"],
    githubUrl: "https://github.com/Ayush-Sareen/MemoVista.git",
  },
  {
    id: 5,
    title: "GlyphAI",
    description:
      "A Handwriting Recognition Application that uses Convolutional Neural Networks to recognize handwritten characters.",
    image: "/projects/project4.png",
    tags: ["Machine Learning", "CNN", "Deep Learning"],
    githubUrl: "https://github.com/Ayush-Sareen/GlyphAI.git",
  },
  {
    id: 6,
    title: "HotelGuest-Pro",
    description:
      "A full-stack platform for hotel owners to manage guest records with secure login, Cloudinary image uploads, and Excel export functionality.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/Ayush-Sareen/HotelGuest-Pro.git",
  },
   
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
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
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary"><a href={project.githubUrl} target="_blank" className="hover:underline">{project.title}</a></h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ayush-Sareen"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
