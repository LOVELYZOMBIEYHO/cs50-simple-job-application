import Link from "next/link";
import Footerstyles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={Footerstyles.footer}>
      <p>This is a footer</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
