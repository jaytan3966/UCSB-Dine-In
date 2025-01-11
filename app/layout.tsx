import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "UCSB Dine-In",
  description: "The Best Dining Options in One Place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
<<<<<<< HEAD
      <body
        style={{ backgroundColor: "white" }}
        className="bg-opacity-40min-h-[100vh] text-black"
      >
=======
      <body className="bg-opacity-40 min-h-[100vh] text-black">
>>>>>>> 26d5a7f171bfbbf11f1b7d72788fce7c1565d802
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
