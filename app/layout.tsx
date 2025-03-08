"use client";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import "./index.css";
import dynamic from "next/dynamic";

// Import LoadingScreen dengan dynamic import untuk mencegah SSR chunk error
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen/LoadingScreen"), {
  ssr: false,
});

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
