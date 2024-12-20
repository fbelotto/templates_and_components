export interface Template {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  videoUrl: string;
  demoUrl: string;
  downloadUrl: string;
  diagram?: string;
  changelog: Array<{
    version: string;
    date: string;
    description: string;
  }>;
  dependencies: {
    name: string;
    version: string;
    description?: string;
  }[];
  usage: {
    steps: Array<{
      title: string;
      command?: string;
      description: string;
    }>;
  };
}

export const templates: Template[] = [
  {
    id: "1",
    title: "E-commerce Starter",
    shortDescription:
      "A complete e-commerce solution with shopping cart and payment integration",
    fullDescription:
      "This template provides a full-featured e-commerce solution built with React and TypeScript. It includes product listing, shopping cart functionality, checkout process, and payment integration with popular payment gateways.",
    coverImage: "https://placehold.co/600x400",
    videoUrl: "https://example.com/video1.mp4",
    demoUrl: "https://demo.example.com/ecommerce",
    downloadUrl: "/templates/ecommerce.zip",
    diagram: "https://app.eraser.io/workspace/5KM5tRZV0E7z1IlqGSp6/embed",
    changelog: [
      {
        version: "v1.1.0",
        date: "2024",
        description: "Added dark mode support",
      },
      {
        version: "v1.0.1",
        date: "2024",
        description: "Bug fixes and performance improvements",
      },
      {
        version: "v1.0.0",
        date: "2024",
        description: "Initial release",
      },
    ],
    dependencies: [
      {
        name: "react",
        version: "^18.2.0",
        description: "Core React library",
      },
      {
        name: "typescript",
        version: "^5.0.0",
        description: "TypeScript language support",
      },
      {
        name: "stripe",
        version: "^12.0.0",
        description: "Payment processing integration",
      },
      {
        name: "tailwindcss",
        version: "^3.3.0",
        description: "Utility-first CSS framework",
      },
    ],
    usage: {
      steps: [
        {
          title: "Installation",
          command: "npm install",
          description: "Install all dependencies",
        },
        {
          title: "Environment Setup",
          command: "cp .env.example .env",
          description:
            "Copy the example environment file and update with your credentials",
        },
        {
          title: "Database Setup",
          command: "npm run setup-db",
          description: "Initialize the database with sample data",
        },
        {
          title: "Development",
          command: "npm run dev",
          description: "Start the development server at http://localhost:3000",
        },
        {
          title: "Build",
          command: "npm run build",
          description: "Create a production build",
        },
      ],
    },
  },
  {
    id: "2",
    title: "Blog Platform",
    shortDescription: "Modern blog platform with markdown support",
    fullDescription:
      "A feature-rich blog platform template that supports markdown editing, image uploads, and SEO optimization. Perfect for personal or professional blogs.",
    coverImage: "https://placehold.co/600x400",
    videoUrl: "https://example.com/video2.mp4",
    demoUrl: "https://demo.example.com/blog",
    downloadUrl: "/templates/blog.zip",
    diagram: "https://placehold.co/800x600",
    changelog: [
      {
        version: "v1.0.1",
        date: "2024",
        description: "Added comment system",
      },
      {
        version: "v1.0.0",
        date: "2024",
        description: "Initial release",
      },
    ],
    dependencies: [
      {
        name: "react",
        version: "^18.2.0",
        description: "Core React library",
      },
      {
        name: "next",
        version: "^13.0.0",
        description: "React framework for production",
      },
      {
        name: "marked",
        version: "^5.0.0",
        description: "Markdown parser and compiler",
      },
      {
        name: "gray-matter",
        version: "^4.0.3",
        description: "Front-matter parser for markdown",
      },
    ],
    usage: {
      steps: [
        {
          title: "Installation",
          command: "npm install",
          description: "Install all dependencies",
        },
        {
          title: "Content Setup",
          command: "npm run init-content",
          description: "Initialize the content directory with sample posts",
        },
        {
          title: "Development",
          command: "npm run dev",
          description: "Start the development server at http://localhost:3000",
        },
      ],
    },
  },
];
