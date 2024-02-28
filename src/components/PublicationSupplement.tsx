import Link from 'next/link'

import Code from '@/data/icons/github.svg'
import Video from '@/data/icons/youtube.svg'
import Slide from '@/data/icons/slide.svg'
import Pdf from '@/data/icons/pdf.svg'
import Syllabus from '@/data/icons/syllabus.svg'

import styles from '@/styles/components/Supplement.module.css'
import React from 'react'

const icons: { [key: string]: [any, string, string] } = {
    pdf: [Pdf, 'rgba(220, 53, 69, 0.9)', 'PDF'],
    code: [Code, 'rgba(0, 0, 0, 0.9)', 'Code'],
    slide: [Slide, 'rgba(244, 180, 0, 0.85)', 'Slide'],
    video: [Video, 'rgba(255, 0, 0, 0.8)', 'Video'],
    syllabus: [Syllabus, 'rgba(66, 133, 244, 1)', 'Syllabus'],
}
interface SupplementProp {
    kind: string;
    href: string;
}

const Supplement: React.FC<SupplementProp> = ({ kind, href }) => {
    const SVG = icons[kind][0]
    return (
        <Link href={href} className={styles.supplements} style={{ background: icons[kind][1] }}>
            <SVG />
            <div className={styles.desc}>{icons[kind][2]}</div>
        </Link>
    )
}

export default Supplement;