import Link from "next/link";
import Layout from "@/components/Layout";
import Applicantlist from "@/components/Applicantlist";
// {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
import styles from "@/styles/Applicantlist.module.css";

import { API_URL } from "@/config/index";

export default function Applicants({ applicants }) {
  //   Sorting - based on id number - JSON
  applicants.sort((a, b) => {
    return b.id - a.id;
  });
  return (
    <Layout>
      <h1 className="text-center my-8 text-red-600">Rencent applicants</h1>{" "}
      {applicants.length === 0 && <h3>No applicants to show</h3>}
      <div className={styles.html}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Id</th>
              <th className={styles.th}>FirstName</th>
              <th className={styles.th}>LastName</th>
              <th className={styles.th}>Position</th>
              <th className={styles.th}>
                Expected
                <br />
                Salary
              </th>
              <th className={styles.th}>Full-Part</th>
            </tr>
          </thead>
        </table>
      </div>
      {applicants.map((evt) => (
        <Applicantlist key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/pdf`);
  const applicants = await res.json();

  return {
    // 這裡用Props是因為data現在在server side 需在function Home中output

    props: { applicants },
    revalidate: 1,
  };
}
