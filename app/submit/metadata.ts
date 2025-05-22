import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submit Your Project | SideGeek",
  description: "Share your creation with the SideGeek community and get feedback from other creators.",
  openGraph: {
    title: "Submit Your Project | SideGeek",
    description: "Share your creation with the SideGeek community and get feedback from other creators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Submit Your Project | SideGeek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit Your Project | SideGeek",
    description: "Share your creation with the SideGeek community and get feedback from other creators.",
    images: ["/og-image.png"],
  },
}
