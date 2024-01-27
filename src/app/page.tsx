import Link from "next/link";
import React from "react";
import Header from "../components/Header/Header";

export default function index() {
  return (
    <>
      <p>index</p>
      <Link href="/home" />
      <Link href="/gallery" />
      <Link href="/about" />
      <Link href="/contact-us" />
      {/* <Link href="/shop" /> */}
    </>
  );
}
