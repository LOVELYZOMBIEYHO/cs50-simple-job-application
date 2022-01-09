// import Link from "next/link";
// // import Card from "@/components/Card";
// // {API_URI}在 config=> index.js  要使用@ 代表../ 需要開一個檔案 jsconfig.json
// import Studentshow from "@/components/Studentshow";
// import { API_URL } from "/config/index";

// export default function Home({ students }) {
//   return (
//     <div>
//       {students.map((student) => (
//         <Studentshow key={student.id} student={student} />
//       ))}
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/students`);
//   const students = await res.json();
//   console.log(students);
//   return {
//     // 這裡用Props是因為data現在在server side 需在function Home中output

//     props: { students },
//   };
// }

// ---------------------

export default function Home() {
  return <div></div>;
}
