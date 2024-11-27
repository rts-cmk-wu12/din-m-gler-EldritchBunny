import Nav from "@/components/Nav/Nav";
import "./globals.css";
import SecNav from "@/components/Sec-Nav/Sec-nav";
import HeroHeader from "@/components/Hero-Header/Hero-Header";
import Under from "@/components/Under/Under";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <SecNav />
        <HeroHeader />
        <Under />
        {children}
        <Footer />
      </body>
    </html>
  );
}
