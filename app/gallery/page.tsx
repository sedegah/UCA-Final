"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const galleryImages = [
    {
      src: "/images/gallery/school-building.jpg",
      alt: "Modern school building with international flags",
      title: "Our Modern Campus",
      category: "Facilities",
    },
    {
      src: "/images/gallery/playground-facilities.jpg",
      alt: "Colorful playground with shade structures",
      title: "Play and Learning Spaces",
      category: "Facilities",
    },
    {
      src: "/images/gallery/cultural-day-students.jpg",
      alt: "Students in traditional African cultural attire",
      title: "Cultural Celebration",
      category: "Events",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/cultural-student-kente-1.jpg",
      alt: "Student in beautiful kente cloth with white head wrap",
      title: "Cultural Pride",
      category: "Events",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/cultural-student-kente-2.jpg",
      alt: "Student in vibrant kente patterns with black head wrap",
      title: "Traditional Heritage",
      category: "Events",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/cultural-student-kente-3.jpg",
      alt: "Young student in colorful kente cloth",
      title: "Cultural Expression",
      category: "Events",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/cultural-student-red-dress.jpg",
      alt: "Student in red patterned dress with head wrap",
      title: "Traditional Attire",
      category: "Events",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/cultural-celebration-peace.jpg",
      alt: "Student in traditional attire making peace sign",
      title: "Joyful Celebration",
      category: "Events",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/cultural-students-pair.jpg",
      alt: "Two students in traditional kente cloth",
      title: "Unity in Tradition",
      category: "Events",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/cultural-students-older.jpg",
      alt: "Older students in traditional attire",
      title: "Cultural Leadership",
      category: "Events",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/graduation-students.jpg",
      alt: "Students in graduation attire",
      title: "Academic Excellence",
      category: "Achievements",
      objectPosition: "50% 20%",
    },
    {
      src: "/images/gallery/student-portrait.jpg",
      alt: "Confident student in colorful African print",
      title: "Confident Learners",
      category: "Students",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/student-red-dress.jpg",
      alt: "Student in red dress smiling",
      title: "Joyful Learning",
      category: "Students",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/student-traditional-white.jpg",
      alt: "Student in traditional white attire",
      title: "Cultural Pride",
      category: "Students",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/students-group.jpg",
      alt: "Group of students in colorful traditional clothing",
      title: "Unity in Diversity",
      category: "Students",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/student-religious-robes.jpg",
      alt: "Young student in white religious robes with golden embroidery",
      title: "Spiritual Development",
      category: "Students",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/pilot-students-pair.jpg",
      alt: "Two young students in pilot uniforms",
      title: "Future Aviators",
      category: "Students",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/medical-students-group.jpg",
      alt: "Large group of students in medical uniforms",
      title: "Career Day - Medical Professionals",
      category: "Career Day",
      objectPosition: "50% 20%",
    },
    {
      src: "/images/gallery/medical-students-trio.jpg",
      alt: "Three students in medical scrubs with stethoscopes",
      title: "Future Healthcare Workers",
      category: "Career Day",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/safety-career-day.jpg",
      alt: "Students in safety vests and hard hats",
      title: "Safety and Construction Careers",
      category: "Career Day",
    },
    {
      src: "/images/gallery/medical-student-solo.jpg",
      alt: "Student in medical scrubs on colorful playground",
      title: "Medical Professional",
      category: "Career Day",
      objectPosition: "50% 10%",
    },
    {
      src: "/images/gallery/astronaut-student.jpg",
      alt: "Student in NASA astronaut costume",
      title: "Future Astronaut",
      category: "Career Day",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/aviation-students.jpg",
      alt: "Students in pilot and aviation uniforms",
      title: "Aviation Careers",
      category: "Career Day",
      objectPosition: "50% 15%",
    },
    {
      src: "/images/gallery/career-day-group.jpg",
      alt: "Students in various professional uniforms",
      title: "Career Day Celebration",
      category: "Career Day",
      objectPosition: "50% 20%",
    },
    {
      src: "/images/gallery/professional-students.jpg",
      alt: "Students in professional business attire",
      title: "Professional Development",
      category: "Career Day",
      objectPosition: "50% 15%",
    },
  ]

  const categories = ["All", "Facilities", "Students", "Events", "Career Day", "Achievements"]

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl leading-relaxed">
              Explore the vibrant life at Unique Child Academy through our collection of memorable moments,
              achievements, and daily activities that showcase our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === activeCategory ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    category === activeCategory
                      ? "bg-blue-900 hover:bg-blue-800 text-white"
                      : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{
                        objectPosition: image.objectPosition
                          ? image.objectPosition
                          : image.src.includes("kente") ||
                              image.src.includes("cultural") ||
                              image.src.includes("pilot") ||
                              image.src.includes("religious")
                            ? "50% 20%"
                            : "50% 50%",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-blue-200">{image.category}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results Message */}
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
              </div>
            )}

            {/* Download Section */}
            <div className="text-center mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Download High-Resolution Images</h3>
                <p className="text-gray-600 mb-6">
                  Need high-quality images for your publications or presentations? Contact us to request high-resolution
                  versions of our gallery photos.
                </p>
                <Button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Request Images
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
