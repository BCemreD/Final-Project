import React, { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import CardLink from "@/components/CardLink";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            <ConnectWallet theme={"dark"} modalSize={"wide"} />
            <div className={styles.grid}>
                <CardLink
                    href="/profile"
                    title="Profile"
                    description="See Personal Information"
                />
                <CardLink
                    href="/info"
                    title="Contract Info"
                    description="See details about the contracts"
                />
                <CardLink
                    href="/job"
                    title="Jobs"
                    description="Submit jobs"
                />
                <CardLink
                    href="/"
                    title="Submitted Jobs"
                    description="See all valid Listings"
                />
            </div>

            <div className={styles.center}>
                <div>{children}</div>
            </div>
        </main>
    );
};

export default Layout;
