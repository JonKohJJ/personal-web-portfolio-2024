import type { Metadata } from "next";
import localFont from 'next/font/local'
import '../app/styles/fonts.css'
import '../app/styles/reset.css'
import '../app/styles/globals.css'
import Footer from "./sections/Footer";
import Navigation from "./sections/Navigation";
import ThemeContextProvider from "./providers/ThemeContext";

// Local font
const PPMori = localFont({
  src: [
    {
      path: '../public/fonts/PPMori-Extralight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-ExtralightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPMori-SemiBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-SemiBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jonathan Koh | Software Engineer",
  description: "2024 Personal Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning> 
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="transparent"></meta>
      </head>
      <body className={`${PPMori.className} 
          bg-color-light 
          dark:bg-color-dark
          
          text-color-dark
          dark:text-color-light

          flex
          flex-col
          justify-center
          items-center
          min-h-screen
      `}>
          <ThemeContextProvider>
              
                  <Navigation />
                  {children}
                  <Footer />

          </ThemeContextProvider>
        
      </body>
    </html>
  );
}
