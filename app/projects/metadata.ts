import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Discover Projects | SideGeek",
  description:
    "Explore innovative projects from our community of creators. Upvote your favorites and provide valuable feedback to help them succeed.",
  keywords:
    "SideGeek projects, creator showcase, innovation platform, project discovery, startup showcase, product launch",
  openGraph: {
    title: "Discover Projects | SideGeek",
    description:
      "Explore innovative projects from our community of creators. Upvote your favorites and provide valuable feedback.",
    url: "https://SideGeek.io/projects",
    siteName: "SideGeek",
    images: [
      {
        url: "https://SideGeek.io/projects-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Discover Projects on SideGeek - The Premier Platform for Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Projects | SideGeek",
    description:
      "Explore innovative projects from our community of creators. Upvote your favorites and provide valuable feedback.",
    images: ["https://SideGeek.io/projects-twitter-image.jpg"],
    creator: "@SideGeek",
  },
  alternates: {
    canonical: "https://SideGeek.io/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
}
