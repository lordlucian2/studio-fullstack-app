import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-on-surface px-8 overflow-hidden">
      <div className="absolute inset-0 bg-glow-amber opacity-20 blur-3xl rounded-full w-full h-full max-w-4xl mx-auto" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block">
          Web Design That Illuminates
        </span>
        <h1 className="font-headline text-headline-xl text-on-surface mb-6 leading-tight">
          Crafting Digital <span className="text-primary">Experiences</span> <br />
          That Shine in the Dark
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          We blend artistic vision with technical precision to create websites that don't just exist—they glow. 
          Elevate your brand with a digital presence that captures attention and drives results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-body font-bold text-lg hover:bg-secondary transition-all transform hover:scale-105">
            Start Your Project
          </button>
          <button className="border border-outline text-on-surface px-8 py-4 rounded-full font-body font-bold text-lg hover:bg-surface-container transition-all">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
