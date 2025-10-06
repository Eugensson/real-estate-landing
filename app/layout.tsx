import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Find Your Dream Home with HomeLand | Real Estate for Sale & Rent",
    template: "%s | HomeLand Real Estate",
  },
  description:
    "Discover your perfect property with HomeLand — trusted real estate experts offering homes, apartments, and commercial spaces for sale and rent. Explore listings, compare prices, and find your new home today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
