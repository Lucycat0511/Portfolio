import Script from "next/script";
import "./globals.css";

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
      <body
        className="mx-body my-8 font-body bg-primary
      dark:bg-quaternary
      dark:text-white"
      >
        {children}
      </body>
    </html>
  );
}
