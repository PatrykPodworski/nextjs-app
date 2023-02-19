import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <main>
      <h1>Home page</h1>
      <Image src="/images/field.jpg" alt="field" width={800} height={450} />
      <Link href="/posts/1">Go to the first post</Link>
    </main>
  </Layout>
);

export default Home;
