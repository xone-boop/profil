export interface Template {
    id: string;
    slug: string;
    title: string;
    price: number;
    category: string;
    stack: string[];
    demo_url: string;
    image_url: string;
}

export type TemplateCategory = 'All' | 'SaaS' | 'E-commerce' | 'UMKM';
