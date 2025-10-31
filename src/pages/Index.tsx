import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 px-4 text-center text-muted-foreground border-t">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
