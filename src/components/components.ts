export interface Component {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  videoUrl: string;
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

export const components: Component[] = [
  {
    id: "1",
    title: "List Transfer",
    shortDescription:
      "A component that allows users to transfer items between two lists.",
    fullDescription:
      "This component allows users to transfer items between two lists.",
    coverImage: "https://placehold.co/600x400",
    videoUrl: "https://example.com/video1.mp4",
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
];
