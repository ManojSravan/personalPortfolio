import Link from "next/link";
import {
  MonitorSmartphone,
  Server,
  AppWindow,
  UploadCloud,
  BarChart3,
  Boxes,
} from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Modern & Mobile-Friendly Interfaces",
    link: "/projects/responsive-design",
    icon: MonitorSmartphone,
  },
  {
    id: 2,
    title: "Reliable Backend Systems",
    link: "/projects/backend-architecture",
    icon: Server,
  },
  {
    id: 3,
    title: "Apps for Web & Mobile",
    link: "/projects/cross-platform",
    icon: AppWindow,
  },
  {
    id: 4,
    title: "Smooth Deployments & DevOps",
    link: "/projects/devops",
    icon: UploadCloud,
  },
  {
    id: 5,
    title: "Insightful Dashboards",
    link: "/projects/admin-dashboards",
    icon: BarChart3,
  },
  {
    id: 6,
    title: "Scalable Microservice Setup",
    link: "/projects/microservices",
    icon: Boxes,
  },
];

export default function FeaturedSection() {
  return (
    <div className="space-y-8 py-8">
      <div>
        <h1 className="text-2xl font-bold">What I offer</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map(({ id, title, link, icon: Icon }) => (
          <Link
            key={id}
            href={link}
            className="p-6 bg-card rounded-2xl block hover:shadow-md transition duration-200 hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <div className="flex-col  ">
               
              <h2 className="font-medium text-md">{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
