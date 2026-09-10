import StoryblokProvider from "@/src/components/providers/StoryblokProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "storyblok blog",
  description: "Created by Andreas Vestergaard as a training project",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html
        lang='en'
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className='min-h-full flex flex-col'>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
