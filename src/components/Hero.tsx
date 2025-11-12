import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Code, Users, Brain, MessageSquare } from 'lucide-react'

const Hero: React.FC = () => {
  const services = [
    { icon: Cloud, text: 'Huawei Cloud Infrastructure' },
    { icon: Code, text: 'Software Development' },
    { icon: Users, text: 'IT Outsourcing' },
    { icon: Brain, text: 'AI Consulting' },
    { icon: MessageSquare, text: 'MojiChat AI Chatbot' },
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
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
              Where{' '}
              <span className="gradient-text">Innovation</span>
              {' '}Meets{' '}
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Transform your business with GWIN TECH's enterprise-grade technology solutions.
              We deliver reliable, scalable IT services that drive your digital transformation forward.
            </p>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-2">
              {services.map((service, index) => {
                const isMojiChat = service.text === 'MojiChat AI Chatbot';
                return (
                  <motion.div
                    key={service.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-1.5 sm:space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 shadow-lg"
                  >
                    {isMojiChat ? (
                      <img
                        src="/icons/mojiChatIcon.png"
                        alt="MojiChat - Omnichannel AI Chatbot Platform for LINE, Facebook, Instagram, TikTok"
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0"
                      />
                    ) : (
                      <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
                      {service.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <button className="btn-primary group w-full sm:w-auto">
              <span className="flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="btn-outline w-full sm:w-auto">
              Learn More
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-200 px-4"
          >
            <p className="text-sm sm:text-base text-gray-500 mb-3 md:mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-400">Huawei Cloud</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-400">Enterprise</div>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-400">Startups</div>
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