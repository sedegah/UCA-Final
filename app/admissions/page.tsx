import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Users, Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl leading-relaxed">
              Join the Unique Child Academy family and give your child the foundation for lifelong success. Our
              admissions process is designed to be simple and supportive.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Admissions Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our step-by-step admissions process ensures a smooth transition for your child into our school community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-none shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Submit Application</h3>
                <p className="text-gray-600">
                  Complete our online application form with your child's information and family details.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Campus Visit</h3>
                <p className="text-gray-600">
                  Schedule a tour of our facilities and meet with our admissions team and teachers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Documentation</h3>
                <p className="text-gray-600">
                  Submit required documents including birth certificate, immunization records, and previous school
                  records.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Enrollment</h3>
                <p className="text-gray-600">
                  Receive acceptance notification and complete enrollment process with fee payment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Entry Requirements</h2>

              <div className="space-y-8">
                <Card className="p-6 border-l-4 border-red-700">
                  <CardContent className="pt-0">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Creche (6 months - 2 years)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Birth certificate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Immunization records</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medical examination report</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Parent/guardian identification</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-l-4 border-red-700">
                  <CardContent className="pt-0">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nursery (2 - 4 years)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Birth certificate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Immunization records</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Medical examination report</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Previous school report (if applicable)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-l-4 border-red-700">
                  <CardContent className="pt-0">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Kindergarten & Primary</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Birth certificate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Previous school transcripts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Immunization records</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Assessment/placement test</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6 border-l-4 border-red-700">
                  <CardContent className="pt-0">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">Junior High (12 - 15 years)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Birth certificate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Primary school completion certificate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Academic transcripts from previous school</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Entrance examination and interview</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Character reference from previous school</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Important Dates</h2>

              <Card className="p-8 border-none shadow-lg mb-8">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-8 h-8 text-red-700 mr-3" />
                    <h3 className="text-2xl font-semibold text-blue-900">Academic Calendar 2025-2026</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-blue-900">Application Deadline</span>
                      <span className="text-gray-600">July 31, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-blue-900">New Student Orientation</span>
                      <span className="text-gray-600">August 15, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-blue-900">First Term Begins</span>
                      <span className="text-gray-600">September 2, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-blue-900">Mid-Term Break</span>
                      <span className="text-gray-600">October 21-25, 2025</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-blue-900">First Term Ends</span>
                      <span className="text-gray-600">December 13, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-none shadow-lg bg-blue-50">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Need Help with Your Application?</h3>
                  <p className="text-gray-600 mb-4">
                    Our admissions team is here to guide you through every step of the process.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-700" />
                      <span className="text-gray-600">024 402 9598</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-red-700" />
                      <span className="text-gray-600">uniquechild004@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards giving your child an exceptional education. Start your application today or
            schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 py-4">
              Start Application
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 bg-transparent"
              >
                Schedule Campus Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
