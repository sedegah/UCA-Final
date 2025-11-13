import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Eye, Users, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Unique Child Academy</h1>
            <p className="text-lg sm:text-xl leading-relaxed">
              Founded on the belief that every child is unique and deserves an education that nurtures their individual
              strengths, interests, and potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <Card className="p-6 sm:p-8 border-none shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  To provide a nurturing, child-centered learning environment that fosters curiosity, creativity, and
                  confidence in every student. We are committed to developing well-rounded individuals who are prepared
                  for academic success and lifelong learning.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 sm:p-8 border-none shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  To be the leading early childhood and primary education institution in Ghana, recognized for our
                  innovative teaching methods, exceptional care, and commitment to developing confident, creative, and
                  curious learners who will become tomorrow's leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Unique Child Academy was founded in 2004 with a simple yet powerful vision: to create a school where
                  every child's unique potential could be discovered, nurtured, and developed.
                </p>
                <p>
                  Located in Haasto-Ecomog, Haatso, our school has grown from a small nursery to a comprehensive early
                  childhood and primary education institution serving families throughout Accra and surrounding
                  communities.
                </p>
                <p>
                  Our founders, experienced educators with a passion for child development, recognized the need for a
                  school that would combine academic excellence with emotional and social development, creating
                  well-rounded individuals prepared for future success.
                </p>
                <p>
                  Today, we continue to uphold our founding principles while embracing innovative teaching methods and
                  maintaining our commitment to providing the highest quality education in a safe, nurturing
                  environment.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-blue-50 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/images/uca-logo.jpg"
                  alt="Unique Child Academy Logo"
                  width={200}
                  height={200}
                  className="rounded-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">What Makes Us Unique</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach to education goes beyond traditional teaching methods to create an environment where children
              thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Child-Centered Learning
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  We recognize that each child learns differently and tailor our approach to meet individual needs,
                  interests, and learning styles.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Passionate Educators
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Our teachers are not just educators but mentors who are passionate about child development and
                  committed to each student's success.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Holistic Development
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  We focus on developing the whole child - academically, socially, emotionally, and physically -
                  preparing them for all aspects of life.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Safe Environment
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Our secure, well-maintained facilities provide a safe haven where children feel comfortable to
                  explore, learn, and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Small Class Sizes
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Our low student-to-teacher ratios ensure that every child receives individual attention and
                  personalized support.
                </p>
              </CardContent>
            </Card>

            <Card className="p-4 sm:p-6 border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 text-center">
                  Family Partnership
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  We believe in working closely with families to create a consistent, supportive environment for each
                  child's development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
