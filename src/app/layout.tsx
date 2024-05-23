import type { Metadata } from "next";
import { Aleo } from "next/font/google";

import Nav from "./_components/Nav/Nav";
import SectionContainer from "./_components/Layout/SectionContainer";
import Footer from "./_components/Footer/Footer";

import "./globals.css";

const aleo = Aleo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aleo.className} flex flex-col min-h-screen bg-grey-500 text-textColor`}
      >
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
