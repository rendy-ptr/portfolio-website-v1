import type { Metadata } from "next";
import "./index.css";
import Template from "./template";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
