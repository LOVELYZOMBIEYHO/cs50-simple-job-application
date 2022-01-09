import Link from "next/link";
import Headerstyles from "@/styles/Header.module.css";
import React from "react";

import Navbarnavigation from "./Navbarnavigation";
export default function Header() {
  return (
    // <header className={Headerstyles.header}>
    <header>
      <Navbarnavigation />
    </header>
  );
}

// ----------------------------------------------------------
