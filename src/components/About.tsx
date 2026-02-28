import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Sparkles, Target, TrendingUp } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Rocket,
      title: 'Product-First',
      description: 'We build SaaS products that solve real business problems at scale.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Leveraging cutting-edge AI to deliver intelligent, automated solutions.',
    },
    {
      icon: Target,
      title: 'Customer Success',
      description: 'Your success is our success. We measure our impact by your growth.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Constantly evolving our platforms with new features and capabilities.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Your{' '}
              <span className="gradient-text">Technology Partner</span>
              {' '}for Growth
            </h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                <strong>GWIN TECH CO., LTD.</strong> is a software house and SaaS company headquartered in Bangkok, Thailand.
                We build custom applications, enterprise systems, and AI-powered platforms that transform how businesses operate.
              </p>

              <div className="bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-2xl p-6 border-l-4 border-moe-pink">
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700 mb-3">
                  To help businesses of all sizes compete in the digital economy — through custom software development,
                  AI-powered solutions, and enterprise-grade SaaS platforms.
                </p>
              </div>

              <div className="bg-gradient-to-r from-moe-blue/10 to-moe-green/10 rounded-2xl p-6 border-l-4 border-moe-blue">
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700 mb-3">
                  To become the leading software house and SaaS provider in Southeast Asia, known for AI-first
                  development and delivering solutions that drive real business growth.
                </p>
              </div>

              <p>
                We build custom software for clients <strong>and</strong> our own SaaS products — <strong>MojiChat</strong>, <strong>Cybiri</strong>, and <strong>AITaoHoo</strong>.
                This means we understand product thinking, scalability, and user experience from the inside out.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-moe-pink/20 via-moe-purple/20 to-moe-blue/20 rounded-3xl p-8 md:p-12">
              <div className="absolute inset-0 bg-white/50 rounded-3xl backdrop-blur-sm"></div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-moe-pink to-moe-purple rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Three Products, One Mission
                </h3>

                <p className="text-gray-600 mb-8">
                  Empowering businesses with AI-driven customer engagement, comprehensive cybersecurity,
                  and developer-first infrastructure through our cloud-native SaaS platforms.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-white/70 rounded-xl">
                    <img src="/icons/mojiChatIcon.png" alt="MojiChat" className="w-10 h-10 mx-auto mb-2" />
                    <div className="text-sm font-bold text-gray-900">MojiChat</div>
                    <div className="text-xs text-gray-500">AI Chatbot</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-xl">
                    <img src="/icons/Logo_Cybiri.png" alt="Cybiri" className="w-10 h-10 mx-auto mb-2" />
                    <div className="text-sm font-bold text-gray-900">Cybiri</div>
                    <div className="text-xs text-gray-500">Cybersecurity</div>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-xl">
                    <img src="/icons/aitaohoo-icon.png" alt="AITaoHoo" className="w-10 h-10 mx-auto mb-2" />
                    <div className="text-sm font-bold text-gray-900">AITaoHoo</div>
                    <div className="text-xs text-gray-500">Tunneling</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-moe-yellow rounded-full opacity-60 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-moe-green rounded-full opacity-60 animate-pulse-slow"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            Our{' '}
            <span className="gradient-text">Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
