import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Shield } from 'lucide-react'

const Hero: React.FC = () => {
  const products = [
    { icon: MessageSquare, text: 'MojiChat', description: 'AI Chatbot Platform', customIcon: '/icons/mojiChatIcon.png', link: 'https://mojichat.co' },
    { icon: Shield, text: 'Cybiri', description: 'Cybersecurity Platform', customIcon: '/icons/Logo_Cybiri.png', link: 'https://cybiri.com' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 moe-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-moe-pink rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-moe-purple rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-moe-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto py-8 md:py-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm">
              SAAS PLATFORM
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
              Enterprise{' '}
              <span className="gradient-text">SaaS</span>
              {' '}Solutions for{' '}
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Transform customer engagement with AI-powered chatbots and protect your digital assets with unified cybersecurity.
              Two powerful platforms, one mission: accelerate your digital transformation.
            </p>
          </motion.div>

          {/* Products Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-2">
              {products.map((product, index) => (
                <motion.a
                  key={product.text}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl px-5 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <img
                    src={product.customIcon}
                    alt={product.text}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
                  />
                  <div className="text-left">
                    <span className="text-lg sm:text-xl font-bold text-gray-900 block">
                      {product.text}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.description}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-moe-pink group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a href="#services" className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center">
                Explore Our Products
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Request Demo
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200 px-4"
          >
            <p className="text-sm sm:text-base text-gray-500 mb-4">Trusted by businesses across industries</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
