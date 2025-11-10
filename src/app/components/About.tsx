'use client';

import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  AcademicCapIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const skills = [
    {
      category: "Backend Development",
      icon: <CpuChipIcon className="w-6 h-6" />,
      technologies: [".NET Core", "C#", "ASP.NET", "Entity Framework", "SQL Server", "PostgreSQL"]
    },
    {
      category: "Frontend Development", 
      icon: <CodeBracketIcon className="w-6 h-6" />,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Cloud & DevOps",
      icon: <CloudIcon className="w-6 h-6" />,
      technologies: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Architecture & Security",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      technologies: ["Microservices", "API Design", "OAuth", "JWT", "Clean Architecture", "DDD"]
    }
  ];

  const highlights = [
    {
      icon: <BoltIcon className="w-8 h-8 text-yellow-500" />,
      title: "Performance-Driven",
      description: "Optimizing financial systems for high-frequency trading and real-time processing"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-blue-500" />,
      title: "Problem Solver",
      description: "Designing scalable solutions for complex business requirements and technical challenges"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-purple-500" />,
      title: "Innovation Focused",
      description: "Leveraging cutting-edge technologies to deliver modern, efficient applications"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-green-500" />,
      title: "Continuous Learning",
      description: "Staying current with latest industry trends and best practices in software development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate Full-Stack .NET Engineer with extensive experience in building enterprise-level 
            financial applications. I specialize in creating robust, scalable systems that handle complex 
            business logic while maintaining high performance and security standards.
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 8 years of experience in software development, I've had the privilege of working 
              on mission-critical financial systems that process millions of transactions daily. My expertise 
              spans the entire development lifecycle, from architectural design to deployment and maintenance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I thrive in collaborative environments where I can mentor junior developers while continuously 
              learning from senior architects. My approach combines clean code principles with pragmatic 
              solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{highlight.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-10">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Focus</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}