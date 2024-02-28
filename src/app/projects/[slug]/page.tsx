import Image from "next/image";
import Link from "next/link";
import ParticipatedStudent from "@/components/PariticpatedStudent";
import Publication from "@/components/Publication";

import MDX from "@/components/mdx/MDX";
import members from "@/data/members";
import publications from "@/data/publications";
import styles from "@/styles/pages/projectdetails.module.css";
import { getAllMarkDownFiles, getMarkDownFileByPath } from "src/lib/file";
import Icon from "@/components/Icon";
import meta from "@/data/meta";
import { Metadata } from "next";

interface PageProp {
    params: {
        slug: string,
    }
}
interface Post {
    title: string,
    content: string,
    publications: string[],
    participated: string[],
    image: string,
}

export function generateStaticParams() {
    const posts = getAllMarkDownFiles('data/projects')
    return posts
}


// export async function generateMetaData({ params }: PageProp) :Promise<Metadata | undefined> {
//     const post = getMarkDownFileByPath(`data/projects/${params.slug}.md`) as Post;
//     return {
//         title: `${meta.title} Project | ${post.title}`,
//         description: post.title,
//         openGraph: {
//             title: `${meta.title} Project | ${post.title}`,
//             description: post.title,
//             siteName: meta.title,
//             locale: meta.locale,
//             type: 'article',
//             url: './',
//             images: meta.socialBanner
//         },
//         twitter: {
//             title: `${meta.title} Project | ${post.title}`,
//             card: 'summary_large_image',
//             description: post.title,
//             images: meta.socialBanner
//         },
//     }
// }

const Page: React.FC<PageProp> = ({ params }) => {
    const post = getMarkDownFileByPath(`data/projects/${params.slug}.md`) as Post;
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link href={'/projects'} className={styles.prev}>
                    <Icon icon="mdi:chevron-left" width={24} height={24} className={styles.prev} />
                </Link>
                <h2>{post.title}</h2>
                <div className={styles.placeholder}></div>
            </div>
            <div className={styles.image_wrapper}>
                <Image src={post.image} alt="overview image"
                    fill
                    style={{ objectFit: "contain" }}
                />
                {/* <Image src={frontMatter.image} alt="overview image" width={1170} height={585}/> */}
            </div>
            <MDX mdxSource={post.content} />
            <div className={styles.publication_container}>
                <h3>Publications</h3>
                <div className={styles.publication_list}>
                    {post.publications.map((pub_id: string) => (
                        <Publication key={pub_id} publication={publications[pub_id]} />
                    ))}
                </div>
            </div>
            <div className={styles.participates_container}>
                <h3>Participated Students</h3>
                <div className={styles.participates_list}>
                    {post.participated.map((name: string) => (
                        <div key={name} className={styles.participate_wrapper}>
                            <ParticipatedStudent member={members[name]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page;
