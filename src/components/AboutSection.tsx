'use client';

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <AnimatedSection>
          <h2 className="heading-lg text-center mb-16">
            <span className="text-primary">ABOUT</span> THE BRAND
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2} direction="left">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image 
                src="/images/about-brand.jpg" 
                alt="Our Brand Story"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.4} direction="right">
              <h3 className="heading-md mb-6">Our Story</h3>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2022, our brand was born from the vibrant nightlife and fashion scene. We blend cutting-edge design with the energy of the party culture.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6} direction="right">
              <h3 className="heading-md mb-6">Our Vision</h3>
              <p className="text-lg text-gray-300 mb-6">
                We aim to create clothing that transcends typical fashion boundaries, creating pieces that express individuality while maintaining quality and sustainability.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8} direction="right">
              <h3 className="heading-md mb-6">Our Style</h3>
              <p className="text-lg text-gray-300">
                Bold, experimental, and always forward-thinking. Our designs capture the essence of contemporary culture with a distinctive edge.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
