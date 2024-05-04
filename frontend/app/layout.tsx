"use client";

import "./globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    // Check if the user agent indicates a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Redirect to the appropriate version of the site
    if (isMobile) {
      const path = window.location.pathname; // Access the current path from window object
      router.push(`/mobile${path}`); // Use window.location.pathname instead of router.asPath
    }
  }, [router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
