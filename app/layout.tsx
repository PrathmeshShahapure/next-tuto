import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";


const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Music App",
  description: "Play Any Music for Free",
};

export default function RootLayout({
  children,
  comments,
  users,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  comments: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.className} font-semibold h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <div className="flex ">
          {users}
          {comments}
        </div>
      </body>
    </html>
  );
}
