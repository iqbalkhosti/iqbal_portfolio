import { content } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          About
        </h2>
        <Separator className="mb-8" />
        <p className="text-lg text-muted-foreground leading-relaxed">
          {content.about.text}
        </p>
      </div>
    </section>
  );
}
