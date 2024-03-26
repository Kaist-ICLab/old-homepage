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
                            <div className={role !== "Alumni" ? styles.program_member : ''}>
                                {
                                    Object.entries(members)
                                        .filter(([_, member]) => member.role === role)
                                        .sort(([_name1, a], [_name2, b]) => {
                                            const last1 = a.name.split(" ")[1];
                                            const last2 = b.name.split(" ")[1];
                                            let enter1 = ""
                                            let enter2 = ""
                                            if (role !== "Alumni") {
                                                enter1 = a.histories[role].split(" ")[0];
                                                enter2 = b.histories[role].split(" ")[0];
                                            } else {//Alumni we will use graduate year for sorting
                                                enter1 = Object.entries(a.histories).map(
                                                    ([_, period]) => period.split(" ")[2])
                                                    .sort((a, b) => a.localeCompare(b))[0];
                                                enter2 = Object.entries(b.histories).map(
                                                    ([_, period]) => period.split(" ")[2])[0];
                                            }
                                            if (enter1 === enter2) {
                                                return last1.localeCompare(last2)
                                            } else {
                                                if(role === "Alumni"){
                                                    return enter2.localeCompare(enter1)
                                                }else{
                                                    return enter1.localeCompare(enter2)
                                                }
                                            }
                                        })
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