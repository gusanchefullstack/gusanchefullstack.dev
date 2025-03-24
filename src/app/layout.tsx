import type { Metadata } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";


const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Sanchez - Fullstack Developer",
  description:
    "Gustavo Sanchez is a full-stack developer who leverages the power of Next.js to create dynamic and engaging web applications. His expertise extends to the entire development lifecycle, from front-end design and implementation using React and Tailwind CSS to back-end considerations. He is familiar with modern development practices, including cloud deployment on platforms like Vercel. Gustavo's work showcases a dedication to clean, well-structured code and a passion for staying current with the latest web development trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
