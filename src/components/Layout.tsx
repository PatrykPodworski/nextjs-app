import Head from "next/head";

const Layout = ({ children }: LayoutProps) => (
  <div className="container mx-auto">
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
