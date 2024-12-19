import React from 'react';

export const AboutMission = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-text-muted mb-6">
              To empower businesses of all sizes with intelligent automation solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent-neon mb-2">50K+</div>
                <div className="text-sm text-text-muted">Businesses Empowered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-neon mb-2">120+</div>
                <div className="text-sm text-text-muted">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};