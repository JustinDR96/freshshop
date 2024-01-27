import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import Header from "@@/components/Header/Header";
import Footer from "@@/components/Footer/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshShop - Ecommerce",
  description: "The best fresh fruits and vegetables online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
