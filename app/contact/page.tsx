"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              We'd love to hear from you! Get in touch to learn more about our programs or schedule a visit to our
              campus.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">024 402 9598</p>
                <p className="text-gray-600">+233 24 402 9598</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Email Us</h3>
                <p className="text-gray-600">uniquechild004@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Visit Us</h3>
                <p className="text-gray-600 mb-2">Haasto-Ecomog, Haatso</p>
                <p className="text-gray-600">Accra, Ghana</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Office Hours</h3>
                <p className="text-gray-600">Mon - Fri: 7:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="pt-0">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-700 hover:bg-red-800 text-white">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Google Maps */}
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8267842159944!2d-0.1677!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x5a51f20c629b1378!2sUnique%20Child%20Academy!5e0!3m2!1sen!2sgh!4v1703123456789!5m2!1sen!2sgh"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unique Child Academy Location"
                  />
                </div>
              </Card>

              {/* Additional Information */}
              <Card className="p-6 border-none shadow-lg">
                <CardContent className="pt-0">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-4">
                    We encourage prospective families to visit our campus and see our facilities firsthand. Schedule a
                    tour to meet our teachers, explore our classrooms, and learn more about our programs.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <strong>Campus Tours:</strong> Available Monday - Friday, 9:00 AM - 3:00 PM
                    </p>
                    <p>
                      <strong>Open House:</strong> Quarterly events - check our calendar
                    </p>
                  </div>
                  <Button className="mt-4 bg-blue-900 hover:bg-blue-800 text-white">Schedule a Tour</Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 border-none shadow-lg bg-red-50">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-bold text-red-700 mb-3">Emergency Contact</h3>
                  <p className="text-gray-600 mb-2">For urgent matters outside of office hours:</p>
                  <p className="font-semibold text-red-700">024 402 9598</p>
                  <p className="text-sm text-gray-500 mt-2">Emergency line available 24/7 for enrolled families</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
