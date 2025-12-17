import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Cloud, Cpu, LineChart, Lock } from 'lucide-react'

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Built on modern cloud infrastructure for unlimited scalability and global availability.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption and advanced threat protection.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Cpu,
      title: 'AI-Powered',
      description: 'Leveraging LLMs, RAG, and multi-agent systems for intelligent automation.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Sub-second response times with WebSocket streaming and event-driven architecture.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: LineChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive dashboards and reports to measure impact and optimize performance.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'API-First Design',
      description: 'RESTful APIs and webhooks for seamless integration with your existing tools.',
      color: 'from-red-500 to-pink-500',
    },
  ]

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
            PLATFORM FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Why Choose{' '}
            <span className="gradient-text">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade SaaS architecture designed for performance, security, and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of businesses already using our SaaS platforms to transform their operations.
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mojichat.co"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Try MojiChat Free
              </a>
              <a
                href="https://cybiri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white font-semibold py-3 px-8 rounded-full hover:bg-white/30 transition-colors duration-300 border border-white/30"
              >
                Try Cybiri Free
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
