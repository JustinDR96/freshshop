import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="navbar-top">
        <Link href="/home">
          <button>home</button>
        </Link>
      </div>
      <div className="navbar-bottom" />
    </div>
  );
}
