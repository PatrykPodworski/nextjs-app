import Head from "next/head";
import styles from "./layout.module.css";

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
  </div>
);

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
