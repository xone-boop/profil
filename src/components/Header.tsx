'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { PixelButton } from './PixelButton';

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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-foreground bg-background/95 backdrop-blur-sm ${scrolled
                    ? 'py-3 shadow-pixel-sm'
                    : 'py-5 md:py-0 shadow-pixel-sm'
                    }`}
            >
                <div className="container-custom flex items-center justify-between h-full min-h-[72px] md:min-h-[72px]">
                    {/* Logo - Enhanced Visibility */}
                    <Link href="/" className="group flex items-center gap-3 focus-ring select-none" aria-label="X One Home">
                        <BrandLogo size={32} className="text-foreground group-hover:text-primary transition-colors" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`font-sans text-sm font-medium relative hover:text-primary transition-colors focus-ring px-2 py-1 ${pathname === item.href ? 'text-primary' : 'text-foreground'
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
                        </nav>

                        {/* Mini CTA */}
                        <Link href="/contact" tabIndex={-1}>
                            <PixelButton className="text-xs px-4 py-2 min-h-[36px]">
                                Get Quote
                            </PixelButton>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        ref={triggerRef}
                        className="md:hidden border-2 border-foreground bg-surface text-foreground active:bg-primary active:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-ring transition-colors"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        <span className="font-pixel text-xs">{isMenuOpen ? 'X' : '☰'}</span>
                    </motion.button>
                </div>
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

                        {/* Menu Panel - Side Drawer from Right */}
                        <motion.div
                            ref={menuRef}
                            id="mobile-nav"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="mobile-menu-panel md:hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation menu"
                        >
                            <div className="flex flex-col h-full">
                                {/* Close Button Header */}
                                <div className="flex justify-end mb-8">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 border-2 border-foreground bg-primary text-white"
                                        aria-label="Close menu"
                                    >
                                        <span className="font-pixel text-xs">X</span>
                                    </button>
                                </div>

                                <div className="flex flex-col items-center gap-6 flex-1 justify-center">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`font-sans text-2xl font-bold w-full text-center py-2 hover:text-primary transition-colors ${pathname === item.href ? 'text-primary' : 'text-foreground'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                    <div className="w-16 h-1 bg-foreground/10 my-4" />
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full max-w-[200px]"
                                    >
                                        <PixelButton className="w-full justify-center">
                                            Get a Quote
                                        </PixelButton>
                                    </Link>
                                </div>

                                <div className="mt-auto text-center pb-8 opacity-50">
                                    <BrandLogo size={24} className="mx-auto mb-2" />
                                    <p className="text-xs font-pixel">© 2024</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
