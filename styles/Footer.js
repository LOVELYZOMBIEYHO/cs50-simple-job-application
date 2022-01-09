import Link from "next/link";
import Footerstyles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={Footerstyles.footer}>
      <p>Copyright &copy; Hoson's Digital Life 2021</p>
      <p>
        <Link href="/about">About This Project and me</Link>
      </p>
    </footer>
  );
}
