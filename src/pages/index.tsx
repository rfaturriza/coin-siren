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
        profileCard: data.data.profile,
      }}
    />
  );
};

export const getServerSideProps = (async (context) => {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${context.req.headers.host}`;
  const res = await fetch(`${baseUrl}/api/dashboard`);
  const data: ResponseDashboard = await res.json();
  return { props: { data } };
}) satisfies GetServerSideProps<{ data: ResponseDashboard }>;

export default Page;
