'use client';

import { useState } from 'react';
import { PixelCard, PixelButton, TemplateModal } from '@/components';
import { demoTemplates } from '@/lib/templates';
import { Template, TemplateCategory } from '@/lib/types';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
            `Halo! Saya tertarik dengan template "${template.title}" seharga ${formatPrice(template.price)}. Bisa info lebih lanjut?`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
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
                        High-quality, production-ready websites and templates designed for scale and performance.
                    </motion.p>
                </div>

                {/* Filter Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PixelCard
                                interactive
                                className="h-full flex flex-col"
                                onClick={() => openModal(template)}
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-surface border-2 border-foreground mb-4 overflow-hidden relative group">
                                    <img
                                        src={template.image_url}
                                        alt={template.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="font-pixel text-xs text-white">
                                            Quick View
                                        </span>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                                        <span className="font-retro text-sm px-2 py-1 bg-surface-2 text-foreground border border-foreground">
                                            {template.category}
                                        </span>
                                        <span className="font-retro text-[10px] px-2 py-0.5 bg-success text-white border border-foreground">
                                            Top Quality
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="font-pixel text-xs text-foreground mb-2">
                                        {template.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {template.stack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-retro text-sm px-2 py-0.5 bg-foreground/10 text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {template.stack.length > 3 && (
                                            <span className="font-retro text-sm px-2 py-0.5 bg-foreground/10 text-foreground">
                                                +{template.stack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <p className="font-pixel text-sm text-primary mb-4">
                                            {formatPrice(template.price)}
                                        </p>

                                        {/* CTAs */}
                                        <div className="flex gap-2">
                                            <a
                                                href={template.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <PixelButton variant="secondary" className="w-full text-[0.625rem] px-2 py-2">
                                                    Demo
                                                </PixelButton>
                                            </a>
                                            <PixelButton
                                                className="flex-1 text-[0.625rem] px-2 py-2"
                                                onClick={(e) => handleWhatsAppOrder(template, e)}
                                            >
                                                Order
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
                        <div className="w-20 h-20 mx-auto mb-6 bg-surface border-2 border-foreground flex items-center justify-center">
                            <span className="text-3xl">📦</span>
                        </div>
                        <p className="font-pixel text-sm text-foreground mb-2">
                            No templates found
                        </p>
                        <p className="font-sans text-base text-muted mb-6">
                            Try a different category
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

            {/* Project Stages Section */}
            <div className="max-w-6xl mx-auto py-24 px-4 border-t-2 border-foreground/10">
                <h2 className="font-pixel text-lg md:text-2xl text-center mb-16">
                    How We <span className="text-primary">Execute</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'Consultation', desc: 'Deep dive into your business needs and goals.' },
                        { step: '02', title: 'Strategy', desc: 'Define technical stack and UI/UX roadmap.' },
                        { step: '03', title: 'Development', desc: 'Rapid build with continuous feedback loops.' },
                        { step: '04', title: 'Deployment', desc: 'Zero-downtime launch and post-launch support.' }
                    ].map((stage, idx) => (
                        <div key={idx} className="relative p-8 bg-surface border-2 border-foreground shadow-pixel-sm">
                            <span className="font-pixel text-primary text-[10px] absolute top-4 right-4">{stage.step}</span>
                            <h4 className="font-pixel text-[12px] mb-4 mt-2">{stage.title}</h4>
                            <p className="font-sans text-sm text-muted leading-relaxed">{stage.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust Section */}
            <div className="bg-foreground text-background py-20 px-4 border-t-2 border-foreground">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-pixel text-lg mb-6 text-primary">Need a custom solution?</h2>
                    <p className="font-sans text-lg mb-10 opacity-80">
                        If our templates don't fit your exact needs, we offer bespoke development services tailored to your specific business requirements.
                    </p>
                    <Link href="/contact">
                        <PixelButton size="lg">
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
