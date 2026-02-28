import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Brain,
  Shield,
  Workflow,
  Wrench,
  ArrowRight,
} from 'lucide-react'

const DevServices: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description:
        'Tailored solutions built for your specific business workflows. We turn your unique processes into powerful, automated software.',
      features: ['Business Process Automation', 'Enterprise Applications', 'API Development'],
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description:
        'Modern, responsive web applications using React, Next.js, and cloud-native architectures that scale with your business.',
      features: ['Progressive Web Apps', 'E-commerce Platforms', 'Admin Dashboards'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Cross-platform and native mobile apps for iOS and Android with seamless user experiences and offline capabilities.',
      features: ['React Native & Flutter', 'Native iOS & Android', 'Real-time Features'],
      gradient: 'from-orange-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'System Integration',
      description:
        'Connect your disconnected systems into one seamless operation. We bridge legacy software with modern platforms.',
      features: ['ERP/CRM Integration', 'Payment Gateways', 'Third-party APIs'],
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Integrate AI into your business — from intelligent chatbots and predictive analytics to computer vision and NLP.',
      features: ['AI Chatbots & Assistants', 'Predictive Analytics', 'Process Automation'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description:
        'Protect your digital assets with comprehensive security audits, penetration testing, and compliance automation.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance (ISO, PCI-DSS)'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Workflow,
      title: 'Cloud & DevOps',
      description:
        'Cloud migration, infrastructure setup, CI/CD pipelines, and monitoring to keep your systems fast and reliable.',
      features: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Container & Kubernetes'],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description:
        'Ongoing updates, bug fixes, performance optimization, and SLA-backed support so your systems never miss a beat.',
      features: ['24/7 Monitoring', 'Performance Tuning', 'SLA-backed Support'],
      gradient: 'from-slate-500 to-gray-600',
    },
  ]

  return (
    <section id="dev-services" className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
            SOFTWARE DEVELOPMENT SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            We Build{' '}
            <span className="gradient-text">Everything</span>
            {' '}Your Business Needs
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to deployment — our expert team delivers custom applications, websites, mobile apps,
            and enterprise systems tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Why Businesses Choose Gwin Tech
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  We don't just write code — we build products. As a company that operates its own SaaS platforms,
                  we understand scalability, user experience, and business viability from the inside out.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-moe-pink to-moe-purple text-white rounded-lg font-semibold hover:opacity-90 transition-opacity group"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">40-60%</div>
                  <div className="text-sm text-gray-300">Cost Savings vs. US/EU</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">AI-First</div>
                  <div className="text-sm text-gray-300">Every Solution</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">Full Code</div>
                  <div className="text-sm text-gray-300">Ownership</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DevServices
