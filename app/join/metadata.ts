import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join SideGeek - Create an Account or Sign In | SideGeek",
  description:
    "Join SideGeek to showcase your projects, get valuable feedback from the community, and win up to $1000 in monthly prizes. Sign up for just $5 per submission.",
  keywords:
    "SideGeek signup, SideGeek login, create account, join SideGeek, project showcase platform, creator community, innovation platform",
  openGraph: {
    title: "Join SideGeek - Create an Account or Sign In | SideGeek",
    description:
      "Join SideGeek to showcase your projects, get valuable feedback from the community, and win up to $1000 in monthly prizes.",
    url: "https://SideGeek.io/join",
    siteName: "SideGeek",
    images: [
      {
        url: "https://SideGeek.io/join-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join SideGeek - The Premier Platform for Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join SideGeek - Create an Account or Sign In | SideGeek",
    description:
      "Join SideGeek to showcase your projects, get valuable feedback from the community, and win up to $1000 in monthly prizes.",
    images: ["https://SideGeek.io/join-twitter-image.jpg"],
    creator: "@SideGeek",
  },
  alternates: {
    canonical: "https://SideGeek.io/join",
  },
  robots: {
    index: true,
    follow: true,
  },
}
