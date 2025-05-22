import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SideGeek - Share Projects, Get Votes, Win Prizes | Just $5 Per Submission",
  description:
    "Launch your projects on SideGeek for just $5. Get valuable feedback, votes from the community, and win up to $1000 in monthly prizes. The premier platform for creators and innovators.",
  keywords:
    "project showcase, startup platform, product launch, creator community, project feedback, innovation prizes, $5 submission, win $1000, product promotion, SideGeek, launch platform",
  openGraph: {
    title: "SideGeek - Share Projects, Get Votes, Win Prizes | Just $5 Per Submission",
    description:
      "Launch your projects on SideGeek for just $5. Get valuable feedback, votes from the community, and win up to $1000 in monthly prizes.",
    url: "https://SideGeek.io",
    siteName: "SideGeek",
    images: [
      {
        url: "https://SideGeek.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SideGeek - The Premier Platform for Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SideGeek - Share Projects, Get Votes, Win Prizes | Just $5 Per Submission",
    description:
      "Launch your projects on SideGeek for just $5. Get valuable feedback, votes from the community, and win up to $1000 in monthly prizes.",
    images: ["https://SideGeek.io/twitter-image.jpg"],
    creator: "@SideGeek",
  },
  alternates: {
    canonical: "https://SideGeek.io",
  },
  authors: [{ name: "SideGeek Team" }],
  category: "Technology",
  creator: "SideGeek Team",
  publisher: "SideGeek",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://SideGeek.io"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SideGeek",
              url: "https://SideGeek.io",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://SideGeek.io/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              description:
                "Launch your projects on SideGeek for just $5. Get valuable feedback, votes from the community, and win up to $1000 in monthly prizes.",
              publisher: {
                "@type": "Organization",
                name: "SideGeek",
                logo: {
                  "@type": "ImageObject",
                  url: "https://SideGeek.io/logo.png",
                },
              },
            }),
          }}
        />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SideGeek",
              url: "https://SideGeek.io",
              logo: "https://SideGeek.io/logo.png",
              sameAs: [
                "https://twitter.com/SideGeek",
                "https://facebook.com/SideGeek",
                "https://instagram.com/SideGeek",
                "https://linkedin.com/company/SideGeek",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
