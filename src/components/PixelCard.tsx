'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PixelCardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'secondary';
    interactive?: boolean;
    className?: string;
    onClick?: () => void;
}

export function PixelCard({
    children,
    className,
    variant = 'default',
    interactive = false,
    onClick,
    ...props
}: PixelCardProps) {
    const baseStyles = "pixel-card";

    const variantStyles = {
        default: "",
        primary: "border-primary",
        secondary: "border-muted",
    };

    // Determine if card should be interactive
    const isInteractive = interactive || !!onClick;

    return (
        <motion.div
            whileHover={isInteractive ? {
                y: -2,
                x: -2,
            } : undefined}
            whileTap={isInteractive ? {
                y: 1,
                x: 1,
            } : undefined}
            className={twMerge(clsx(
                baseStyles,
                variantStyles[variant],
                isInteractive && 'pixel-card-interactive',
                className
            ))}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            } : undefined}
            {...props}
        >
            {children}
        </motion.div>
    );
}
