import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pramaan · SAP audit and implementation",
  description:
    "Pramaan is the SAP audit and implementation portfolio of Nirmana ERP: the SAP PM audit pack, finance and HR audit packs, and a partner-light S/4HANA implementation method.",
};

export const viewport: Viewport = {
  themeColor: "#071a28",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
