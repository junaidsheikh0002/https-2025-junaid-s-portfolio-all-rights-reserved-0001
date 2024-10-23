"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, User, Menu, X, ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'

const products = [
  { id: 1, name: 'iPhone 14 Pro', price: 999, image: '/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'PlayStation 5', price: 499, image: '/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'MacBook Air', price: 1199, image: '/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'AirPods Pro', price: 249, image: '/placeholder.svg?height=200&width=200' },
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-green-100">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-purple-600">cyber</Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-pink-600 hover:text-pink-800 transition-colors">Home</Link>
            <div className="relative group">
              <button className="text-red-600 hover:text-red-800 transition-colors flex items-center">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/category/phones" className="block px-4 py-2 text-yellow-600 hover:bg-yellow-100">Phones</Link>
                <Link href="/category/laptops" className="block px-4 py-2 text-green-600 hover:bg-green-100">Laptops</Link>
                <Link href="/category/accessories" className="block px-4 py-2 text-purple-600 hover:bg-purple-100">Accessories</Link>
              </div>
            </div>
            <Link href="/about" className="text-yellow-600 hover:text-yellow-800 transition-colors">About</Link>
            <Link href="/contact" className="text-green-600 hover:text-green-800 transition-colors">Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-pink-600 hover:text-pink-800 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-red-600 hover:text-red-800 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-yellow-600 hover:text-yellow-800 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden text-purple-600 hover:text-purple-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="container mx-auto px-4 py-20 flex flex-col space-y-8">
              <Link href="/" className="text-2xl font-bold text-pink-600">Home</Link>
              <Link href="/category" className="text-2xl font-bold text-red-600">Categories</Link>
              <Link href="/about" className="text-2xl font-bold text-yellow-600">About</Link>
              <Link href="/contact" className="text-2xl font-bold text-green-600">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-yellow-600 to-green-600"
          >
            E-commerce Website<br />Template <span className="text-purple-600">(FREEBIE)</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['Homepage', 'Product Detail Page', 'Category Page', 'Cart', 'Mobile Responsive'].map((feature, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 rounded-full px-4 py-2 text-sm font-semibold shadow-md"
              >
                ✓ {feature}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">iPhone 14 Pro</h2>
              <p className="text-xl mb-8">Created to change everything for the better. For everyone.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="iPhone 14 Pro"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-2">{product.name}</h3>
                  <p className="text-green-600 font-bold">${product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-600">Newsletter</h2>
          <div className="max-w-md mx-auto">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md border-2 border-yellow-600 focus:outline-none focus:border-yellow-700"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-600 text-white px-6 py-2 rounded-r-md hover:bg-yellow-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">cyber</h3>
              <p>Your one-stop shop for all things tech.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-300 transition-colors">Facebook</a>
                <a href="#" className="hover:text-pink-300 transition-colors">Twitter</a>
                <a href="#" className="hover:text-pink-300 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 cyber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}