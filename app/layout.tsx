import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./_components/Footer";
import MobileFooter from "./_components/MobileFooter";
import Navbar from "./_components/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Grove-St.",
  description:
    "A creative agency dedicated to delivering impactful design and development solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
        
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50">
        <Navbar />
        </header>
        {children}
        <footer>
        <Footer />
        <MobileFooter />
      </footer>
      </body>
      
    </html>
  );
}
