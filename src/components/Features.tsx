import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, Globe, Users, Clock, Award } from 'lucide-react'

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Rapid development and deployment cycles without compromising quality.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards for your peace of mind.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: '24/7 support and services available across multiple time zones worldwide.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Experienced professionals committed to your project\'s success.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent delivery within agreed timelines and budget constraints.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Rigorous testing and quality assurance processes for flawless results.',
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
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Why Choose{' '}
            <span className="gradient-text">GWIN TECH</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with proven methodologies to deliver reliable, scalable solutions that drive business success
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how GWIN TECH can help you achieve your technology goals with our professional expertise and commitment to excellence.
            </p>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 