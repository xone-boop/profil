import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background mt-auto py-6 border-t-4 border-primary/20">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <BrandLogo size={32} className="text-primary" />
                            <span className="font-pixel text-xl text-background">X One</span>
                        </div>
                        <p className="font-sans text-base text-background/80 leading-relaxed max-w-sm">
                            Building high-performance landing pages, SaaS, and e-commerce solutions.
                            <br />
                            <span className="text-primary mt-2 block font-medium">Crafted for Conversion.</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-pixel text-xs text-primary-light mb-6 uppercase tracking-wider">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit">
                                Home
                            </Link>
                            <Link href="/templates" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit">
                                Works & Templates
                            </Link>
                            <Link href="/contact" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit">
                                Contact & Hire
                            </Link>
                        </nav>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-pixel text-xs text-primary-light mb-6 uppercase tracking-wider">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit flex items-center gap-2"
                                aria-label="GitHub Profile"
                            >
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit flex items-center gap-2"
                                aria-label="LinkedIn Profile"
                            >
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://wa.me/6283831860645"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring w-fit flex items-center gap-2"
                                aria-label="Chat on WhatsApp"
                            >
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-background/10 my-4" />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                    <p className="font-sans text-sm text-background/60">
                        © {currentYear} X One. All rights reserved.
                    </p>
                    <p className="font-retro text-lg text-primary/80">
                        Made with <span className="text-primary">♥</span> and pixels
                    </p>
                </div>
            </div>
        </footer>
    );
}
