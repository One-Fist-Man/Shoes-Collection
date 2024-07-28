import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import ReactQueryProvider from "@/components/ClientProviders/ReactQueryProvider";

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoes Collection",
  description: "A shoes collection app for showcaseing shoes",
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <ReactQueryProvider>
            <Navbar />
            {children}
            <Footer />
          </ReactQueryProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
