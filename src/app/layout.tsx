import type { Metadata } from "next";

import "@/styles/globals.css";
import ThemeProvider from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "nai.log",
  description: "모르는 게 더 많을 나이",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
