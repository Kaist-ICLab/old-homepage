"use client"
import Footer from "./Footer";
import Header from "./Header";
import styles from "@/styles/components/layout/PageLayout.module.css";

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>{children}</main>
            <Footer/>
        </div>
    );
};

export default PageLayout;