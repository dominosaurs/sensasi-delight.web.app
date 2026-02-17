import type { Metadata } from 'next'

const metadata: Metadata = {
    metadataBase: new URL('https://zain-adam.web.app'),
    authors: [{ name: 'Adam Zain Akbar', url: 'https://zain-adam.web.app' }],
    creator: 'Adam Zain Akbar',
    publisher: 'Adam Zain Akbar',
    keywords: [
        'Adam Zain Akbar',
        'Web Developer',
        'Fullstack Developer',
        'Laravel',
        'PHP',
        'React',
        'Next.js',
        'TypeScript',
        'Portfolio',
    ],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        url: 'https://zain-adam.web.app/',
        siteName: 'Adam Zain Akbar — Professional Web Developer',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'JwDTp6LsHp8VbSbZ7kBhWC5t91gO0h4-rQ26Jvhr-N0',
    },
}

export default metadata
