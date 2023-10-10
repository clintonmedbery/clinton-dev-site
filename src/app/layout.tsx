import "./globals.css";
import { headers } from "next/headers";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "./components/layout/Layout";
import { getSelectorsByUserAgent } from "react-device-detect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "clintonmedbery.dev",
  description: "Clinton Medbery's personal website. Welcome!"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const getIsMobile = (): boolean | undefined => {
    const userAgent = headers().get("user-agent") ?? undefined;
    if (userAgent === undefined) return undefined;
    const { isMobile } = getSelectorsByUserAgent(userAgent);
    return isMobile;
  };
  const isMobile = getIsMobile();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout isMobile={isMobile}>{children}</Layout>
      </body>
    </html>
  );
}
