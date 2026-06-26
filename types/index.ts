export interface NavLink {
    label: string
    href: string
    sublinks?: NavLink[]
}

export interface HeroSlide {
    id: string
    title: string
    description: string
    image: string
    cta?: {
        text: string
        href: string
    }
}

export interface Quote {
    id: string
    text: string
    author: string
    image?: string
}

export interface Event {
    id: string
    title: string
    date: string
    location: string
    description: string
    image: string
}

export interface NewsItem {
    id: string
    title: string
    excerpt: string
    date: string
    image: string
    slug: string
}

export interface Project {
    id: string
    title: string
    description: string
    category: string
    image: string
    impact: string
}
