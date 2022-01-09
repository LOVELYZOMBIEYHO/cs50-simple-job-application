import Layout from "@/components/Layout";
import Header from "@/components/Header";

export default function About() {
  return (
    <Layout>
      <div className="m-8">
        <h1 className="text-red-600">About this project</h1>
        <p>
          It is a CS50 final project which use NextJS as Frontend and Flask as
          Backend. A simple job application web app.
        </p>
      </div>
    </Layout>
  );
}
