import type { Metadata } from 'next'
import type Params from '../../@types/params'
import type { Locale } from '../../@types/locale'
import DICTIONARIES from '@/constants/dictionaries'

interface Props {
    params: Promise<Params>
}

const SITE_URL = 'https://zain-adam.web.app'

export default async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { lang = ['en'] } = await params
    const locale = lang[0] as Locale

    const PAGE_TITLE = `Adam "Zain" Akbar — ${DICTIONARIES.roleTitle2[locale]}`

    return {
        title: PAGE_TITLE,
        description: DICTIONARIES.roleTitle2[locale],
        alternates: {
            canonical: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
            languages: {
                en: `${SITE_URL}`,
                ja: `${SITE_URL}/ja`,
            },
        },
        openGraph: {
            title: PAGE_TITLE,
            description: DICTIONARIES.roleTitle2[locale],
            locale: locale === 'ja' ? 'ja_JP' : 'en_US',
            url: locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`,
        },
        twitter: {
            title: PAGE_TITLE,
            description: DICTIONARIES.roleTitle2[locale],
        },
    }
}
