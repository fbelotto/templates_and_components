import { useParams, Link } from "react-router-dom";
import { templates } from "./templates";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, Download, ExternalLink, Terminal } from "lucide-react";

export function TemplateDetail() {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);

  if (!template) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Template not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-20 py-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Templates
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <video
                  controls
                  className="h-full w-full rounded-lg"
                  poster={template.coverImage}
                >
                  <source src={template.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {template.title}
          </h1>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={template.downloadUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">{template.shortDescription}</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="diagram">Diagram</TabsTrigger>
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            <TabsTrigger value="changelog">Changelog</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <p className="text-muted-foreground">{template.fullDescription}</p>
          </TabsContent>
          <TabsContent value="usage" className="mt-4 space-y-6">
            {template.usage.steps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold">{step.title}</h3>
                {step.command && (
                  <div className="relative">
                    <div className="flex items-center rounded-md bg-muted px-4 py-3 font-mono text-sm">
                      <Terminal className="mr-2 h-4 w-4 text-muted-foreground" />
                      {step.command}
                    </div>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="diagram" className="mt-4">
            {template.diagram ? (
              template.diagram.includes("eraser.io") ? (
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src={template.diagram}
                    className="h-full w-full rounded-lg border-0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={template.diagram}
                    alt="Template diagram"
                    className="h-full w-full rounded-lg object-contain"
                  />
                </AspectRatio>
              )
            ) : (
              <p className="text-muted-foreground">No diagram available</p>
            )}
          </TabsContent>
          <TabsContent value="dependencies" className="mt-4">
            <div className="space-y-4">
              {template.dependencies.map((dep, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{dep.name}</h3>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                        {dep.version}
                      </span>
                    </div>
                    {dep.description && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {dep.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="changelog" className="mt-4">
            <div className="space-y-4">
              {template.changelog.map((log, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 rounded-lg border p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{log.version}</h3>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                        {log.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {log.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
