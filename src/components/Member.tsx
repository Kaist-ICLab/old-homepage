"use client"
import Image from 'next/image'

import {Icon} from "@iconify/react";
import IconButton from "@/components/IconButton";
import { Member } from '@/data/members';
import { IconType } from './IconButton';
import React from 'react';
import styles from '@/styles/components/Member.module.css'


type MemberProps = {
    member: Member
};

const Member: React.FC<MemberProps> = ({ member }) => {
    return (<>
        {
            member.role !== "Alumni" ?
                <CurrentMember member={member} /> :
                <Alumni member={member} />
        }
    </>);
};

const CurrentMember: React.FC<MemberProps> = ({ member }) => {
    const image = "/assets/members/" + member.name.split(" ").join("") + ".jpg";
    return (
        <div className={styles.member}>
            <div className={styles.image_n_contact}>
                <div className={styles.image_wrapper}>
                    <Image
                        src={image}
                        alt={member.name}
                        width={180}
                        height={200}
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className={styles.contacts}>
                    {[["home", member.homepage], ["github", member.github],
                    ["account-school", member.google_scholar], ["email", member.email]].filter(([kind,href])=> href !== undefined).map(([kind, href]) =>
                        <div key={kind}>{href?<IconButton key={kind} kind={kind as IconType} href={href as string} />: null}</div>
                    )}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.position}>{member.role}</div>
                {member.research_interests && member.research_interests.length !== 0 ? (
                    <div className={styles.research_interests}>
                        <div className={styles.ri_title}>Research Interest</div>
                        <ul className={styles.ri_list}>
                            {member.research_interests.map((item) => (
                                <li key={item} className={styles.ri_elem}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

const Alumni: React.FC<MemberProps> = ({ member }) => {
    return <div className={styles.alumni_container}>
        <div className={styles.alumni_header}>
            <div className={styles.email}>
                <Icon icon="mdi:email" />
            </div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.current_affiliation}>{member.current_affiliation ? member.current_affiliation : ""}</div>
        </div>
        <div className={styles.histories}>
            {Object.entries(member.histories).map(([key, history]) =>
                <div key={key}>{`${key}: ${history}`}</div>
            )}
        </div>
    </div>
}

export default Member