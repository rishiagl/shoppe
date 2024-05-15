import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavBar } from "./_components/TopNavBar";
import { SideNavBar } from "./_components/SideNavBar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="flex flex-col bg-slate-50 dark:bg-slate-950 h-dvh">
          <TopNavBar></TopNavBar>
          <div className="flex-1 overflow-auto">
            <div className="relative lg:flex lg:flex-row h-full">
              <SideNavBar></SideNavBar>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}