import { useParams, Link } from "react-router-dom";
import { components } from "./components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronLeft, Terminal } from "lucide-react";

export function ComponentDetail() {
  const { id } = useParams();
  const component = components.find((c) => c.id === id);

  if (!component) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-muted-foreground">Component not found</p>
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
                  poster={component.coverImage}
                >
                  <source src={component.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {component.title}
          </h1>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              {component.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            <TabsTrigger value="changelog">Changelog</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <p className="text-muted-foreground">{component.fullDescription}</p>
          </TabsContent>
          <TabsContent value="usage" className="mt-4 space-y-6">
            {component.usage.steps.map((step, index) => (
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
          {/* <TabsContent value="diagram" className="mt-4">
            {component.diagram ? (
              component.diagram.includes("eraser.io") ? (
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src={component.diagram}
                    className="h-full w-full rounded-lg border-0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={component.diagram}
                    alt="Component diagram"
                    className="h-full w-full rounded-lg object-contain"
                  />
                </AspectRatio>
              )
            ) : (
              <p className="text-muted-foreground">No diagram available</p>
            )}
          </TabsContent> */}
          <TabsContent value="dependencies" className="mt-4">
            <div className="space-y-4">
              {component.dependencies.map((dep, index) => (
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
              {component.changelog.map((log, index) => (
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
