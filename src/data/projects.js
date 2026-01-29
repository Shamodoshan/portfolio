import portfolioImage from '../assets/portfolio.png';
import stumanagementImage from '../assets/stumanagement.png';

export const projects = [
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        description: "A modern developer portfolio showcasing projects, skills and experience with a clean UI built with React and Tailwind CSS.",
        fullDescription: "This portfolio website was designed to be more than just a resume; it's a showcase of my technical skills and design philosophy. Built with React and powered by Tailwind CSS, it features a highly responsive layout, dynamic dark mode, and fluid animations provided by Framer Motion. The multi-page architecture allows for a dedicated space to explore each project in depth, ensuring a premium experience for every visitor.",
        features: [
            "Dynamic Dark/Light mode toggle with persistence",
            "Modular components for high maintainability",
            "Smooth scroll navigation and dynamic hash routing",
            "Fully responsive design for all device sizes",
            "Interactive project filtering and detailed views"
        ],
        tags: ["React", "Tailwind", "Framer Motion"],
        gradient: "from-blue-500 to-purple-500",
        image: portfolioImage,
        images: [portfolioImage, portfolioImage, portfolioImage], // Using existing photo as placeholders
        github: "https://github.com/Shamodoshan/portfolio",
        link: "https://shamodoshan.github.io/portfolio/",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "React Icons", "Vite"]
    },
    {
        id: "student-management-system",
        title: "Student Management System",
        description: "A comprehensive student management system with CRUD features, database integration, and a user-friendly interface.",
        fullDescription: "The Student Management System is a full-featured administrative tool designed to streamline school operations. It provides a robust backend for managing student records, course enrollments, and academic performance. The interface is built for speed and ease of use, ensuring that administrative staff can perform tasks efficiently.",
        features: [
            "Complete CRUD operations for student and course data",
            "Secure authentication and role-based access control",
            "Responsive dashboard with key metrics visualization",
            "Integrated database management with optimized queries",
            "Automated reporting and data export capabilities"
        ],
        tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
        gradient: "from-emerald-500 to-teal-900",
        image: stumanagementImage,
        images: [stumanagementImage, stumanagementImage, stumanagementImage], // Using existing photo as placeholders
        github: "https://github.com/Shamodoshan",
        link: "https://github.com/Shamodoshan",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"]
    },
    {
        id: "ecommerce-app",
        title: "E-Commerce App (Concept)",
        description: "A functional e-commerce platform concept with product filtering, cart management, and checkout simulation.",
        fullDescription: "This e-commerce application focuses on delivering a seamless shopping experience. It includes advanced features like real-time product filtering, a multi-step checkout process, and a responsive cart system. The design is modern and minimalist, prioritizing high-quality product imagery and clear calls to action.",
        features: [
            "Real-time search and category filtering",
            "Interactive cart with local storage persistence",
            "Guest and registered user checkout flows",
            "Product reviews and rating system",
            "Mobile-first responsive storefront"
        ],
        tags: ["React", "Node.js", "MongoDB"],
        gradient: "from-orange-500 to-red-600",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
        ],
        github: "https://github.com/Shamodoshan",
        link: "https://github.com/Shamodoshan",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"]
    },
    {
        id: "weather-dashboard",
        title: "Weather Dashboard",
        description: "Real-time weather application using OpenWeather API with location-based forecasting.",
        fullDescription: "A practical tool for daily use, this dashboard provides accurate weather forecasts by integrating with the OpenWeather API. Users can search for any city globally to get current conditions, hourly trends, and a 7-day forecast. The UI changes dynamically based on the current weather conditions.",
        features: [
            "Geolocation-based weather detection",
            "Multi-city search and saves",
            "Dynamic background changes according to weather",
            "Detailed metrics like humidity, wind speed, and UV index",
            "Optimized API fetching with caching"
        ],
        tags: ["JavaScript", "API", "CSS"],
        gradient: "from-cyan-400 to-blue-600",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&q=80&w=1000"
        ],
        github: "https://github.com/Shamodoshan",
        link: "https://github.com/Shamodoshan",
        technologies: ["JavaScript", "HTML5", "CSS3", "Fetch API", "OpenWeather API"]
    },
    {
        id: "task-management-tool",
        title: "Task Management Tool",
        description: "A productivity tool for managing daily tasks with drag-and-drop functionality and local storage persistence.",
        fullDescription: "Designed for personal productivity, this task manager allows users to organize their workflow using a Kanban-style board. It features drag-and-drop task movement, category tagging, and automated progress tracking. All data is persisted locally to ensure availability even without an internet connection.",
        features: [
            "Drag-and-drop task priority management",
            "Multiple board views (List, Kanban, Calendar)",
            "Custom tagging and deadline reminders",
            "Dark mode support for focused work",
            "Performance metrics and completion analytics"
        ],
        tags: ["React", "Dnd-Kit", "Tailwind"],
        gradient: "from-pink-500 to-rose-600",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1454165833267-028cc21a761b?auto=format&fit=crop&q=80&w=1000"
        ],
        github: "https://github.com/Shamodoshan",
        link: "https://github.com/Shamodoshan",
        technologies: ["React", "Tailwind CSS", "Dnd-Kit", "LocalStorage", "Lucide Icons"]
    },
    {
        id: "ai-chat-interface",
        title: "AI Chat Interface",
        description: "A clean and modern UI for interacting with AI models, focusing on accessibility and smooth animations.",
        fullDescription: "This interface provides a premium environment for interacting with large language models. It features a conversational thread design, code block syntax highlighting, and streaming response simulations. The goal was to create a distraction-free experience that feels as natural as texting a friend.",
        features: [
            "Streaming response animations",
            "Code block syntax highlighting and one-click copy",
            "Chat history management and search",
            "Voice-to-text input integration",
            "Highly accessible and keyboard-navigable UI"
        ],
        tags: ["React", "OpenAI API", "Framer Motion"],
        gradient: "from-violet-600 to-indigo-700",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1673187670770-2a281729053c?auto=format&fit=crop&q=80&w=1000"
        ],
        github: "https://github.com/Shamodoshan",
        link: "https://github.com/Shamodoshan",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "OpenAI API", "PrismJS"]
    }
];
