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
    
    // Check if the current path already starts with '/mobile'
    const isAlreadyOnMobilePage = window.location.pathname.startsWith('/mobile');

    // Redirect to the appropriate version of the site only if not already on mobile page
    if (isMobile && !isAlreadyOnMobilePage) {
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
