'use client';

import { useState } from 'react';
import { PixelButton, PixelCard } from '@/components';
import { motion } from 'framer-motion';

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Format message for WhatsApp
        const whatsappNumber = '6283831860645';
        const message = encodeURIComponent(
            `Halo! Saya ${formData.name}.\n\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
        );

        // Open WhatsApp
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            label: 'WhatsApp',
            value: '+62 838-3186-0645',
            href: 'https://wa.me/6283831860645'
        },
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            label: 'Email',
            value: 'bgmn973@gmail.com',
            href: 'mailto:bgmn973@gmail.com'
        },
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
            ),
            label: 'Location',
            value: 'Indonesia (Remote)',
            href: null
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="font-pixel text-lg md:text-2xl text-foreground mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        className="font-sans text-lg text-muted max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Ready to scale your business? Let's discuss your project and build something incredible together.
                    </motion.p>
                </div>

                {/* How I Work Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {[
                        { step: '01', title: 'The Brief', desc: 'We discuss your goals, target audience, and requirements.' },
                        { step: '02', title: 'The Build', desc: 'I design and develop your site with regular updates.' },
                        { step: '03', title: 'The Launch', desc: 'Pixel-perfect delivery ready to go live and convert.' }
                    ].map((item, idx) => (
                        <PixelCard key={idx} className="text-center p-6 border-primary/30">
                            <span className="font-pixel text-primary text-xs block mb-3">{item.step}</span>
                            <h3 className="font-pixel text-[10px] mb-2">{item.title}</h3>
                            <p className="font-sans text-sm text-muted">{item.desc}</p>
                        </PixelCard>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Form - 3/5 width on desktop */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <PixelCard className="p-6 md:p-8">
                            <h2 className="font-pixel text-xs mb-6 text-primary">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block font-sans text-sm font-medium mb-2 text-foreground">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`pixel-input ${errors.name ? 'error' : ''}`}
                                        placeholder="Your name..."
                                    />
                                    {errors.name && (
                                        <p className="error-message">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-sans text-sm font-medium mb-2 text-foreground">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`pixel-input ${errors.email ? 'error' : ''}`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="error-message">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-sans text-sm font-medium mb-2 text-foreground">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`pixel-input resize-none ${errors.message ? 'error' : ''}`}
                                        placeholder="Tell me about your project..."
                                    />
                                    {errors.message && (
                                        <p className="error-message">{errors.message}</p>
                                    )}
                                </div>

                                <PixelButton
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                                </PixelButton>
                            </form>
                        </PixelCard>
                    </motion.div>

                    {/* Contact Info - 2/5 width on desktop */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <PixelCard className="p-6">
                            <h2 className="font-pixel text-xs mb-5 text-primary">Quick Contact</h2>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary flex items-center justify-center border-2 border-foreground flex-shrink-0 text-white">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-sans text-sm font-medium text-foreground mb-0.5">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-sans text-base text-muted hover:text-primary transition-colors focus-ring"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="font-sans text-base text-muted">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PixelCard>

                        <PixelCard className="p-6 bg-surface">
                            <h2 className="font-pixel text-xs mb-4 text-primary">Freelance Profiles</h2>
                            <div className="space-y-3">
                                <a
                                    href="https://fiverr.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 border-2 border-foreground bg-background hover:bg-surface-2 transition-colors"
                                >
                                    <span className="font-pixel text-[10px]">Fiverr</span>
                                    <span className="font-sans text-xs text-muted">/x-one-dev</span>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 border-2 border-foreground bg-background hover:bg-surface-2 transition-colors"
                                >
                                    <span className="font-pixel text-[10px]">LinkedIn</span>
                                    <span className="font-sans text-xs text-muted">/in/x-one</span>
                                </a>
                                <p className="font-sans text-[10px] text-muted mt-4">
                                    Response time: &lt; 24 hours
                                </p>
                            </div>
                        </PixelCard>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 pt-12 border-t-2 border-foreground/10">
                    <h2 className="font-pixel text-lg md:text-2xl text-center mb-12">
                        Common <span className="text-primary">Questions</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { q: 'How long does a landing page take?', a: 'Typically 3-5 days for a high-converting landing page from brief to launch.' },
                            { q: 'Do you provide revisions?', a: 'Yes, we provide unlimited minor revisions until you are 100% satisfied.' },
                            { q: 'Can you work with my existing brand?', a: 'Absolutely. We can adapt our pixel aesthetic to match your current branding.' },
                            { q: 'Do you offer maintenance?', a: 'Yes, we offer monthly maintenance packages for updates and security.' }
                        ].map((faq, idx) => (
                            <PixelCard key={idx} className="p-6">
                                <h4 className="font-pixel text-[10px] text-primary mb-3">{faq.q}</h4>
                                <p className="font-sans text-sm text-muted leading-relaxed">{faq.a}</p>
                            </PixelCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
