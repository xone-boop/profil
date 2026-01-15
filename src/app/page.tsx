'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PixelButton, PixelCard, BrandLogo } from '@/components';
import { motion } from 'framer-motion';

// Custom SVGs replaced by Pixel Art Images (see services array below)

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/icon-design-pixel.png"
            alt="Web Design Pixel Icon"
            fill
            className="object-contain" // Ensures the pixel art fits nicely
            style={{ imageRendering: 'pixelated' }} // Keeps it crisp
          />
        </div>
      ),
      title: 'Landing Pages that Sell',
      desc: 'High-conversion layouts designed to turn visitors into paying customers. Stop losing leads to bad UX.',
      outputs: ['Conversion-focused', 'Mobile-first design', 'Fast loading (<1s)']
    },
    {
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/icon-dev-pixel.png"
            alt="Development Pixel Icon"
            fill
            className="object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      ),
      title: 'SaaS Frontends',
      desc: 'Scalable, maintainable, and interactive dashboards. Built for complex data and smooth user interactions.',
      outputs: ['Responsive layouts', 'Interactive charts', 'Clean component architecture']
    },
    {
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/icon-shop-pixel.png"
            alt="E-commerce Pixel Icon"
            fill
            className="object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      ),
      title: 'Headless E-commerce',
      desc: 'Custom shopping experiences that are blazing fast and SEO optimized, unlike standard templates.',
      outputs: ['Shopify/Woo integration', 'Optimized cart flow', 'SEO Best Practices']
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ============================================
          Hero Section
          ============================================ */}
      <section className="relative pt-10 pb-12 md:pt-20">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text Content */}
            <motion.div
              className={`
                z-20 relative order-1 lg:order-1 
                bg-[url('/hero-illustration.png')] bg-cover bg-center lg:bg-none 
                px-6 pt-2 pb-8 lg:p-0 rounded-lg lg:rounded-none
                overflow-hidden
                text-center lg:text-left
              `}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Mobile Overlay - Darken background for readability */}
              <div className="absolute inset-0 bg-background/90 lg:hidden z-0" />

              <div className="relative z-10">
                <motion.div variants={itemVariants} className="inline-block mb-4">
                  <span className="font-retro text-sm md:text-base px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm animate-soft-blink">
                    Available for freelance work
                  </span>
                </motion.div>

                <motion.h1
                  className="font-pixel text-xl md:text-3xl lg:text-4xl text-foreground mb-6 leading-tight"
                  variants={itemVariants}
                >
                  Turn Traffic into <span className="text-primary">Revenue</span> with Premium Web Experiences.
                </motion.h1>

                <motion.p
                  className="font-sans text-lg md:text-xl text-muted mb-8 max-w-lg leading-relaxed"
                  variants={itemVariants}
                >
                  Specializing in high-performance landing pages and SaaS frontends.
                  I build clean, production-ready websites that scale and convert.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  variants={itemVariants}
                >
                  <Link href="/templates">
                    <PixelButton size="lg" className="w-full sm:w-auto justify-center">
                      View My Work
                    </PixelButton>
                  </Link>
                  <Link href="/contact">
                    <PixelButton variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                      Discuss Project
                    </PixelButton>
                  </Link>
                </motion.div>

                {/* Proof Strip */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 border-2 border-foreground bg-surface p-6 shadow-pixel-sm"
                  variants={itemVariants}
                >
                  <div className="text-center">
                    <p className="font-pixel text-[10px] text-primary mb-1">Response</p>
                    <p className="font-sans text-xs font-bold text-foreground">≤ 24 Hours</p>
                  </div>
                  <div className="text-center border-l-2 border-foreground/10">
                    <p className="font-pixel text-[10px] text-primary mb-1">Quality</p>
                    <p className="font-sans text-xs font-bold text-foreground">Top-Tier Code</p>
                  </div>
                  <div className="text-center md:border-l-2 border-foreground/10">
                    <p className="font-pixel text-[10px] text-primary mb-1">Support</p>
                    <p className="font-sans text-xs font-bold text-foreground">Post-Launch</p>
                  </div>
                  <div className="text-center border-l-2 border-foreground/10">
                    <p className="font-pixel text-[10px] text-primary mb-1">Delivery</p>
                    <p className="font-sans text-xs font-bold text-foreground">On Time</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image (Desktop Only) */}
            <motion.div
              className="relative order-2 lg:order-2 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
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

      {/* ============================================
          Services Section
          ============================================ */}
      <section className="py-24 relative z-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-pixel text-lg md:text-2xl text-foreground mb-4">
              What I <span className="text-primary">Do Best</span>
            </h2>
            <p className="font-sans text-muted text-lg">
              Focused on the things that matter: Speed, UX, and Conversion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="h-full"
              >
                <PixelCard className="h-full flex flex-col p-8 md:p-10 border-pixel-thick hover:-translate-y-2 transition-transform duration-300">
                  {/* Icon Container - Larger 24x24 (6rem) and centered */}
                  <div className="w-24 h-24 mb-6 relative bg-primary/5 p-4 border-2 border-primary rounded-sm flex items-center justify-center mx-auto">
                    {service.icon}
                  </div>

                  <h3 className="font-pixel text-sm md:text-base mb-4 text-foreground text-center">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-muted mb-6 flex-grow text-center">
                    {service.desc}
                  </p>

                  <ul className="mb-8 space-y-2">
                    {service.outputs.map((output, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-sans">
                        <span className="text-primary font-bold">✓</span> {output}
                      </li>
                    ))}
                  </ul>

                  <Link href="/templates" className="mt-auto block text-center">
                    <span className="font-pixel text-[10px] text-primary border-b-2 border-primary/30 hover:border-primary transition-colors">
                      See Examples &rarr;
                    </span>
                  </Link>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Why Choose & Workflow Section
          ============================================ */}
      <section className="py-24 bg-surface/50 border-t-2 border-foreground/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Col: Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="font-pixel text-lg md:text-2xl mb-8 text-foreground">
                Why Partner with <span className="text-primary">X One?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { title: 'Revenue Focused', desc: 'Every pixel is designed to guide visitors towards the purchase button.' },
                  { title: 'Blazing Fast', desc: 'Sites that load in <1s. Better google rankings, happier customers.' },
                  { title: 'Direct Partnership', desc: 'Work directly with the expert. No agencies, no middlemen, no delays.' },
                  { title: 'Built to Scale', desc: 'A solid foundation that grows with your business, without breaking.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-pixel text-xs shadow-pixel-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-pixel text-xs text-foreground mb-2">{item.title}</h4>
                      <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Col: Workflow Layout */}
            <motion.div
              className="relative p-8 bg-background border-2 border-foreground shadow-pixel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-3 -right-3 bg-primary text-white font-pixel text-[10px] px-2 py-1 border-2 border-foreground">
                MY WORKFLOW
              </div>
              <div className="space-y-6">
                {[
                  { step: '01', name: 'Briefing', detail: 'Understanding your goals & scope.' },
                  { step: '02', name: 'Design', detail: 'Wireframes & High-fidelity UI.' },
                  { step: '03', name: 'Develop', detail: 'Clean code implementation.' },
                  { step: '04', name: 'Launch', detail: 'Deployment & Optimization.' },
                ].map((wf, i) => (
                  <div key={i} className="flex items-center gap-4 relative">
                    {/* Connector Line */}
                    {i !== 3 && (
                      <div className="absolute left-[15px] top-10 bottom-[-24px] w-0.5 bg-foreground/20" />
                    )}
                    <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center bg-surface z-10 font-bold font-retro text-sm">
                      {wf.step}
                    </div>
                    <div>
                      <h5 className="font-pixel text-[10px] text-foreground">{wf.name}</h5>
                      <p className="font-sans text-xs text-muted">{wf.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          Service Guarantees (Replacing Real Results)
          ============================================ */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-pixel text-lg md:text-2xl mb-4">My Service <span className="text-primary">Guarantees</span></h2>
            <p className="font-sans text-muted">What you can expect from every project.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guarantee 1 */}
            <PixelCard className="p-8 border-l-8 border-l-primary hover:-translate-y-1 transition-transform">
              <h3 className="font-pixel text-sm mb-4">Maximum Performance</h3>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex gap-4">
                  <span className="text-muted w-20 flex-shrink-0">The Goal</span>
                  <span className="text-foreground">Instant load times to keep users engaged.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted w-20 flex-shrink-0">My Standard</span>
                  <span className="text-foreground">All sites are optimized for 95+ PageSpeed scores.</span>
                </div>
                <div className="flex gap-4 bg-primary/10 p-3 -mx-2 -my-1 rounded-sm border border-primary/20">
                  <span className="text-primary font-bold w-20 flex-shrink-0">Promise</span>
                  <span className="text-foreground font-medium">Under 1.5s Load Time</span>
                </div>
              </div>
            </PixelCard>

            {/* Guarantee 2 */}
            <PixelCard className="p-8 border-l-8 border-l-blue-500 hover:-translate-y-1 transition-transform">
              <h3 className="font-pixel text-sm mb-4 text-blue-600">Technical Excellence</h3>
              <div className="space-y-4 font-sans text-sm">
                <div className="flex gap-4">
                  <span className="text-muted w-20 flex-shrink-0">The Goal</span>
                  <span className="text-foreground">A bug-free experience on every device.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted w-20 flex-shrink-0">My Standard</span>
                  <span className="text-foreground">Rigorous testing on mobile, tablet, and desktop.</span>
                </div>
                <div className="flex gap-4 bg-blue-50 p-3 -mx-2 -my-1 rounded-sm border border-blue-100">
                  <span className="text-blue-600 font-bold w-20 flex-shrink-0">Promise</span>
                  <span className="text-foreground font-medium">30 Days Bug-Free Warranty</span>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* ============================================
          Testimonials Section (Visual)
          ============================================ */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center text-primary text-2xl gap-2 filter drop-shadow-md">
              ★★★★★
            </div>
            <blockquote className="font-sans text-xl md:text-2xl text-background leading-relaxed italic mb-8">
              "Exceptional attention to detail. X One didn't just build a website, they built a conversion engine for our agency. The communication was flawless."
            </blockquote>
            <div className="text-center">
              <p className="font-pixel text-sm text-primary mb-1">Alex R.</p>
              <p className="font-sans text-sm text-background/60">Founder, Digital Flow Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          Final CTA Section
          ============================================ */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary to-primary-light text-white border-t-4 border-foreground relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <h2 className="font-pixel text-xl md:text-3xl mb-6 drop-shadow-md">
              Ready to Upgrade Your Online Presence?
            </h2>
            <p className="font-sans text-lg md:text-xl mb-10 opacity-90 max-w-xl mx-auto">
              I only take a limited number of projects per month to ensure quality. Let's secure your spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates">
                <PixelButton className="bg-background text-foreground border-white hover:bg-surface min-w-[200px] justify-center">
                  Browse Solutions
                </PixelButton>
              </Link>
              <Link href="/contact">
                <PixelButton variant="secondary" className="border-white text-white hover:bg-white/10 min-w-[200px] justify-center">
                  Get a Free Quote
                </PixelButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
