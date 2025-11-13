import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, Users, BookOpen, GraduationCap, Clock, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl leading-relaxed">
              Comprehensive educational programs designed to nurture every stage of your child's development, from
              infancy through primary school.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {/* Creche Program */}
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Baby className="w-8 h-8 text-red-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Creche Program</h2>
                      <p className="text-red-700 font-semibold">Ages 6 months - 2 years</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our creche program provides loving, professional care for your youngest children in a safe,
                    stimulating environment designed to support their earliest developmental milestones.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Loving Care</h4>
                        <p className="text-gray-600">
                          Experienced caregivers provide nurturing, individualized attention
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Early Stimulation</h4>
                        <p className="text-gray-600">
                          Age-appropriate activities to support sensory and motor development
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Flexible Schedule</h4>
                        <p className="text-gray-600">Full-time and part-time options to meet family needs</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Attachment and bonding</li>
                      <li>• Sensory exploration</li>
                      <li>• Motor skill development</li>
                      <li>• Language exposure</li>
                      <li>• Social interaction</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-8">
                  <Image
                    src="/images/gallery/students-group.jpg"
                    alt="Creche program activities"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </div>
            </Card>

            {/* Nursery Program */}
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8 lg:order-1">
                  <Image
                    src="/images/gallery/cultural-students-pair.jpg"
                    alt="Nursery program activities"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ objectPosition: "50% 15%" }}
                  />
                </div>
                <div className="p-8 lg:p-12 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-8 h-8 text-red-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Nursery Program</h2>
                      <p className="text-red-700 font-semibold">Ages 2 - 4 years</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our nursery program focuses on play-based learning that develops social skills, creativity, and
                    early academic concepts through engaging, hands-on activities.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Social Development</h4>
                        <p className="text-gray-600">Learning to share, cooperate, and build friendships</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Creative Expression</h4>
                        <p className="text-gray-600">Art, music, and imaginative play to foster creativity</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Early Learning</h4>
                        <p className="text-gray-600">Introduction to letters, numbers, and basic concepts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Language development</li>
                      <li>• Fine and gross motor skills</li>
                      <li>• Social and emotional skills</li>
                      <li>• Pre-literacy and numeracy</li>
                      <li>• Independence and self-help skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Kindergarten Program */}
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="w-8 h-8 text-red-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Kindergarten Program</h2>
                      <p className="text-red-700 font-semibold">Ages 4 - 6 years</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our kindergarten program prepares children for primary school through structured learning activities
                    that build academic foundations while maintaining the joy of discovery.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">School Readiness</h4>
                        <p className="text-gray-600">
                          Developing skills needed for successful transition to primary school
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Academic Foundation</h4>
                        <p className="text-gray-600">Strong foundation in reading, writing, and mathematics</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Critical Thinking</h4>
                        <p className="text-gray-600">Problem-solving and analytical thinking skills</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Reading and phonics</li>
                      <li>• Writing and handwriting</li>
                      <li>• Mathematics concepts</li>
                      <li>• Science exploration</li>
                      <li>• Social studies awareness</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-8">
                  <Image
                    src="/images/gallery/pilot-students-pair.jpg"
                    alt="Kindergarten program activities"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </div>
            </Card>

            {/* Primary Program */}
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8 lg:order-1">
                  <Image
                    src="/images/gallery/cultural-student-kente-3.jpg"
                    alt="Primary program - student in colorful traditional attire"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
                <div className="p-8 lg:p-12 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8 text-red-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Primary Program</h2>
                      <p className="text-red-700 font-semibold">Ages 6 - 12 years</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our primary program provides comprehensive education that builds strong academic foundations while
                    developing critical thinking, creativity, and character.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Academic Excellence</h4>
                        <p className="text-gray-600">Rigorous curriculum aligned with national standards</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Character Development</h4>
                        <p className="text-gray-600">Building integrity, responsibility, and leadership skills</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Extracurricular Activities</h4>
                        <p className="text-gray-600">Sports, arts, and clubs to develop diverse interests</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Core academic subjects</li>
                      <li>• STEM education</li>
                      <li>• Arts and creativity</li>
                      <li>• Physical education</li>
                      <li>• Leadership development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Junior High Program */}
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-8 h-8 text-red-700" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900">Junior High Program</h2>
                      <p className="text-red-700 font-semibold">Ages 12 - 15 years</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Our Junior High program provides advanced academic preparation that challenges students while
                    supporting their transition into adolescence with comprehensive guidance and mentorship.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Advanced Academics</h4>
                        <p className="text-gray-600">
                          Rigorous curriculum preparing students for senior high school success
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Leadership Development</h4>
                        <p className="text-gray-600">
                          Student government, peer mentoring, and community service opportunities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-red-700 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Critical Thinking</h4>
                        <p className="text-gray-600">
                          Research projects, debates, and analytical problem-solving skills
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Focus Areas:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Advanced mathematics and sciences</li>
                      <li>• Research and analytical writing</li>
                      <li>• Foreign language proficiency</li>
                      <li>• Technology and digital literacy</li>
                      <li>• Career exploration and guidance</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center p-8">
                  <Image
                    src="/images/gallery/junior-high-student-red.jpg"
                    alt="Junior High program - teenage student in traditional attire"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll Your Child?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your child the foundation they need for lifelong success. Contact us today to learn more about our
            programs or schedule a visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 py-4">
                Start Application
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 bg-transparent"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
