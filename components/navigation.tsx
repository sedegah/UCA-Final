"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      {/* Top bar with contact info and social media */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+233 30 936 5432</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@uniquechildacademy.edu.gh</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://web.facebook.com/UCAHE/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/uniquechildacademy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/uca-logo.jpg"
              alt="Unique Child Academy"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">Unique Child Academy</h1>
              <p className="text-sm text-gray-600 italic">Primus Inter Pares - First Among Equals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Programs
            </Link>
            <Link href="/admissions" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Admissions
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              News
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="/admissions"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admissions
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                News
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile contact info */}
              <div className="pt-4 border-t space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+233 30 936 5432</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>info@uniquechildacademy.edu.gh</span>
                </div>
                <div className="flex items-center space-x-4 pt-2">
                  <a
                    href="https://web.facebook.com/UCAHE/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/uniquechildacademy_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
