import portfolioImage1 from '../assets/portfolio.png';
import portfolioImage2 from '../assets/allprojects.png';
import portfolioImage3 from '../assets/projectdetails.png';
import stumanagementImage1 from '../assets/edumanage.png';
import stumanagementImage2 from '../assets/editstudent.png';
import fashionstore1 from '../assets/fashionstorehero.png';
import fashionstore2 from '../assets/fashionstorehome.png';
import fashionstore3 from '../assets/login.png';
import fashionstore4 from '../assets/shop.png';
import fashionstore5 from '../assets/shopfilter.png';
import fashionstore6 from '../assets/cart.png';
import fashionstore7 from '../assets/checkout.png';
import fashionstore8 from '../assets/adminpannel.png';
import taskflow1 from '../assets/taskflowhome.png';
import taskflow2 from '../assets/todo.png';
import taskflow3 from '../assets/note.png';


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
        image: portfolioImage1,
        images: [portfolioImage1, portfolioImage2, portfolioImage3], // Using existing photo as placeholders
        github: "https://github.com/oshanperera03/portfolio",
        link: "https://oshanperera03.github.io/portfolio/",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "React Icons", "Vite"],
        inProgress: false
    },
    {
        id: "student-management-system",
        title: "EduManage",
        description: "A clean student management app to register, view, edit, and delete students with name, date of birth, and address—all in a simple, modern interface.",
        fullDescription: "EduManage is a focused student management tool with a clear, card-based UI. Register new students with full name, date of birth, and home address in one form. View all registered students in a table with total count, and edit or delete any record with a single click. The update flow uses the same fields for quick edits. Built for ease of use with a minimal purple-and-white design.",
        features: [
            "Register new students with name, DOB, and address",
            "View all registered students in a sortable table",
            "Edit student details with a dedicated update form",
            "Delete students with one-click actions",
            "Clean card-based layout with EduManage branding"
        ],
        tags: ["Laravel", "PHP", "Bootstrap", "MySQL"],
        gradient: "from-emerald-500 to-teal-900",
        image: stumanagementImage1,
        images: [stumanagementImage1, stumanagementImage2], // Using existing photo as placeholders
        github: "https://github.com/oshanperera03",
        link: "https://github.com/oshanperera03",
        technologies: ["laravel", "mysql", "bootstrap"],
        inProgress: false
    },
    {
        id: "ecommerce-app",
        title: "Fashion Store",
        description: "A full-stack fashion e-commerce site with hero carousel, shop filters, cart, checkout, login with social auth, and an admin dashboard with sales analytics.",
        fullDescription: "Fashion Store is a complete e-commerce experience. The storefront has a hero carousel (e.g. Summer Essentials), New Arrivals grid with wishlist hearts and discount badges, and a Shop page with filters by category, brand, price range, and size plus sorting. Users can sign in via email/password or Google and Facebook. The shopping cart shows order summary, coupon code, and tax; checkout collects contact, shipping, and billing details with a live order summary and Place Order. The admin panel includes a dashboard with Total Sales, Active Orders, Customers, and Inventory, plus Sales Trends and Orders by Category charts and a Recent Orders table.",
        features: [
            "Hero carousel and New Arrivals grid with wishlist and discounts",
            "Shop page with category, brand, price, and size filters plus sorting",
            "Login and sign up with email or Google/Facebook",
            "Shopping cart with quantity controls, coupon code, and order summary",
            "Checkout with contact, shipping, and billing forms",
            "Admin dashboard with metrics, charts, and recent orders"
        ],
        tags: ["React", "Node.js", "MongoDB"],
        gradient: "from-orange-500 to-red-600",
        image: fashionstore1,
        images: [fashionstore1, fashionstore2, fashionstore3, fashionstore4, fashionstore5, fashionstore6, fashionstore7, fashionstore8],
        github: "https://github.com/oshanperera03",
        link: "https://github.com/oshanperera03",
        technologies: ["React", "laravel", "mysql", "bootstrap"],
        inProgress: true
    },
   
    {
        id: "task-management-tool",
        title: "TaskFlow",
        description: "An all-in-one app for tasks and notes: Smart Todos with due dates and status, plus Quick Notes to capture and organize ideas.",
        fullDescription: "TaskFlow combines task and note management in one place. The home page introduces Smart Todos (priority-based tasks with deadlines and status) and Quick Notes (instant capture and organization of thoughts). The Todos section lets you add tasks with description, start date, and due date, then view them in a table with Complete/Incomplete status and actions to mark done or delete. The Notes section has a create form for title and content, and displays your notes in a card grid with options on each note. Clean, minimal UI with purple accents.",
        features: [
            "Smart Todos with task description, start date, and due date",
            "Todo list table with Complete/Incomplete status and actions",
            "Quick Notes with title and content, saved in a card grid",
            "Home page with feature overview and Get Started / Explore Notes",
            "Simple navigation between Home, Todos, and Notes"
        ],
        tags: ["React", "Dnd-Kit", "Tailwind"],
        gradient: "from-pink-500 to-rose-600",
        image: taskflow1,
        images: [
            taskflow1, taskflow2, taskflow3
        ],
        github: "https://github.com/oshanperera03",
        link: "https://github.com/oshanperera03",
        technologies: [ "react", "laravel", "mysql", "bootstrap"],
        inProgress: false
    },
]