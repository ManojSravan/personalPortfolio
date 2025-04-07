'use client';

import { Code, Server, ActivitySquare, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive and modern UIs using React, Next.js, and Tailwind CSS.',
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: 'Backend Development',
    description:
      'Creating scalable APIs using Node.js, Express, NestJS, PostgreSQL, and MongoDB.',
    icon: <Server className="w-5 h-5" />,
  },
  {
    title: 'API Testing & Integration',
    description:
      'Automated testing, API documentation, and seamless integration using Postman and Swagger.',
    icon: <ActivitySquare className="w-5 h-5" />,
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Dockerized deployments, server setups, CI/CD pipelines, and Memcached-based caching.',
    icon: <Cloud className="w-5 h-5" />,
  },
];

export default function ServiceSection() {
  return (
    <section className="space-y-4 mb-6"> {/* Adjusted bottom spacing */}
      <div>
        <h2 className="text-2xl font-semibold">Services I Offer</h2>
      </div>
      <div className="grid gap-3"> {/* Slightly reduced card spacing */}
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-card dark:hover:bg-gray-900 cursor-pointer hover:bg-gray-100 transition-colors cursor-default"
          >
            <div className="flex items-start gap-4">
              <div className="text-muted-foreground">{service.icon}</div>
              <div>
                <h3 className="font-medium">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

