import { Inter } from "next/font/google";
import "./globals.css";
import fav from "@/assets/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={fav.src}/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
