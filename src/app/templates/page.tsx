'use client';

import { useState } from 'react';
import { PixelCard, PixelButton, TemplateModal } from '@/components';
import { demoTemplates } from '@/lib/templates';
import { Template, TemplateCategory } from '@/lib/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const categories: TemplateCategory[] = ['All', 'SaaS', 'E-commerce', 'UMKM'];

export default function TemplatesPage() {
    const [activeCategory, setActiveCategory] = useState<TemplateCategory>('All');
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredTemplates = activeCategory === 'All'
        ? demoTemplates
        : demoTemplates.filter(t => t.category === activeCategory);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const openModal = (template: Template) => {
        setSelectedTemplate(template);
        setIsModalOpen(true);
    };

    const handleWhatsAppOrder = (template: Template, e: React.MouseEvent) => {
        e.stopPropagation();
        const whatsappNumber = '6283831860645';
        const message = encodeURIComponent(
            `Halo! Saya ingin membeli template "${template.title}" seharga ${formatPrice(template.price)}. Bisa dibantu?`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        className="font-pixel text-lg md:text-2xl text-foreground mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Premium <span className="text-primary">Works</span> & Templates
                    </motion.h1>
                    <motion.p
                        className="font-sans text-lg text-muted max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Production-ready code. Optimized for speed, SEO, and conversion.
                        <br />
                        <span className="text-sm">Save 100+ hours of development time.</span>
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`filter-chip ${activeCategory === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PixelCard
                                interactive
                                className="h-full flex flex-col p-0 overflow-hidden group"
                                onClick={() => openModal(template)}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-surface relative overflow-hidden border-b-2 border-foreground">
                                    <img
                                        src={template.image_url}
                                        alt={template.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                        <span className="font-pixel text-xs text-white uppercase tracking-wider">
                                            Click to Preview
                                        </span>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="font-pixel text-[10px] px-2 py-1 bg-surface-2 text-foreground border border-foreground shadow-sm">
                                            {template.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-pixel text-xs md:text-sm text-foreground leading-snug">
                                            {template.title}
                                        </h3>
                                        <div className="flex gap-1">
                                            {template.stack.slice(0, 2).map((tech) => (
                                                <div key={tech} className="w-2 h-2 rounded-full bg-primary/50" title={tech} />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features / Highlights */}
                                    <div className="space-y-2 mb-6 mt-2">
                                        <p className="font-sans text-xs text-muted flex items-center gap-2">
                                            <span className="text-primary font-bold">✓</span> Full Source Code
                                        </p>
                                        <p className="font-sans text-xs text-muted flex items-center gap-2">
                                            <span className="text-primary font-bold">✓</span> Responsive Design
                                        </p>
                                        <p className="font-sans text-xs text-muted flex items-center gap-2">
                                            <span className="text-primary font-bold">✓</span> Setup Guide
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-foreground/10">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-sans text-xs text-muted">Price</span>
                                            <p className="font-pixel text-sm text-primary">
                                                {formatPrice(template.price)}
                                            </p>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex gap-3">
                                            <PixelButton variant="secondary" className="flex-1 justify-center text-[10px] py-2 h-10">
                                                Preview
                                            </PixelButton>
                                            <PixelButton
                                                className="flex-1 justify-center text-[10px] py-2 h-10"
                                                onClick={(e) => handleWhatsAppOrder(template, e)}
                                            >
                                                Order Now
                                            </PixelButton>
                                        </div>
                                    </div>
                                </div>
                            </PixelCard>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredTemplates.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="w-24 h-24 mx-auto mb-6 bg-surface border-2 border-foreground flex items-center justify-center rounded-full">
                            <span className="text-4xl">🔍</span>
                        </div>
                        <p className="font-pixel text-sm text-foreground mb-2">
                            No templates found
                        </p>
                        <p className="font-sans text-base text-muted mb-6">
                            We are adding more templates soon!
                        </p>
                        <PixelButton
                            variant="secondary"
                            onClick={() => setActiveCategory('All')}
                        >
                            View All Templates
                        </PixelButton>
                    </motion.div>
                )}
            </div>

            {/* What's Included Section */}
            <div className="bg-surface/30 border-y-2 border-foreground/10 py-20 mt-20">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-pixel text-lg md:text-xl text-foreground">
                            Every Template <span className="text-primary">Includes</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 18L22 12L16 6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 6L2 12L8 18" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: 'Source Code',
                                desc: 'Clean, modular Next.js code.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: 'Responsive',
                                desc: 'Mobile-first layout.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: 'SEO Ready',
                                desc: 'Optimized for search engines.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8 mx-auto mb-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 2v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ),
                                title: 'Support',
                                desc: '30 days technical help.'
                            },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-4 bg-background border border-foreground/20 rounded-sm">
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h4 className="font-bold font-sans text-sm text-foreground">{item.title}</h4>
                                <p className="font-sans text-xs text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Stages Section / Workflow */}
            <div className="container-custom py-24">
                <h2 className="font-pixel text-lg md:text-2xl text-center mb-16">
                    How We <span className="text-primary">Execute</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'Pick & Consult', desc: 'Choose a template or request custom work.' },
                        { step: '02', title: 'Customize', desc: 'We tailor branding and content to you.' },
                        { step: '03', title: 'Review', desc: 'Check the live preview and give feedback.' },
                        { step: '04', title: 'Launch', desc: 'We deploy to your domain hosting.' }
                    ].map((stage, idx) => (
                        <div key={idx} className="relative p-6 bg-surface border-2 border-foreground shadow-pixel-sm hover:-translate-y-1 transition-transform">
                            <span className="font-pixel text-primary text-[10px] absolute top-4 right-4 bg-primary/10 px-2 py-1 rounded-sm">
                                STEP {stage.step}
                            </span>
                            <div className="w-10 h-10 border-2 border-foreground bg-background mb-4 flex items-center justify-center">
                                <span className="font-retro font-bold text-lg">{stage.step}</span>
                            </div>
                            <h4 className="font-pixel text-[12px] mb-3 mt-2">{stage.title}</h4>
                            <p className="font-sans text-sm text-muted leading-relaxed">{stage.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Section */}
            <div className="bg-foreground text-background py-20 px-4 mt-12 rounded-sm border border-foreground shadow-pixel">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-pixel text-lg mb-6 text-primary">Need a custom solution?</h2>
                    <p className="font-sans text-lg mb-10 opacity-80">
                        If our templates don't fit your exact needs, I offer bespoke development services tailored to your specific business requirements.
                    </p>
                    <Link href="/contact">
                        <PixelButton size="lg" className="border-primary">
                            Get a Custom Quote
                        </PixelButton>
                    </Link>
                </div>
            </div>

            {/* Template Modal */}
            <TemplateModal
                template={selectedTemplate}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
