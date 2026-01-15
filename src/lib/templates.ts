import { Template } from './types';

// Demo data for development (will be replaced with Supabase when configured)
export const demoTemplates: Template[] = [
    {
        id: '1',
        slug: 'saas-dashboard-pro',
        title: 'SaaS Dashboard Pro',
        price: 1500000,
        category: 'SaaS',
        stack: ['Next.js', 'Tailwind', 'Supabase', 'Chart.js'],
        demo_url: 'https://demo.example.com/saas-dashboard',
        image_url: '/templates/saas-dashboard.png',
    },
    {
        id: '2',
        slug: 'tokoku-ecommerce',
        title: 'TokoKu E-commerce',
        price: 2000000,
        category: 'E-commerce',
        stack: ['Next.js', 'Tailwind', 'Prisma', 'Stripe'],
        demo_url: 'https://demo.example.com/tokoku',
        image_url: '/templates/ecommerce.png',
    },
    {
        id: '3',
        slug: 'umkm-starter',
        title: 'UMKM Starter Kit',
        price: 500000,
        category: 'UMKM',
        stack: ['Next.js', 'Tailwind', 'WhatsApp API'],
        demo_url: 'https://demo.example.com/umkm',
        image_url: '/templates/umkm.png',
    },
    {
        id: '4',
        slug: 'analytics-suite',
        title: 'Analytics Suite',
        price: 1800000,
        category: 'SaaS',
        stack: ['Next.js', 'Tailwind', 'PostgreSQL', 'Recharts'],
        demo_url: 'https://demo.example.com/analytics',
        image_url: '/templates/analytics.png',
    },
    {
        id: '5',
        slug: 'warung-digital',
        title: 'Warung Digital',
        price: 750000,
        category: 'UMKM',
        stack: ['Next.js', 'Tailwind', 'Firebase'],
        demo_url: 'https://demo.example.com/warung',
        image_url: '/templates/warung.png',
    },
    {
        id: '6',
        slug: 'marketplace-pro',
        title: 'Marketplace Pro',
        price: 3500000,
        category: 'E-commerce',
        stack: ['Next.js', 'Tailwind', 'Supabase', 'Midtrans'],
        demo_url: 'https://demo.example.com/marketplace',
        image_url: '/templates/marketplace.png',
    },
];

export async function getTemplates(): Promise<Template[]> {
    // When Supabase is configured, uncomment below:
    // const { data, error } = await supabase.from('templates').select('*');
    // if (error) throw error;
    // return data;

    // For now, return demo data
    return demoTemplates;
}

export async function getTemplateBySlug(slug: string): Promise<Template | null> {
    // When Supabase is configured:
    // const { data, error } = await supabase.from('templates').select('*').eq('slug', slug).single();
    // if (error) return null;
    // return data;

    return demoTemplates.find(t => t.slug === slug) || null;
}
