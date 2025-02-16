import type { Metadata } from "next";
import { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";

import { StyledJsxRegistry } from "./registry.tsx";

const plex = IBM_Plex_Sans({
  weight: ["500", "600"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Monorepo template",
  description: "A Next app with Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={plex.className}>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
