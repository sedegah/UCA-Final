import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
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
            <h1 className="text-5xl font-bold mb-6">School News & Achievements</h1>
            <p className="text-xl leading-relaxed">
              Stay updated with the latest news, achievements, and milestones from Unique Child Academy.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {/* BECE Achievement Article 1 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-blue-900 mb-2">
                        Four Students of Unique Child Academy Top 2022 BECE
                      </h2>
                      <p className="text-gray-500 text-sm mb-4">September 2023 • Ghana News Agency</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Unique Child Academy celebrates exceptional academic achievement as four of our students secured top
                    positions in the 2022 Basic Education Certificate Examination (BECE). This outstanding performance
                    demonstrates our commitment to academic excellence and the effectiveness of our child-centered
                    educational approach.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-green-700">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Academic Excellence</span>
                    </div>
                    <Link
                      href="https://gna.org.gh/2023/09/four-students-of-the-unique-child-academy-top-2022-bece/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* BECE Achievement Article 2 */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-red-700" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-blue-900 mb-2">
                        Unique Child Academy Praised for Stellar BECE Performance in Ga East
                      </h2>
                      <p className="text-gray-500 text-sm mb-4">September 2023 • Citi Newsroom</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The Ga East Municipal Assembly has commended Unique Child Academy for its outstanding performance in
                    the Basic Education Certificate Examination. Our students' exceptional results have brought
                    recognition to the school and the entire Ga East district, highlighting our dedication to providing
                    quality education that prepares students for future success.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-red-700">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Community Recognition</span>
                    </div>
                    <Link
                      href="https://citinewsroom.com/2023/09/unique-child-academy-praised-for-stellar-bece-performance-in-ga-east/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-red-700 hover:bg-red-800 text-white">
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Summary */}
            <Card className="mt-12 bg-gradient-to-br from-blue-50 to-white border-none shadow-lg rounded-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Commitment to Excellence</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  These achievements reflect our unwavering commitment to providing quality education that empowers
                  students to excel academically while developing their unique talents and abilities. We continue to set
                  high standards and support every child in reaching their full potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/admissions">
                    <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4">
                      Join Our Success Story
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 bg-transparent"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
