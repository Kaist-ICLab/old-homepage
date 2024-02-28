import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

import meta from "@/data/meta";
import PageLayout from "@/components/layout/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: meta["headerTitle"],
  description: meta["description"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout></body>
    </html>
  );
}
