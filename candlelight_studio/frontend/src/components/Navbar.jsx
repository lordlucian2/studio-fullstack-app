import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-background text-on-surface">
      <div className="flex items-center gap-2">
        <img src="/logo2.png" alt="Candlelight Studio" className="h-8 w-auto" />
        <span className="font-headline text-xl font-bold text-primary">Candlelight Studio</span>
      </div>
      <div className="hidden md:flex gap-8 font-body text-body-md">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#work" className="hover:text-primary transition-colors">Our Work</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-body font-bold hover:bg-secondary transition-colors">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
