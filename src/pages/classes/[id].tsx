import Layout from "@/components/Layout";
import axios from "axios";
import { GetServerSideProps } from "next";

const Class = ({ json }: ClassProps) => (
  <Layout>
    <main>{JSON.stringify(json)}</main>
  </Layout>
);

type ClassProps = {
  json: string;
};

export const getServerSideProps: GetServerSideProps<
  ClassProps,
  { id: string }
> = async (context) => {
  const { data } = await axios.get<ClassResponse>(
    `https://www.dnd5eapi.co/api/classes/${context.params?.id}`
  );

  return {
    props: { json: data },
  };
};

type ClassResponse = string;

export default Class;
