// "use client"
import ProjectCard from '@/components/ProjectCard'
import { getAllMarkDownFilesData } from 'src/lib/file'
import styles from '@/styles/pages/projects.module.css'
import { genPageMetadata } from '@/components/SEO'

export const metadata = genPageMetadata({ title: "Projects" });

interface Project {
    slug: string,
    title: string,
    image: string,
    content: string,
    [key: string]: any
}
const Page: React.FC = () => {
    const projects = getAllMarkDownFilesData('data/projects') as Project[];
    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <h3>Ongoing</h3>
            <div className={styles.project_list}>
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Page