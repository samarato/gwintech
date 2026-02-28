import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const FAQ: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How much does custom software development cost?',
      answer:
        'Project costs depend on scope, complexity, and timeline. We offer competitive pricing with 40-60% savings compared to US/EU rates without compromising quality. Every project starts with a free assessment where we provide a detailed, transparent quote with no hidden fees.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Timelines vary by project size. A simple web application takes 4-8 weeks, a mobile app 8-16 weeks, and a complex enterprise system 3-6 months. We use Agile methodology with 2-week sprints so you see progress from week one.',
    },
    {
      question: 'Do I own the source code?',
      answer:
        'Yes, 100%. You receive full source code ownership and all intellectual property rights upon project completion. No vendor lock-in, no hidden licensing fees. The code is yours to maintain, modify, or transfer.',
    },
    {
      question: 'How do you handle communication during the project?',
      answer:
        'We assign a dedicated project manager to every project. You get weekly sprint demos, daily standups (if desired), access to our project management tools (Jira/Trello), and real-time communication via Slack or your preferred channel. Our Bangkok timezone (GMT+7) provides good overlap with both Asian and Western business hours.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'Our team is proficient in React, Next.js, Vue.js, Node.js, Python, TypeScript, Flutter, React Native, AWS, Azure, GCP, Docker, Kubernetes, and AI/ML frameworks including LangChain, TensorFlow, and PyTorch. We select the best technology stack for each project based on your specific needs.',
    },
    {
      question: 'Do you provide support after launch?',
      answer:
        'Every project includes post-launch support. We offer maintenance packages with SLA-backed response times, 24/7 monitoring, regular updates, security patches, and performance optimization. We are your long-term technology partner.',
    },
    {
      question: 'Can you work under NDA?',
      answer:
        'Absolutely. We sign NDAs before any project discussion begins. Your business ideas, proprietary data, and trade secrets are fully protected. Confidentiality is standard practice for every engagement.',
    },
    {
      question: 'What if requirements change during development?',
      answer:
        'That is expected and welcomed. Our Agile process is designed to accommodate evolving requirements. Changes are discussed during sprint planning, assessed for impact, and integrated smoothly. We believe software should adapt to your business, not the other way around.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about working with Gwin Tech.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
