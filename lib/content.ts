export interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  content: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  caseStudy?: string;
  featured?: boolean;
  techStack?: string[];
}

export const posts: Post[] = [
 
  {
    id: "case-study-scalable-lms",
    title: "🎓 Case Study: Building a Scalable LMS from Scratch",
    description: "How I helped build a robust, scalable LMS using the PERN stack and Kafka",
    date: "2025-04-06",
    featured: true,
    content: `
**Project Overview**

In this project, our team set out to build a Learning Management System (LMS) from the ground up. The goal was to create a platform capable of handling a growing number of users (students, trainers, and admins), while offering interactive learning experiences, content control mechanisms, and a robust backend infrastructure.

I was onboarded as a Backend Developer, responsible for designing and implementing a scalable, efficient, and maintainable backend system using the **PERN stack** (PostgreSQL, Express, React, Node.js) and **Kafka** for asynchronous event handling.

---

**Problem Statement**

- Designing an architecture that could scale with user growth and high traffic surges.
- Managing different user roles (students, trainers, admins) with dynamic access and content workflows.
- Implementing real-time interactions and personalized learning features.
- Ensuring clean, maintainable code with complete API documentation for collaboration and future scaling.

---

**My Contribution**

- Designed and built key backend modules
- Set up database schemas and relationships
- Integrated event-driven features using Kafka
- Provided robust API documentation
- Collaborated cross-functionally with front-end and DevOps teams

---

**Key Backend Features & Technical Contributions**

🏗️ **Modular Architecture Design**

- Used Node.js and Express, structured with SOLID principles.
- Logical service segregation:
  - Course/content delivery
  - Enrollment tracking
  - Trainer-student workflows
  - Admin dashboard & analytics

👥 **Role-Based Access Control (RBAC)**

- JWT-based secure auth
- Middleware for dynamic access control

📚 **Admin-Driven Content Management**

- Create, update, publish courses
- Moderate interactions
- View analytics

💬 **Interactive Learning Features**

- Comment threads, likes, trainer replies
- Lazy loading & pagination

⚙️ **Asynchronous Event Handling with Kafka**

- Notifications, user activity logging
- Non-blocking operations

📄 **API Documentation**

- Documented with Swagger
- Boosted frontend collaboration

---

**Development Practices**

- Agile, CI/CD with Docker
- Testing with Jest

---

**Impact & Results**

🚀 Scalable to 100s of users  
🔐 Secure and reliable  
💬 Higher engagement  
🧩 Modular, dev-friendly code  
📊 Admins empowered with insights

---

**Key Takeaways**

- Scalable architecture starts with the right mindset.
- Kafka simplified background tasks and improved UX.
- Good documentation and modularity help teams move faster.
`
  },
  {
    id: "javascript-global-execution-context",
    title: "🧠 Deep Dive: JavaScript's Global Execution Context",
    description: "Ever wondered how JS hoisting and the TDZ work? This one's for you.",
    date: "2025-04-07",
    featured: true,
    content: `
Have you ever wondered how JavaScript handles your code under the hood? The answer lies in the **Global Execution Context (GEC)** — the foundation where everything begins.

---

### What is the Global Execution Context?

When JavaScript runs, it creates an execution context to manage the code. The GEC is the first context that is created when:

- A JavaScript file is loaded in the browser.
- Code is executed in a Node.js environment.

It consists of two critical phases:

1. **Memory Creation Phase**
2. **Code Execution Phase**

---

### Phase 1: Memory Creation Phase

- \`var\` variables → memory allocated & initialized as \`undefined\`
- \`function\` declarations → stored in memory with full definitions
- \`let\` and \`const\` → memory allocated but not initialized (TDZ)

---

### Phase 2: Code Execution Phase

- Code is executed line by line.
- \`var\` variables get assigned actual values.
- \`let\`/\`const\` trigger ReferenceError if accessed before init.
- Functions declared using the \`function\` keyword can be invoked early.

---

### Example:

\`\`\`js
var a = 10;
function greet() {
  console.log("hello there");
}
const sayHi = () => {
  console.log("hi there");
};
\`\`\`

#### Behind the Scenes (GEC):

**Memory Creation:**

- a → \`undefined\`
- greet → full function definition
- sayHi → TDZ

**Code Execution:**

- a = 10
- greet() ✅
- sayHi() ❌ ReferenceError if called early

---

### 💡 Key Takeaways

- \`var\` is hoisted and initialized as \`undefined\`.
- \`let\`/\`const\` are hoisted but uninitialized → TDZ.
- Function declarations are fully hoisted.
- Arrow functions assigned to \`const\`/let are not callable before definition.

---

### Wrapping Up

Understanding the Global Execution Context helps avoid bugs and write smarter JS. Stay tuned for more JS internals! 🚀
`
  }
];


export const projects: Project[] = [
  {
    id: "affiliate-ecommerce",
    title: "Affiliate Marketing E-commerce Platform",
    description: "Built an SEO-friendly affiliate-based e-commerce platform integrated with external product APIs and analytics dashboard.",
    link: "http://www.dealsmocktail.com",
    techStack: ["Next.js", "TypeScript", "Jest"]
  },
  {
    id: "startup-portfolio",
    title: "Startup Portfolio Website",
    description: "Developed a sleek and fast-loading portfolio website for a tech startup to showcase products and services effectively.",
    link: "https://www.qubicgen.com",
    featured: true,
    techStack: ["React", "TypeScript", "Prisma", "PostgreSQL"]
  },
  {
    id: "housing-assist",
    title: "Housing Assistance Platform",
    description: "Built a housing portal to help Indian students and professionals find verified accommodation abroad.",
    link: "https://www.melodymocktail.com",
    featured: true,
    techStack: ["Node.js", "TypeScript", "Express", "MongoDB", "Kafka"]
  },
  {
    id: "edtech-lms",
    title: "Learning Management System (LMS)",
    description: "A custom LMS built from scratch for an EdTech platform focusing on scalability, course management, and real-time reporting.",
    caseStudy: "https://medium.com/@workwithmanojsravan/case-study-building-a-scalable-learning-management-system-lms-from-scratch-6e60ca8222a9",
    featured: false,
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript", "Prisma", "AWS", "Kafka"]
  }
];

