import members from "@/data/members";
import Member from '@/components/Member'
import styles from '@/styles/pages/members.module.css'
import { genPageMetadata } from "@/components/SEO";

export const metadata = genPageMetadata({ title: "Members" });

const Page: React.FC = () => {
    const roles = ["Director", "Post Doctural Researcher", "Ph.D. Student", "M.S. Student", "Alumni"];

    return (
        <div className={styles.container}>
            {/* <PageSEO title={`Members`} description={'Members of Interactive Computing Lab'} /> */}
            <h2>Members</h2>
            <div className={styles.member_list}>
                {roles.map((role) => {
                    return (
                        <div key={role} className={styles.program}>
                            <h3>{role}</h3>
                            <div className={role!=="Alumni"? styles.program_member:''}>
                                {
                                    Object.entries(members)
                                        .filter(([_, member]) => member.role === role)
                                        .sort(([_name1,a],[_name2,b]) => a.name.localeCompare(b.name))
                                        .map(([key, member]) =>
                                            <Member key={key} member={member} />
                                        )
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Page