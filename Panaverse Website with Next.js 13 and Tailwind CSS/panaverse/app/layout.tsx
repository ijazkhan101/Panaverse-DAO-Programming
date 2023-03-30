import "./globals.css";

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
        {/* Navigation Bar*/}
        {children}</body>
    </html>
  );
}
