import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Shield, Network, Code, Smartphone, Globe, Database } from 'lucide-react'

const Hero: React.FC = () => {
  const products = [
    { icon: MessageSquare, text: 'MojiChat', description: 'AI Chatbot Platform', customIcon: '/icons/mojiChatIcon.png', link: 'https://mojichat.co' },
    { icon: Shield, text: 'Cybiri', description: 'Cybersecurity Platform', customIcon: '/icons/Logo_Cybiri.png', link: 'https://cybiri.com' },
    { icon: Network, text: 'AITaoHoo', description: 'Tunneling Platform', customIcon: '/icons/aitaohoo-icon.png', link: 'https://aitaohoo.com' },
  ]

  const services = [
    { icon: Code, text: 'Custom Software' },
    { icon: Globe, text: 'Web Development' },
    { icon: Smartphone, text: 'Mobile Apps' },
    { icon: Database, text: 'System Integration' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 moe-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-moe-pink rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-moe-purple rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-moe-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center max-w-5xl mx-auto py-8 md:py-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm">
              SOFTWARE HOUSE & SAAS PLATFORM
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
              We Build{' '}
              <span className="gradient-text">Software</span>
              {' '}That Grows{' '}
              <span className="gradient-text">Your Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              From custom applications to AI-powered platforms — we help businesses build, scale, and secure their digital products.
              Your idea, our expertise.
            </p>
          </motion.div>

          {/* Service Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3 px-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-gray-100"
                >
                  <service.icon className="w-4 h-4 text-moe-purple" />
                  <span className="text-sm font-medium text-gray-700">{service.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Products Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wide">Our Flagship Products</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 max-w-3xl mx-auto">
              {products.map((product, index) => (
                <motion.a
                  key={product.text}
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <img
                    src={product.customIcon}
                    alt={product.text}
                    className="w-10 h-10 object-contain flex-shrink-0"
                  />
                  <div className="text-left min-w-0">
                    <span className="text-base sm:text-lg font-bold text-gray-900 block truncate">
                      {product.text}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 truncate block">
                      {product.description}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-moe-pink group-hover:translate-x-1 transition-all flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a href="#contact" className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center">
                Get Free Project Assessment
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#dev-services" className="btn-outline w-full sm:w-auto">
              Explore Our Services
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200 px-4"
          >
            <p className="text-sm sm:text-base text-gray-500 mb-4">Trusted by businesses across Southeast Asia</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div>
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
