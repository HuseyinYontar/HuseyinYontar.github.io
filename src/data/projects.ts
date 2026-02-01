export interface Project {
    id: string;
    title: string;
    description: string;
    date: string;
    technologies: string[];
    github?: string;
    live?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "izmir-traffic-analysis",
        title: "Analyzing Traffic Incidents in İzmir",
        description: "Data-driven analysis of traffic incidents in İzmir using classification, regression, clustering to identify spatiotemporal patterns and predict incident severity.",
        date: "2026-01",
        technologies: ["Python", "Machine Learning", "Data Science"],
    },
    {
        id: "image-processing-project",
        title: "Enhancing Degraded Images",
        description: "Multi staged Image Restoration Pipeline for Salt-Pepper and Gaussian Noise Removal",
        date: "2026-01",
        technologies: ["Matlab", "Image Processing"],
        github: "https://github.com/HuseyinYontar/CE_490_ImageProcessing_Project",
    },
    // { example 
    //   id: "project-name",
    //   title: "Project Title",
    //   description: "Brief description of what this project does.",
    //   date: "2024-06",
    //   technologies: ["placeholder", "placeholder"],
    //   github: "https://github.com/username/repo",
    //   live: "https://project-demo.com",
    //   image: "/images/projects/project.png",
    // },
];
