import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building responsive and performant web applications with modern technologies"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive and beautiful user interfaces that users love"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing creative boundaries"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
