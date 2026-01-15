'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus trap for mobile menu
    useEffect(() => {
        if (!isMenuOpen) return;

        const trigger = triggerRef.current;

        // Focus first item in menu
        const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
            'a, button, [tabindex="0"]'
        );
        setTimeout(() => firstFocusable?.focus(), 100);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                return;
            }

            if (e.key === 'Tab') {
                const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
                    'a, button, [tabindex="0"]'
                );
                if (!focusables?.length) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Scroll lock
        document.body.classList.add('no-scroll');

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('no-scroll');
            trigger?.focus();
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/templates', label: 'Templates' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-3 bg-background/95 backdrop-blur-sm border-b-2 border-foreground shadow-pixel-sm'
                    : 'py-5 bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
                <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2 focus-ring" aria-label="X One Home">
                        <BrandLogo size={32} className="text-foreground group-hover:text-primary transition-colors" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-sans text-base relative hover:text-primary transition-colors focus-ring ${pathname === item.href ? 'text-primary font-medium' : 'text-foreground'
                                    }`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        ref={triggerRef}
                        className="md:hidden border-2 border-foreground bg-primary text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-ring"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        <span className="font-pixel text-xs">{isMenuOpen ? 'X' : '☰'}</span>
                    </motion.button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mobile-menu-backdrop md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            ref={menuRef}
                            id="mobile-nav"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mobile-menu-panel md:hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation menu"
                        >
                            <div className="flex flex-col items-center gap-8 py-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`font-sans text-lg hover:text-primary transition-colors focus-ring ${pathname === item.href ? 'text-primary font-medium' : 'text-foreground'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
