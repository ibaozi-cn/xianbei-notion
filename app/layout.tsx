import "@/styles/globals.css";
import "@/styles/prosemirror.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from 'next/head';

const title =
  "xianbei notion";
const description =
  "xianbei notion 学习英语的好帮手。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@niazmorshed_",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
