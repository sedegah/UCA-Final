import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Download, ArrowRight, Eye, Building, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - With School Building Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/school-building.jpg"
            alt="Unique Child Academy School Building"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Hero Content */}
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-4 sm:mb-6 lg:mb-8 bg-white/95 rounded-full p-1 sm:p-2 mx-auto">
                <Image
                  src="/images/uca-logo.jpg"
                  alt="Unique Child Academy Logo"
                  fill
                  className="object-contain rounded-full"
                  priority
                />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight text-shadow px-2">
                Give your child the gift of a
                <span className="font-semibold text-yellow-300 block sm:inline">
                  {" "}
                  personalized, empowering education.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-3xl text-shadow mx-auto px-4">
                We believe that learning is an individual journey that equips your child with the right skills to
                independently achieve their unique purpose as global leaders.
              </p>

              <div className="flex justify-center px-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-red-700 hover:bg-red-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Learn more about the UCA advantage
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Welcome Card - Now Below Main Content */}
            <div className="max-w-2xl mx-auto px-4">
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8">
                <CardContent className="pt-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 lg:mb-4 text-center">
                    Welcome to Our Campus
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center">
                    Our modern, purpose-built facility in Haatso provides a safe, inspiring environment where children
                    can learn, play, and grow. With spacious classrooms, outdoor play areas, and state-of-the-art
                    learning resources, we create the perfect setting for your child's educational journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="bg-blue-900 hover:bg-blue-800 text-white w-full text-xs sm:text-sm lg:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105">
                        Schedule a Tour
                      </Button>
                    </Link>
                    <Link href="#programs" className="flex-1">
                      <Button
                        variant="outline"
                        className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white w-full bg-transparent text-xs sm:text-sm lg:text-base py-2 sm:py-3 transition-all duration-300 hover:scale-105"
                      >
                        View Programs
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-700 italic mb-3 sm:mb-4 lg:mb-6 leading-relaxed px-4">
              "The greatest sign of success for a teacher is to be able to say, 'The children are now working as if I
              did not exist.'"
            </blockquote>
            <cite className="text-sm sm:text-base lg:text-lg text-blue-900 font-medium">- Maria Montessori</cite>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-4">
                Our <span className="font-semibold text-blue-900">Leadership Team</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Meet the dedicated leaders who guide our mission of nurturing every child's unique potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
              {/* Proprietress */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                    <Image
                      src="/images/proprietress-cecilia.png"
                      alt="Mrs. Cecilia Boateng-Mensah, Proprietress"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 30%" }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-1 sm:mb-2">
                    Mrs. Cecilia Boateng-Mensah
                  </h3>
                  <p className="text-red-700 font-medium mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">Proprietress</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                    With a passion for child-centered education and years of experience in educational leadership, Mrs.
                    Boateng-Mensah founded UCA with the vision of creating a school where every child's unique potential
                    can flourish.
                  </p>
                </CardContent>
              </Card>

              {/* Headmaster */}
              <Card className="bg-gradient-to-br from-red-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                    <Image
                      src="/images/headmaster-emmanuel.png"
                      alt="Mr. Emmanuel Opare Duodu, Headmaster"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 20%" }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-900 mb-1 sm:mb-2">
                    Mr. Emmanuel Opare Duodu
                  </h3>
                  <p className="text-red-700 font-medium mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base">Headmaster</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                    As our dedicated Headmaster, Mr. Opare Duodu brings extensive educational expertise and a commitment
                    to academic excellence, ensuring that our students receive the highest quality education in a
                    nurturing environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* School Features Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-4">
                Why Choose <span className="font-semibold text-blue-900">Unique Child Academy?</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our world-class facility and child-centered approach create the perfect environment for learning
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-blue-900" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 lg:mb-4 text-center">
                    Modern Facilities
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    Purpose-built classrooms, outdoor play areas, and learning spaces designed specifically for
                    different age groups.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-700" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 lg:mb-4 text-center">
                    Global Perspective
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    International flags and multicultural approach preparing students to be global citizens and leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-700" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-3 lg:mb-4 text-center">
                    Safe Environment
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 text-center leading-relaxed">
                    Secure, well-maintained campus with dedicated play areas and comprehensive safety measures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced for Mobile */}
      <section id="programs" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-4">
                Our <span className="font-semibold text-blue-900">Programs</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-2">
                Comprehensive educational programs designed for every stage of development
              </p>
              <p className="text-sm sm:text-base text-blue-900 font-medium italic">
                "Primus Inter Pares" - Best Among Equals
              </p>
            </div>

            {/* Mobile-First Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-40 sm:h-44 lg:h-48 xl:h-52 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <Image
                    src="/images/gallery/students-group.jpg"
                    alt="Creche program - very young children"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2">Creche</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-medium">Ages 6 months - 2 years</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Loving care and early stimulation in a safe, nurturing environment that supports natural
                    development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-40 sm:h-44 lg:h-48 xl:h-52 bg-gradient-to-br from-red-100 to-red-200 relative">
                  <Image
                    src="/images/gallery/cultural-students-pair.jpg"
                    alt="Nursery program - young children"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 10%" }}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2">Nursery</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-medium">Ages 2 - 4 years</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Child-centered learning that develops independence, creativity, and social skills through
                    exploration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-40 sm:h-44 lg:h-48 xl:h-52 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <Image
                    src="/images/gallery/pilot-students-pair.jpg"
                    alt="Kindergarten program - young students in pilot uniforms"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2">Kindergarten</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-medium">Ages 4 - 6 years</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Preparing confident learners through hands-on experiences and individualized learning approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-40 sm:h-44 lg:h-48 xl:h-52 bg-gradient-to-br from-red-100 to-red-200 relative">
                  <Image
                    src="/images/gallery/cultural-student-kente-3.jpg"
                    alt="Primary program - student in colorful traditional attire"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2">Primary</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-medium">Ages 6 - 12 years</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Building strong academic foundations while nurturing critical thinking and leadership skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105 sm:col-span-2 lg:col-span-3 xl:col-span-1">
                <div className="h-40 sm:h-44 lg:h-48 xl:h-52 bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <Image
                    src="/images/gallery/junior-high-student-red.jpg"
                    alt="Junior High program - teenage student in traditional attire"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2">Junior High</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 font-medium">Ages 12 - 15 years</p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Advanced academic preparation with focus on critical thinking, research skills, and leadership
                    development.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-10 lg:mt-12">
              <Link href="/programs">
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  View All Programs
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-4">
                Life at <span className="font-semibold text-blue-900">UCA</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Discover the vibrant community and rich experiences that make our school special
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* School Building */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105 sm:col-span-2 lg:col-span-2">
                <div className="h-48 sm:h-56 lg:h-64 xl:h-80 relative">
                  <Image
                    src="/images/gallery/school-building.jpg"
                    alt="Modern school building with international flags"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Our Modern Campus</h3>
                    <p className="text-xs sm:text-sm">State-of-the-art facilities with international standards</p>
                  </div>
                </div>
              </Card>

              {/* Cultural Celebration */}
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-48 sm:h-56 lg:h-64 xl:h-80 relative">
                  <Image
                    src="/images/gallery/cultural-student-kente-1.jpg"
                    alt="Student in beautiful cultural attire"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Cultural Pride</h3>
                    <p className="text-xs sm:text-sm">Celebrating our rich heritage</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105">
                <div className="h-36 sm:h-40 lg:h-48 xl:h-56 relative">
                  <Image
                    src="/images/gallery/playground-facilities.jpg"
                    alt="Colorful playground facilities"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Play & Learn</h3>
                    <p className="text-xs sm:text-sm">Safe outdoor learning spaces</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden hover:scale-105 sm:col-span-2">
                <div className="h-36 sm:h-40 lg:h-48 xl:h-56 relative">
                  <Image
                    src="/images/gallery/medical-students-group.jpg"
                    alt="Students in medical career day uniforms"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">Career Day</h3>
                    <p className="text-xs sm:text-sm">Inspiring future professionals</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-6 sm:mt-8 lg:mt-12">
              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-red-700 hover:bg-red-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Eye className="mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-6 sm:mb-8 lg:mb-12 text-center px-4">
              <span className="font-semibold text-blue-900">Testimonials</span>
            </h2>

            <Card className="bg-blue-50 border-none shadow-lg rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-0">
                <blockquote className="text-sm sm:text-base lg:text-lg text-gray-700 italic mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center">
                  "Unique Child Academy has transformed our daughter's approach to learning. She's become more
                  confident, independent, and genuinely excited about discovering new things every day. The teachers
                  truly understand each child's unique needs."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-200 rounded-full flex items-center justify-center mr-2 sm:mr-3 lg:mr-4">
                    <span className="text-blue-900 font-semibold text-xs sm:text-sm lg:text-base">AK</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <cite className="text-blue-900 font-medium text-xs sm:text-sm lg:text-base">Akosua Kwarteng</cite>
                    <p className="text-gray-600 text-xs lg:text-sm">Parent of Kindergarten Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Download */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-3 sm:mb-4 lg:mb-6 px-4">
              Learn how you can become a member of the
              <span className="font-semibold block sm:inline"> UCA family</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90 px-4">
              Our child-centered approach is not just for classrooms. You can create an empowering learning environment
              at home with a few simple adjustments. Download our free PDF guide to discover 5 ways to incorporate our
              educational philosophy into your daily routine.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-red-700 hover:bg-red-800 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full w-full sm:w-auto transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                Download Free Guide
              </Button>

              <Link href="/admissions" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full bg-transparent w-full transition-all duration-300 hover:scale-105"
                >
                  Request Admission Packet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">Call Us</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">024 402 9598</p>
              </div>

              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">Email Us</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 break-all">uniquechild004@gmail.com</p>
              </div>

              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-100 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-700" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900 mb-1 sm:mb-2">Visit Us</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">Haasto-Ecomog, Haatso, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
