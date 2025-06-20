import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/others/Nav";
import Footer from "@/components/others/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luneva",
  description: "Luneva is my personal store offering unique, handpicked products curated with care.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
