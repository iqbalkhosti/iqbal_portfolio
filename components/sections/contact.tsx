import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Contact
        </h2>
        <Separator className="mb-12" />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Feel free to reach out if you'd like to connect or collaborate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${content.contact.email}`}
              className="flex-1"
            >
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                {content.contact.email}
              </Button>
            </a>
            
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full justify-start">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            
            <a
              href={content.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" className="w-full justify-start">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
