import { Metadata } from 'next'
import meta from '@/data/meta'

interface PageSEOProps {
    title: string
    description?: string
    image?: string
    [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
    const agg_title = `${meta.title} | ${title}`
    return {
        metadataBase: new URL("https://ickaist.imgix.net"),
        title:agg_title,
        openGraph: {
            title: agg_title,
            description: description || meta.description,
            url: './',
            siteName: meta.title,
            images: image ? [image] : [meta.socialBanner],
            locale: meta.locale,
            type: 'website',
        },
        twitter: {
            title: agg_title,
            card: 'summary_large_image',
            images: image ? [image] : [meta.socialBanner],
        },
        ...rest,
    }
}