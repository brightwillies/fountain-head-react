import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Worcester Academy | Co-ed Day And Boarding School For Grades 6 To 12 And Postgraduates",
  description: "Worcester Academy is an independent co-educational day and boarding school for Middle School, Upper School, and Postgraduate students set on 71 acres in the heart of Worcester, Massachusetts, New England's second largest city.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
