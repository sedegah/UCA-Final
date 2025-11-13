import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Unique Child Academy - Nurturing Curiosity, Creativity, and Confidence",
  description:
    "A nurturing early childhood and primary school in Adenta, Ghana, where every child's unique potential is discovered and developed.",
  keywords: "school, education, Ghana, Adenta, early childhood, primary school, nursery, kindergarten",
  openGraph: {
    title: "Unique Child Academy",
    description: "Nurturing Curiosity, Creativity, and Confidence",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'