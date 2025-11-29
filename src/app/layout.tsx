import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Condensed({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pitatech Company LTD",
  description: "Welcome to Pitatech Company LTD, your one stop solution to all your borehole problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased w-full `}
      >
        {children}
      </body>
    </html>
  );
}
