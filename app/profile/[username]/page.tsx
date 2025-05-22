import type { Metadata } from "next"
import { getUserData } from "@/lib/data"
import ProfileClientPage from "./ProfileClientPage"

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const userData = getUserData(params.username)

  return {
    title: `${userData.name} - Profile | SideGeek`,
    description: `Check out ${userData.name}'s profile and projects on SideGeek. ${userData.bio}`,
    openGraph: {
      title: `${userData.name} - SideGeek Profile`,
      description: `${userData.bio}`,
      images: [
        {
          url: `/api/og?username=${params.username}`,
          width: 1200,
          height: 630,
          alt: `${userData.name}'s profile`,
        },
      ],
      type: "profile",
      profile: {
        username: userData.username,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${userData.name} - SideGeek Profile`,
      description: `${userData.bio}`,
      images: [`/api/og?username=${params.username}`],
    },
    alternates: {
      canonical: `/profile/${params.username}`,
    },
  }
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  return <ProfileClientPage params={params} />
}
