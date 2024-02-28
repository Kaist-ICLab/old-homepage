import publications from "@/data/publications";
import Publication from "@/components/Publication";

import styles from '@/styles/pages/publications.module.css'
import { genPageMetadata } from "@/components/SEO";

export const metadata = genPageMetadata({ title: "Publications" });

const publication_sorted = Object.values(publications).sort((a, b) => b.year - a.year);
const LAST = publication_sorted[0].year
const FIRST = publication_sorted[publication_sorted.length - 1].year
const n_year = LAST - FIRST + 1
const years: number[] = Array.from({ length: n_year }, (_, i) => LAST - i);


const Page: React.FC = () => {

    return (
        <div className={styles.container}>
            <h2>Publications</h2>
            <div className={styles.publication_list}>
                {years.map((year) => {
                    return (
                        <div key={year} className={styles.publication_section}>
                            <h3>{year}</h3>
                            {publication_sorted.filter(elem => elem.year === year).map((elem) =>
                                <Publication key={elem.title} publication={elem} />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Page