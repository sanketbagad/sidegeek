import type { Metadata } from "next"

// This is a dynamic metadata function that will be called for each project page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, you would fetch the project data here
  // For this example, we'll use a simple mapping
  const projectMetadata: Record<string, { title: string; description: string }> = {
    "taskflow-ai": {
      title: "TaskFlow AI - AI-powered task management system",
      description:
        "TaskFlow AI uses artificial intelligence to automatically prioritize your work based on deadlines, importance, and your personal work patterns.",
    },
    ecotrack: {
      title: "EcoTrack - Personal carbon footprint tracker",
      description:
        "EcoTrack helps you understand and reduce your carbon footprint through personalized tracking and actionable recommendations.",
    },
    soundscape: {
      title: "SoundScape - AI-generated ambient soundscapes",
      description:
        "SoundScape uses artificial intelligence to generate unique ambient soundscapes that adapt in real-time to your environment, activities, and emotional state.",
    },
    nutriplan: {
      title: "NutriPlan - Personalized nutrition planning",
      description:
        "NutriPlan creates personalized meal plans and nutrition recommendations based on your unique health profile, dietary preferences, and wellness goals.",
    },
    codebuddy: {
      title: "CodeBuddy - AI programming assistant",
      description:
        "CodeBuddy is an intelligent programming assistant that integrates with your favorite code editors to provide real-time code suggestions, identify potential bugs, and offer performance optimizations.",
    },
    "dreamscape-vr": {
      title: "DreamScape VR - Collaborative VR for architects",
      description:
        "DreamScape VR is a collaborative virtual reality platform that allows architects, designers, and clients to meet inside their designs before they're built.",
    },
    finwise: {
      title: "FinWise - AI-powered personal finance",
      description:
        "FinWise revolutionizes personal finance management by combining secure bank connections, intelligent categorization, and predictive analytics to give you complete control over your financial life.",
    },
  }

  const project = projectMetadata[params.slug] || {
    title: "Project Details | SideGeek",
    description: "Explore this innovative project on SideGeek, the premier platform for creators and innovators.",
  }

  return {
    title: `${project.title} | SideGeek`,
    description: project.description,
    openGraph: {
      title: `${project.title} | SideGeek`,
      description: project.description,
      url: `https://SideGeek.io/projects/${params.slug}`,
      siteName: "SideGeek",
      images: [
        {
          url: `https://SideGeek.io/projects/${params.slug}-og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${project.title} - Project on SideGeek`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | SideGeek`,
      description: project.description,
      images: [`https://SideGeek.io/projects/${params.slug}-twitter-image.jpg`],
      creator: "@SideGeek",
    },
    alternates: {
      canonical: `https://SideGeek.io/projects/${params.slug}`,
    },
  }
}
