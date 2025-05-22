import type React from "react"
import Script from "next/script"

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}

      {/* Structured data for SEO */}
      <Script
        id="join-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Join SideGeek - Create an Account or Sign In",
            description:
              "Join SideGeek to showcase your projects, get valuable feedback from the community, and win up to $1000 in monthly prizes.",
            url: "https://SideGeek.io/join",
            mainEntity: {
              "@type": "WebSite",
              name: "SideGeek",
              url: "https://SideGeek.io",
            },
            offers: {
              "@type": "Offer",
              price: "5",
              priceCurrency: "USD",
              description: "Project submission fee",
            },
          }),
        }}
      />
    </>
  )
}
