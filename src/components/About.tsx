import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Sparkles, Globe, Users } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We pour our hearts into every project, ensuring the highest quality standards.',
    },
    {
      icon: Sparkles,
      title: 'Innovation with Charm',
      description: 'Combining cutting-edge technology with delightful user experiences.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bringing international best practices to local and global markets.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Building long-term relationships based on trust and mutual success.',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About{' '}
              <span className="gradient-text">GWIN TECH</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                <strong>GWIN TECH CO., LTD.</strong> is a professional IT services company headquartered in Bangkok, Thailand,
                dedicated to delivering innovative technology solutions that drive business success.
              </p>

              <div className="bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-2xl p-6 border-l-4 border-moe-pink">
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700 mb-3">
                  To empower businesses through cutting-edge technology solutions, combining technical excellence
                  with strategic insights to accelerate digital transformation.
                </p>
              </div>

              <div className="bg-gradient-to-r from-moe-blue/10 to-moe-green/10 rounded-2xl p-6 border-l-4 border-moe-blue">
                <h3 className="font-bold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-700 mb-3">
                  To be the leading IT solutions provider in Thailand and the region, recognized for innovation,
                  reliability, and exceptional client service.
                </p>
              </div>

              <p>
                Located in the heart of Bangkok's technology district, <strong>GWIN TECH</strong> brings together
                a team of experienced professionals committed to delivering world-class IT services.
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
                  Excellence in IT Services
                </h3>

                <p className="text-gray-600 mb-8">
                  We deliver comprehensive IT solutions ranging from infrastructure consulting to AI implementation,
                  backed by our expertise in enterprise technology and cloud services.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">100+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-600">50+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
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