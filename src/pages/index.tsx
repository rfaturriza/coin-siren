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
  try {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const baseUrl = `${protocol}://${context.req.headers.host}`;
    const res = await fetch(`${baseUrl}/api/dashboard`);

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error(`Expected JSON response but got ${contentType}`);
    }

    const data: ResponseDashboard = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Return fallback data or redirect to error page
    return {
      notFound: true, // This will show 404 page
      // Or redirect:
      // redirect: {
      //   destination: '/error',
      //   permanent: false,
      // },
    };
  }
}) satisfies GetServerSideProps<{ data: ResponseDashboard }>;

export default Page;
