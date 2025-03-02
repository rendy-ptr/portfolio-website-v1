"use client";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import "./index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <div className="min-h-screen">{children}</div>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
