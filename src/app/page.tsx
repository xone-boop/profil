'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PixelButton, PixelCard, BrandLogo } from '@/components';
import { motion } from 'framer-motion';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  const services = [
    {
      icon: '/icon-design.png',
      title: 'Web & UI Design',
      desc: 'High-conversion layouts. We focus on UX that turns visitors into loyal clients.'
    },
    {
      icon: '/icon-dev.png',
      title: 'Development',
      desc: 'Blazing fast, production-ready code using Next.js 16 and Tailwind CSS v4.'
    },
    {
      icon: '/icon-solutions.png',
      title: 'Ready Solutions',
      desc: 'Premium templates and UI kits to launch your next big idea in record time.'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center px-4 -mt-24 pt-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="z-20 relative order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="font-pixel text-xl md:text-3xl lg:text-4xl text-foreground mb-6 leading-tight"
                variants={itemVariants}
              >
                Premium Web{' '}
                <span className="text-primary block mt-2">Experiences.</span>
              </motion.h1>

              <motion.p
                className="font-sans text-lg md:text-xl text-muted mb-8 max-w-lg leading-relaxed"
                variants={itemVariants}
              >
                Specializing in high-performance landing pages, SaaS, and e-commerce solutions. We build clean, production-ready websites that scale.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
              >
                <Link href="/templates">
                  <PixelButton size="lg">
                    View My Work
                  </PixelButton>
                </Link>
                <Link href="/contact">
                  <PixelButton variant="secondary" size="lg">
                    Order via Fiverr
                  </PixelButton>
                </Link>
              </motion.div>

              {/* Proof Strip */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-foreground bg-surface p-4 shadow-pixel-sm"
                variants={itemVariants}
              >
                <div className="text-center">
                  <p className="font-pixel text-[10px] text-primary mb-1">Fast</p>
                  <p className="font-sans text-xs font-bold text-foreground">Delivery</p>
                </div>
                <div className="text-center border-l-2 border-foreground/10">
                  <p className="font-pixel text-[10px] text-primary mb-1">&lt;24h</p>
                  <p className="font-sans text-xs font-bold text-foreground">Response</p>
                </div>
                <div className="text-center border-l-2 border-foreground/10">
                  <p className="font-pixel text-[10px] text-primary mb-1">Clean</p>
                  <p className="font-sans text-xs font-bold text-foreground">Codebase</p>
                </div>
                <div className="text-center border-l-2 border-foreground/10">
                  <p className="font-pixel text-[10px] text-primary mb-1">Unlimited</p>
                  <p className="font-sans text-xs font-bold text-foreground">Support</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="/hero-illustration.png"
                  alt="Cozy pixel art workspace"
                  fill
                  className="object-contain"
                  style={{ imageRendering: 'pixelated' }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-pixel text-lg md:text-2xl text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <PixelCard className="h-full flex flex-col items-center text-center p-8 md:p-10 border-pixel-thick shadow-pixel">
                  <div className="w-24 h-24 md:w-32 md:h-32 mb-8 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  <h3 className="font-pixel text-base md:text-lg mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-muted">
                    {service.desc}
                  </p>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-muted/5 border-t-2 border-foreground/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-pixel text-lg md:text-2xl mb-8 text-foreground">
                Why Choose <span className="text-primary">X One?</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Conversion First', desc: 'Every pixel is placed with your business goals in mind. We build to sell.' },
                  { title: 'Modern Stack', desc: 'Built with Next.js 16 and Tailwind v4 for ultimate speed and SEO.' },
                  { title: 'Pixel Perfection', desc: 'A unique retro aesthetic that makes your brand unforgettable.' },
                  { title: 'Direct Partner', desc: 'Work directly with the expert. No agencies, just pure high-level execution.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 flex items-center justify-center border border-primary text-primary font-pixel text-xs">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-pixel text-[10px] text-foreground mb-1">{item.title}</h4>
                      <p className="font-sans text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-square bg-surface border-4 border-foreground shadow-pixel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-foreground/10 backdrop-blur-[2px]">
                <div className="w-full h-full border-2 border-primary/30 flex items-center justify-center relative overflow-hidden bg-background/50">
                  <div className="absolute top-0 left-0 w-full h-4 bg-primary/20 border-b border-primary/30 flex items-center px-2">
                    <span className="font-pixel text-[8px] text-primary">system_status: optimized</span>
                  </div>
                  <BrandLogo size={64} className="text-primary animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-light text-white border-t-2 border-foreground relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
            className="font-pixel text-lg md:text-2xl mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            Ready to Start?
          </motion.h2>
          <p className="font-sans text-lg md:text-xl mb-10 opacity-90 max-w-xl mx-auto">
            Check out my template collection or get in touch for custom projects. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/templates">
              <PixelButton className="bg-background text-foreground border-white hover:bg-surface">
                Browse Templates
              </PixelButton>
            </Link>
            <Link href="/contact">
              <PixelButton variant="secondary" className="border-white text-white hover:bg-white/10">
                Contact Me
              </PixelButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
