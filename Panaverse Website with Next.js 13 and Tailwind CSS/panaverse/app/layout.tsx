import Head from "next/head";
import "./globals.css";
import Header from "./components/layout/Header";

export const metadata = {
  title: "Panaverse Website",
  description: "Panaverse Website using NExt js and tailwind css 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header*/}
        <Header />
        {children}</body>
    </html>
  );
}
