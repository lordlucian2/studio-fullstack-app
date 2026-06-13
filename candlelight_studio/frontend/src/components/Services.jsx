import React from 'react';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Bespoke digital experiences tailored to your brand identity, focusing on conversion and aesthetics.',
    icon: 'palette',
    color: 'bg-primary'
  },
  {
    title: 'AI Automation',
    description: 'Integrating intelligent workflows to streamline your business operations and enhance user engagement.',
    icon: 'smart_toy',
    color: 'bg-secondary'
  },
  {
    title: 'SEO Visibility',
    description: 'Strategic optimization to ensure your brand is found by the right audience at the right time.',
    icon: 'search',
    color: 'bg-tertiary'
  },
  {
    title: 'Brand Strategy',
    description: 'Defining your digital voice and visual language to create a lasting impression in the market.',
    icon: 'lightbulb',
    color: 'bg-primary-container'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-section-padding px-8 bg-background text-on-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface mb-6">
            Services That <span className="text-primary">Illuminate</span> Your Brand
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            We don't just build websites; we create digital ecosystems that drive growth and deliver exceptional user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bento-card p-8 rounded-xl border border-outline-variant hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-on-primary">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface mb-4">
                {service.title}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
