import {
    Briefcase,
    Laptop,
    Code,
    Building2,
  } from "lucide-react";
  
  const experiences = [
    {
      role: "Software Developer",
      company: "Self-Employed",
      type: "Full-time",
      duration: "Dec 2023 – Present",
      location: "Remote",
      description: [
        "Started as a Java Developer, later specializing in web development with a strong focus on high-performance applications.",
        "Engineered real-world solutions, optimized workflows, and delivered measurable improvements.",
        "Architecting and developing scalable SaaS solutions that enhance user experiences and streamline operations.",
      ],
      icon: Laptop,
    },
    {
      role: "Software Developer",
      company: "QubicGen",
      type: "Full-time",
      duration: "May 2024 – Jan 2025",
      location: "Hybrid",
      description: [
        "Worked as a Full-Stack Developer using React.js, Node.js, Express.js, PostgreSQL, and Microservices.",
      ],
      icon: Briefcase,
    },
    {
      role: "Software Developer",
      company: "Melody Mocktail",
      type: "Part-time",
      duration: "Jul 2024 – Sep 2024",
      location: "Remote",
      description: [
        "Served as Backend Developer handling Node.js, Express.js, MongoDB, and TypeScript.",
      ],
      icon: Briefcase,
    },
    {
      role: "Full Stack Java Development Trainee",
      company: "JSpiders",
      type: "Internship",
      duration: "May 2023 – Nov 2023",
      location: "Bengaluru, Karnataka",
      description: [
        "Applied OOP, data structures, and algorithms to real-world problems.",
        "Built dynamic web apps using HTML, CSS, JavaScript, and React.",
      ],
      icon: Code,
    },
  ];
  
  export default function TimelineExperience() {
    return (
      <section className="py-12 space-y-10">
        <h2 className="text-2xl font-bold">Experience Timeline</h2>
        <div className="border-l border-gray-300 dark:border-gray-700 space-y-8">
          {experiences.map(({ role, company, type, duration, location, description, icon: Icon }, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full "></div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Icon className="w-5 h-5 " /> {role} @ {company}
                </h3>
                <p className="text-sm text-gray-500">{type} • {duration} • {location}</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  {description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  