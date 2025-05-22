import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username") || "user"
  const name = username === "johndoe" ? "John Doe" : `${username.charAt(0).toUpperCase()}${username.slice(1)}`

  try {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "white",
          background: "linear-gradient(to bottom right, #18181b, #09090b)",
          width: "100%",
          height: "100%",
          padding: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            width: 250,
            height: 250,
            borderRadius: "100%",
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            width: 300,
            height: 300,
            borderRadius: "100%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            filter: "blur(60px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(to right, #9333EA, #3B82F6)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 5C8.55228 5 9 5.44772 9 6V16.5858L11.2929 14.2929C11.6834 13.9024 12.3166 13.9024 12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071L8.70711 19.7071C8.31658 20.0976 7.68342 20.0976 7.29289 19.7071L3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929C3.68342 13.9024 4.31658 13.9024 4.70711 14.2929L7 16.5858V6C7 5.44772 7.44772 5 8 5Z"
                fill="white"
              />
              <path
                d="M13 19C12.4477 19 12 18.5523 12 18V7.41421L9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289L12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L14 7.41421V18C14 18.5523 13.5523 19 13 19Z"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 24,
              fontStyle: "italic",
              background: "linear-gradient(to right, #9333EA, #ffffff, #3B82F6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SideGeek
          </span>
        </div>

        {/* Profile content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "100%",
              background: "#3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 60,
              fontWeight: "bold",
              color: "white",
              border: "4px solid #27272a",
            }}
          >
            {name.charAt(0)}
          </div>

          <h1 style={{ fontSize: 60, margin: 0, color: "white" }}>{name}</h1>
          <p style={{ fontSize: 30, color: "#a1a1aa", margin: 0 }}>@{username}</p>

          <div
            style={{
              marginTop: 20,
              padding: "12px 30px",
              background: "linear-gradient(to right, #9333EA, #3B82F6)",
              borderRadius: 12,
              fontSize: 24,
            }}
          >
            View Profile on SideGeek
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`Error generating OG image: ${e}`)
    return new Response(`Error generating image`, {
      status: 500,
    })
  }
}
