import Script from "next/script";
import "./globals.css";
import DarkModeSwitch from "./components/util/DarkModeSwitch";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

export const metadata = {
  title: `Zack's Portfolio`,
  openGraph: {
    title: `Zack's Portfolio`,
    description: `Zachary Maynor's front-end web development portfolio.`,
    locale: `en-US`,
    type: `website`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <Script src="https://kit.fontawesome.com/e2667abf31.js" />

      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>

      <body
        className="font-body bg-primary
      dark:bg-quaternary
      dark:text-white"
      >
        <DarkModeSwitch />
        <Navbar />
        <main className="flex flex-col gap-52 md:mx-body my-8 transition-colors duration-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
