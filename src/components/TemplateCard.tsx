import { Link } from "react-router-dom";
import { Template } from "./templates";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link to={`/template/${template.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={template.coverImage}
              alt={template.title}
              className="h-full w-full object-cover transition-transform duration-300"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">{template.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {template.shortDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
