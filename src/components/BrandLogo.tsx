'use client';

import React from 'react';

interface BrandLogoProps {
    className?: string;
    size?: number;
}

export function BrandLogo({ className = '', size = 32 }: BrandLogoProps) {
    const scale = size / 32;
    return (
        <div
            className={`inline-flex items-center ${className}`}
            aria-label="X One"
            role="img"
        >
            <svg
                width={size * 1.5}
                height={size}
                viewBox={`0 0 ${32 * 1.5} 32`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="select-none"
            >
                {/* X Shape constructed with pixels/blocks */}
                <g fill="currentColor">
                    <rect x="2" y="4" width="4" height="4" />
                    <rect x="6" y="8" width="4" height="4" />
                    <rect x="10" y="12" width="4" height="4" />
                    <rect x="6" y="16" width="4" height="4" />
                    <rect x="2" y="20" width="4" height="4" />

                    <rect x="18" y="4" width="4" height="4" />
                    <rect x="14" y="8" width="4" height="4" />
                    <rect x="14" y="16" width="4" height="4" />
                    <rect x="18" y="20" width="4" height="4" />
                </g>

                {/* Superscript 1 Shape */}
                <g fill="currentColor" transform="translate(10, -4)">
                    <rect x="24" y="4" width="4" height="4" />
                    <rect x="24" y="8" width="4" height="4" />
                    <rect x="24" y="12" width="4" height="4" />
                    <rect x="20" y="8" width="4" height="4" />
                </g>
            </svg>
        </div>
    );
}
