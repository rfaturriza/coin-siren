import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Landing from "@/components/pages/landing";
import { ResponseDashboard } from "./api/dashboard";

const Page = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Landing
      mainProps={{
        overviewAndSalaryDisplayProps: { salaryInfo: data.data.salaryInfo },
        productCard: data.data.products,
      }}
    />
  );
};

export const getServerSideProps = (async () => {
  const res = await fetch("http://localhost:3000/api/dashboard");
  const data: ResponseDashboard = await res.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: ResponseDashboard }>;

export default Page;
