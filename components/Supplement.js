import { Link } from './MDXComponents'

import Code from '@/data/Icons/github.svg'
import Video from '@/data/Icons/youtube.svg'
import Slide from '@/data/Icons/slide.svg'
import Pdf from '@/data/Icons/pdf.svg'
import Syllabus from '@/data/Icons/syllabus.svg'

import styles from '@/css/components/Supplement.module.css'

const icons = {
  pdf: [Pdf, 'rgba(220, 53, 69, 0.9)', 'Pdf'],
  code: [Code, 'rgba(0, 0, 0, 0.9)', 'Code'],
  slide: [Slide, 'rgba(244, 180, 0, 0.85)', 'Slide'],
  video: [Video, 'rgba(255, 0, 0, 0.8)', 'Video'],
  syllabus: [Syllabus, 'rgba(66, 133, 244, 1)', 'Syllabus'],
}

export default function Supplement({ kind, href }) {
  const SVG = icons[kind][0]
  return (
    <Link href={href} className={styles.supplements} style={{ background: icons[kind][1] }}>
      <SVG />
      <div className={styles.desc}>{icons[kind][2]}</div>
    </Link>
  )
}
