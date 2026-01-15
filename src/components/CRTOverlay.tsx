'use client';

import { useEffect, useState } from 'react';

export function CRTOverlay() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="scanlines" />
            <div className="crt-flicker" />
            <div
                className="fixed inset-0 pointer-events-none z-[9999]"
                style={{
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
                }}
            />
        </>
    );
}
