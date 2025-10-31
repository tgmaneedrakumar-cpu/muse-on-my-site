import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socials = [
    { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <Card className="p-8 shadow-card border-border/50 text-center">
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {socials.map((social, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="lg"
                asChild
                className="hover:border-primary transition-colors"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                  {social.label}
                </a>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
