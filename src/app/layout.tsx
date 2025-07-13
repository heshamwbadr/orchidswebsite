import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hesham Badr - AI & Digital Transformation Strategist",
  description: "Turning strategy into real-world impact with AI. Strategic Intelligence, Digital Transformation, and Leadership Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}