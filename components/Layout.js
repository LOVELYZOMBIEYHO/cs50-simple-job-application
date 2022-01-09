import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
// import Showcase from "./Showcase";
import layoutstyles from "@/styles/Layout.module.css";

// children 為SPECIAL 必須用children 代表body content
export default function Layout({ keywords, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {/* {router.pathname === "/" && <Showcase />} */}
      <div className={layoutstyles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  keywords: "CS50 final project",
};
