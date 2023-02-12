import Layout from "@/components/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";

const Classes = ({ classes }: ClassesProps) => (
  <Layout>
    <main>
      <ul>
        {classes.map((x) => (
          <li key={x.index}>
            <Link href={`classes/${x.index}`}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);

type ClassesProps = {
  classes: Class[];
};

export const getStaticProps: GetStaticProps<ClassesProps> = async () => {
  const { data } = await axios.get<ClassesResponse>(
    "https://www.dnd5eapi.co/api/classes"
  );

  return {
    props: {
      classes: data.results,
    },
  };
};

type ClassesResponse = {
  results: Class[];
};

type Class = {
  index: string;
  name: string;
  url: string;
};

export default Classes;
