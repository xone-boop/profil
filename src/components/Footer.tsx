import Link from 'next/link';
import { BrandLogo } from './BrandLogo';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <BrandLogo size={28} className="text-primary" />
                        </div>
                        <p className="font-sans text-base text-muted leading-relaxed">
                            Premium Web Experiences,<br />
                            Crafted for Maximum Impact.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-pixel text-xs text-primary-light mb-4">Navigation</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring">
                                Home
                            </Link>
                            <Link href="/templates" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring">
                                Templates
                            </Link>
                            <Link href="/contact" className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-pixel text-xs text-primary-light mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring"
                                aria-label="GitHub"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring"
                                aria-label="LinkedIn"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://wa.me/6283831860645"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-base text-background/80 hover:text-primary transition-colors focus-ring"
                                aria-label="WhatsApp"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-background/20 my-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="font-sans text-sm text-background/60">
                        © {currentYear} X One. All rights reserved.
                    </p>
                    <p className="font-retro text-lg text-primary mt-2">
                        Made with ♥ and pixels
                    </p>
                </div>
            </div>
        </footer>
    );
}
