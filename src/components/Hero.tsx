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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 moe-gradient opacity-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-moe-pink rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-moe-purple rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-moe-blue rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Where{' '}
              <span className="gradient-text">Innovation</span>
              {' '}Meets{' '}
              <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with GWIN TECH's enterprise-grade technology solutions.
              We deliver reliable, scalable IT services that drive your digital transformation forward.
            </p>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {services.map((service, index) => {
                const isMojiChat = service.text === 'MojiChat AI Chatbot';
                return (
                  <motion.div
                    key={service.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                  >
                    {isMojiChat ? (
                      <img
                        src="/icons/mojiChatIcon.png"
                        alt="MojiChat"
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <service.icon className="w-5 h-5 text-primary-600" />
                    )}
                    <span className="text-sm md:text-base font-medium text-gray-700">
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              Learn More
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Huawei Cloud</div>
              <div className="text-2xl font-bold text-gray-400">Enterprise</div>
              <div className="text-2xl font-bold text-gray-400">Startups</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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