import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern web application built with React and TypeScript, featuring real-time updates and beautiful animations.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Beta",
      description: "An innovative platform that combines cutting-edge design with powerful functionality for seamless user experiences.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Project Gamma",
      description: "A creative solution that pushes the boundaries of web development with smooth interactions and elegant design.",
      tech: ["React", "Three.js", "WebGL"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 flex flex-col border-border/50"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
