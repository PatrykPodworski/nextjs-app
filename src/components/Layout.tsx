import styles from "./layout.module.css";

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.container}>{children}</div>
);

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
