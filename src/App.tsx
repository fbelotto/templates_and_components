import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TemplateCard } from "./components/TemplateCard";
import { TemplateDetail } from "./components/TemplateDetail";
import { templates } from "./components/templates";
import { Component, components } from "./components/components";
import "./App.css";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentDetail } from "./components/ComponentDetail";

function TemplateGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="scroll-m-20 pb-8 text-4xl font-bold tracking-tight">
        Project Templates
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
}

function ComponentsGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="scroll-m-20 pb-8 text-4xl font-bold tracking-tight">
        Components
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <ComponentCard key={component.id} component={component} />
        ))}
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <ComponentsGrid />
      <TemplateGrid />
    </div>
  );
};

function ComponentCard({ component }: { component: Component }) {
  return (
    <Link to={`/component/${component.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={component.coverImage}
              alt={component.title}
              className="h-full w-full object-cover transition-transform duration-300"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">{component.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {component.shortDescription}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template/:id" element={<TemplateDetail />} />
          <Route path="/component/:id" element={<ComponentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
