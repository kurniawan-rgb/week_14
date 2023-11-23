"use client";

import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navBar">
      <Link className={`navbar-link ${pathname === "/" ? "active" : "default"}`} href="/">
        Home
      </Link>

      <p>|</p>

      <Link className={`navbar-link ${pathname === "/diary" ? "active" : "default"}`} href="/diary">
        Fetch
      </Link>
    </div>
  );
};

export default Navbar;
