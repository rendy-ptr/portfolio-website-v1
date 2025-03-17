import type { Metadata } from "next";
import "./index.css";
import ClientLayouts from "./layouts/ClientsLayouts";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayouts>{children}</ClientLayouts>
      </body>
    </html>
  );
}
