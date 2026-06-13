import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });
    
    try {
      // This will be connected to the backend in Todo #5
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will be in touch soon.' });
        setFormData({ name: '', email: '', service: 'Web Design', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-section-padding px-8 bg-background text-on-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-label-caps text-primary uppercase tracking-widest mb-4 block">
                Get in Touch
              </span>
              <h2 className="font-headline text-headline-xl text-on-surface mb-6">
                Let's craft your <span className="text-primary">digital legacy.</span>
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-8">
                We help visionary brands scale through technical SEO precision and bespoke high-end design. Your growth begins with a single conversation.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-headline text-headline-md text-on-surface">Our Studio</h4>
                  <p className="font-body text-body-md text-on-surface-variant">123 Design Ave, Creative District, NY</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-headline text-headline-md text-on-surface">Email Us</h4>
                  <p className="font-body text-body-md text-on-surface-variant">hello@candlelightstudio.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="p-8 rounded-2xl bg-surface-container border border-outline-variant shadow-glow-amber"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant block">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-on-surface-variant block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className="font-label-md text-on-surface-variant block">Service Interested In</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary outline-none transition-all"
                >
                  <option>Web Design</option>
                  <option>AI Automation</option>
                  <option>SEO Strategy</option>
                  <option>Brand Strategy</option>
                </select>
              </div>
              <div className="space-y-2 mb-8">
                <label className="font-label-md text-on-surface-variant block">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:border-primary outline-none transition-all min-h-[150px]"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-body font-bold text-lg hover:bg-secondary transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p className={`mt-4 text-center font-body text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
