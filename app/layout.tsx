import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Static Intercepted Routes",
  description: "Lets Go....",
};

export default function RootLayout({
  children,modal

}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.className} font-semibold h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div className=" flex w-full justify-center items-center"
        >
          {modal}
     
        </div>
      </body>
    </html>
  );
}
