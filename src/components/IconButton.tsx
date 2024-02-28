"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import styles from "@/styles/components/IconButton.module.css";
import Link from 'next/link';

type IconType = "email" | "github" | "account-school" | "homepage";

interface IconButtonProps {
    kind: IconType;
    href: string;
}

const IconButton: React.FC<IconButtonProps> = ({ kind, href }) => {
    const [isHovered, setIsHovered] = useState(false)
    const clickListener = (event: any) => {
        if (kind === 'email') {
            event.preventDefault()
            // Copy email to Clipboard
            // Show alert message after copy
            const copyText = async () => {
                try {
                    await navigator.clipboard.writeText(href)
                    const alertMessage = document.createElement('div')
                    alertMessage.className = styles.alert_message
                    alertMessage.textContent = 'Email Copied!'
                    document.body.appendChild(alertMessage)
                    setTimeout(() => {
                        alertMessage.remove()
                    }, 1500)
                } catch (err) {
                    console.error('Failed to copy text: ', err)
                }
            }
            copyText()
        }
    }

    return <div
        className={styles.icon_container}
        onClick={clickListener}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <Link href={href} className={styles.contact_icon}>
            <Icon className={styles.icon} width={24} height={24} icon={`mdi:${kind}`} />
        </Link>
        {isHovered && kind === 'email' ? <span className={styles.hovered_text}>{href}</span> : ''}
    </div>
};

export type { IconType };
export default IconButton;