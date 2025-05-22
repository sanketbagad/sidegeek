// This would typically come from a database
export const getUserData = (username: string) => {
  // Mock data for demonstration
  return {
    username,
    name: username === "johndoe" ? "John Doe" : `${username.charAt(0).toUpperCase()}${username.slice(1)}`,
    bio: "Product designer and developer passionate about creating innovative solutions.",
    avatar: `/placeholder.svg?height=150&width=150&query=portrait of ${username}`,
    joinDate: "May 2023",
    projectCount: 8,
    upvotes: 342,
    resumeUrl: "/path-to-resume.pdf", // This would be a real path in production
    hasResume: true,
    links: {
      github: "https://github.com/" + username,
      linkedin: "https://linkedin.com/in/" + username,
      twitter: "https://twitter.com/" + username,
      website: "https://" + username + ".com",
      email: username + "@example.com",
    },
    // Resume extracted data
    experience: [
      {
        id: 1,
        title: "Senior Product Designer",
        company: "InnovateTech",
        location: "San Francisco, CA",
        startDate: "Jan 2022",
        endDate: "Present",
        description:
          "Led design for flagship product resulting in 40% increase in user engagement. Collaborated with engineering team to implement new features and improve user experience.",
      },
      {
        id: 2,
        title: "UX Designer",
        company: "CreativeWorks",
        location: "New York, NY",
        startDate: "Mar 2019",
        endDate: "Dec 2021",
        description:
          "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions.",
      },
      {
        id: 3,
        title: "UI/UX Intern",
        company: "DesignLabs",
        location: "Boston, MA",
        startDate: "Jun 2018",
        endDate: "Feb 2019",
        description:
          "Assisted senior designers with wireframing and prototyping. Participated in design sprints and user testing sessions.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Master of Design",
        field: "Interaction Design",
        institution: "California Institute of Design",
        location: "San Francisco, CA",
        startYear: "2017",
        endYear: "2019",
      },
      {
        id: 2,
        degree: "Bachelor of Arts",
        field: "Visual Communication",
        institution: "University of Creative Arts",
        location: "Chicago, IL",
        startYear: "2013",
        endYear: "2017",
      },
    ],
    skills: [
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "HTML/CSS",
      "JavaScript",
      "React",
      "Design Systems",
      "Wireframing",
      "Usability Testing",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
    ],
    achievements: [
      {
        id: 1,
        title: "Design Excellence Award",
        issuer: "Global Design Association",
        date: "2023",
        description: "Recognized for outstanding contribution to product design",
      },
      {
        id: 2,
        title: "UX Certification",
        issuer: "Nielsen Norman Group",
        date: "2021",
        description: "Comprehensive certification in user experience research and design",
      },
    ],
    // Mock projects data
    projects: [
      {
        id: 1,
        slug: "health-tracking-app",
        title: "Health Tracking App",
        description: "A comprehensive health tracking application with AI-powered insights.",
        image: "/health-tracking-app.png",
        upvotes: 124,
        category: "Health & Fitness",
      },
      {
        id: 2,
        slug: "ai-code-editor",
        title: "AI Code Editor",
        description: "Intelligent code editor with real-time suggestions and error detection.",
        image: "/ai-code-editor.png",
        upvotes: 98,
        category: "Developer Tools",
      },
      {
        id: 3,
        slug: "finance-app-dashboard",
        title: "Finance Dashboard",
        description: "Personal finance management with visual analytics and budgeting tools.",
        image: "/finance-app-dashboard.png",
        upvotes: 76,
        category: "Finance",
      },
      {
        id: 4,
        slug: "travel-recommendation-app",
        title: "Travel Buddy",
        description: "AI-powered travel recommendations based on your preferences and budget.",
        image: "/travel-recommendation-app.png",
        upvotes: 44,
        category: "Travel",
      },
    ],
  }
}
