import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'Custom Software Development',
    'Web Application',
    'Mobile App',
    'AI / Machine Learning',
    'System Integration',
    'Cybersecurity',
    'Cloud & DevOps',
    'SaaS Product (MojiChat / Cybiri)',
    'Other',
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto link with form data
    const subject = encodeURIComponent(`[Gwin Tech] Project Inquiry: ${formData.projectType}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:info@gwintech.co?subject=${subject}&body=${body}`, '_blank')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@gwintech.co',
      description: "We'll get back to you within 24 hours",
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+66 98 828 4666',
      description: 'Available Monday to Friday, 9 AM - 6 PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '752/58 Khum Thong-Lam Toi Ting Rd, Lat Krabang, Bangkok',
      description: 'Visit our office in Bangkok, Thailand',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Let's Build{' '}
            <span className="gradient-text">Something Great</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project. Get a free assessment and a custom quote within 24 hours.
            No commitment, just clarity on your next move.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h3 className="text-2xl font-display font-bold mb-2">Get Your Free Project Assessment</h3>
              <p className="text-gray-500 mb-6 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    Your message has been prepared. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-moe-pink/50 focus:border-moe-pink outline-none transition-all text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-moe-pink/50 focus:border-moe-pink outline-none transition-all text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+66 XX XXX XXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-moe-pink/50 focus:border-moe-pink outline-none transition-all text-gray-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-moe-pink/50 focus:border-moe-pink outline-none transition-all text-gray-900 bg-white"
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-moe-pink/50 focus:border-moe-pink outline-none transition-all text-gray-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-moe-pink to-moe-purple text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center group"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Get My Free Quote
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. No spam, ever. Your information is 100% confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Or reach us directly</h3>
              <p className="text-gray-600 mb-8">
                We're here to help you bring your technology vision to life.
                Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-primary-600 font-medium mb-1">{info.info}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-3">
                <MessageCircle className="w-6 h-6" />
                <h4 className="text-lg font-bold">Quick Response Guarantee</h4>
              </div>
              <p className="text-sm opacity-90">
                We respond to all inquiries within 24 hours. For urgent matters, call us directly.
                Every conversation starts with a free, no-obligation consultation.
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-3"
            >
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-lg font-bold text-gray-900">NDA</div>
                <div className="text-xs text-gray-500">Protected</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-lg font-bold text-gray-900">Free</div>
                <div className="text-xs text-gray-500">Consultation</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                <div className="text-lg font-bold text-gray-900">24hr</div>
                <div className="text-xs text-gray-500">Response</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
