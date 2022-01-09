import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Applicantlist.module.css";

export default function Applicantlist({ evt }) {
  return (
    <div className={styles.html}>
      <table className={styles.table}>
        {/* <thead>
          <tr>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>FirstName</th>
            <th className={styles.th}>LastName</th>
            <th className={styles.th}>Position</th>
            <th className={styles.th}>ExpectedSalary</th>
            <th className={styles.th}>Full-Part</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td className={styles.td}>{evt.id}</td>
            <td className={styles.td}>{evt.firstName}</td>
            <td className={styles.td}>{evt.lastName}</td>
            <td className={styles.td}>{evt.applied_position}</td>
            <td className={styles.td}>${evt.expected_salary}</td>
            <td className={styles.td}>{evt.full_or_part_time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
