"use client";

import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("./ThemeProvider"), { ssr: false });
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const BackgroundAnimation = dynamic(() => import("./BackgroundAnimation"), {
  ssr: false,
});

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <BackgroundAnimation />
      {children}
    </ThemeProvider>
  );
}
