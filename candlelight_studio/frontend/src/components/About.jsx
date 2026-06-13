import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-section-padding px-8 bg-background text-on-surface overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <span className="font-label-caps text-primary uppercase tracking-widest mb-6 block">
            Our Mission
          </span>
          <h2 className="font-headline text-headline-xl text-on-surface mb-12 leading-tight">
            Illuminating the digital path for <span className="italic text-primary">premium brands</span> through craft and calculation.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                Candlelight Studio is a boutique digital agency where artistic intuition meets technical rigor. We specialize in creating high-conversion, visually stunning websites that serve as a beacon for your brand in a crowded digital landscape.
              </p>
              <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                Our approach is rooted in the belief that a website should be more than just a digital brochure—it should be an experience. By combining cutting-edge AI automation with timeless design principles, we ensure your brand doesn't just compete, but leads.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-headline-md text-on-surface">AI-Driven Precision</h4>
                    <p className="font-body text-body-md text-on-surface-variant">Optimizing every pixel for maximum impact.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant group">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d20a5?auto=format&fit=crop&w=800&q=80" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
