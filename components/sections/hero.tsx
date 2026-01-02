"use client";

import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            {content.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {content.hero.subheadline}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="/resume.pdf" download>
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
