'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function PixelButton({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: PixelButtonProps) {
    const baseClass = 'pixel-btn';

    const variantClasses = {
        primary: '',
        secondary: 'pixel-btn-secondary',
        ghost: 'pixel-btn-ghost',
    };

    const sizeClasses = {
        sm: 'text-[0.625rem] px-3 py-2',
        md: '',
        lg: 'text-sm px-8 py-4',
    };

    return (
        <button
            className={twMerge(clsx(
                baseClass,
                variantClasses[variant],
                sizeClasses[size],
                className
            ))}
            {...props}
        >
            {children}
        </button>
    );
}
