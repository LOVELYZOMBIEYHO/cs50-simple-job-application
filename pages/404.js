import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <Head>
        <title>Page not found</title>
      </Head>

      <h1>404</h1>
      <h4>Sorry, there is nothing here</h4>
      <Link href="/jobapply">Back to Home</Link>
    </Layout>
  );
}
