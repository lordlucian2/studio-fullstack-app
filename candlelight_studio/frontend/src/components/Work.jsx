import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Lumina Noir',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1497215728101-8c9864060f6f?auto=format&fit=crop&w=800&q=80',
    description: 'A high-end luxury portfolio for a minimalist architecture firm.',
    span: 'col-span-6 md:col-span-8'
  },
  {
    id: 2,
    title: 'Aetheria AI',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1677442132115-f46a2603333d?auto=format&fit=crop&w=800&q=80',
    description: 'Intelligent dashboard for managing neural network training.',
    span: 'col-span-6 md:col-span-4'
  },
  {
    id: 3,
    title: 'Velvet & Vine',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1523275335946-86c7f675502b?auto=format&fit=crop&w=800&q=80',
    description: 'Sophisticated online boutique for artisanal wines.',
    span: 'col-span-6 md:col-span-4'
  },
  {
    id: 4,
    title: 'Solis Digital',
    category: 'SEO Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afafb873L- la-0.1?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive visibility overhaul for a global tech consultancy.',
    span: 'col-span-6 md:col-span-8'
  }
];

const categories = ['All', 'Web Design', 'AI Automation', 'E-Commerce', 'SEO Strategy'];

const Work = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-section-padding px-8 bg-background text-on-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block">
            Our Portfolio
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface mb-6">
            Selected <span className="text-primary">Works</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-label-md px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-primary text-on-primary' 
                  : 'text-on-surface-variant hover:text-primary border border-outline-variant'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`project-card group relative overflow-hidden rounded-xl bg-surface-container ${project.span}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-label-caps text-primary text-xs uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-headline text-headline-md text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
