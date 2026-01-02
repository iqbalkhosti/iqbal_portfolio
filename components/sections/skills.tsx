import { content } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Skills
        </h2>
        <Separator className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {content.skills.languages.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">AI/Data</h3>
            <div className="flex flex-wrap gap-2">
              {content.skills.aiData.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {content.skills.tools.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Other</h3>
            <div className="flex flex-wrap gap-2">
              {content.skills.other.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
