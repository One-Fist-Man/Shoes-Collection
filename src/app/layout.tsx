import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products Showcase App",
  description: "A product listing app for showcaseing products",
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
