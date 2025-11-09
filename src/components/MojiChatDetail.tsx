import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Zap,
  Globe,
  Shield,
  Brain,
  Code,
  CheckCircle,
  X,
  Users,
  Settings,
  TrendingUp,
  Clock,
  MessageSquare
} from 'lucide-react'

interface MojiChatDetailProps {
  isOpen: boolean
  onClose: () => void
}

const MojiChatDetail: React.FC<MojiChatDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  const features = [
    {
      icon: Globe,
      title: 'Omnichannel Integration',
      description: 'Connect all your messaging platforms in one unified dashboard',
      capabilities: ['LINE OA, Facebook, Instagram', 'TikTok, Shopee, Telegram', 'Web Widget & more']
    },
    {
      icon: Brain,
      title: 'Intelligent AI Conversations',
      description: 'Advanced AI powered by LangChain for natural, context-aware conversations',
      capabilities: ['Context retention', 'Multi-turn dialogue', 'Intent recognition']
    },
    {
      icon: Users,
      title: 'Unified Customer Management',
      description: 'Manage all customer conversations from one centralized platform',
      capabilities: ['Single inbox', 'Customer profiles', 'Conversation history']
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboard with real-time insights and metrics',
      capabilities: ['Response time tracking', 'Sentiment analysis', 'Performance metrics']
    },
    {
      icon: Settings,
      title: 'Automation & Workflows',
      description: 'Automate repetitive tasks and create custom workflows',
      capabilities: ['Auto-responses', 'Custom triggers', 'API integration']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance',
      capabilities: ['End-to-end encryption', 'GDPR compliant', 'Data protection']
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Customer Support',
      description: 'Automate order inquiries, product questions, and shipping updates across Shopee, LINE, Facebook',
      benefits: ['50% reduction in support workload', '24/7 availability', 'Multi-platform management']
    },
    {
      title: 'Social Commerce Sales',
      description: 'Engage customers on Instagram, TikTok, and Facebook with AI-powered product recommendations',
      benefits: ['30% increase in conversions', 'Automated lead qualification', 'Cross-platform campaigns']
    },
    {
      title: 'LINE OA Automation',
      description: 'Automate LINE Official Account responses with intelligent AI conversations',
      benefits: ['Instant customer engagement', 'Rich menu integration', 'Broadcast automation']
    },
    {
      title: 'Omnichannel Inbox',
      description: 'Manage all messaging platforms from one unified dashboard with team collaboration',
      benefits: ['Single unified inbox', 'Team assignment', 'Response templates']
    }
  ]

  const integrations = [
    'LINE Official Account', 'Facebook Messenger', 'Instagram DM', 'TikTok',
    'Shopee Chat', 'Telegram', 'Web Widget', 'WhatsApp',
    'WeChat', 'Viber', 'CRM Systems', 'E-commerce Platforms'
  ]

  const techStack = [
    { name: 'LangChain', description: 'Advanced AI orchestration framework' },
    { name: 'LangGraph', description: 'Multi-agent conversation flows' },
    { name: 'Vector Database', description: 'RAG for knowledge retrieval' },
    { name: 'OpenAI / Claude', description: 'State-of-the-art language models' },
    { name: 'WebSocket', description: 'Real-time streaming responses' },
    { name: 'REST API', description: 'Easy integration with any platform' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center p-3">
                <img
                  src="/icons/mojiChatIcon.png"
                  alt="MojiChat AI Chatbot Platform - Enterprise omnichannel messaging solution"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  MojiChat AI Chatbot
                </h2>
                <p className="text-gray-600">
                  Omnichannel conversational AI for customer engagement and support
                </p>
              </div>
            </div>
            <button
              onClick={() => onClose?.()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: MessageSquare },
              { id: 'features', label: 'Features', icon: Zap },
              { id: 'usecases', label: 'Use Cases', icon: TrendingUp },
              { id: 'technology', label: 'Technology', icon: Code }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">Omnichannel AI Chatbot Platform</h3>
                  <p className="text-lg opacity-90 mb-6">
                    MojiChat is an enterprise-grade omnichannel AI chatbot platform that connects LINE OA,
                    Facebook, Instagram, TikTok, Shopee, Telegram, and more. Manage all customer conversations
                    from one unified dashboard with intelligent AI responses.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">99.9%</div>
                      <div className="text-sm opacity-80">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">&lt;1s</div>
                      <div className="text-sm opacity-80">Response Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">100+</div>
                      <div className="text-sm opacity-80">Languages</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm opacity-80">Availability</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <Bot className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h4>
                    <p className="text-gray-700">
                      Leverages cutting-edge AI models including GPT-4, Claude, and custom-trained models
                      to understand context, intent, and provide accurate responses.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6">
                    <Clock className="w-12 h-12 text-purple-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Always Available</h4>
                    <p className="text-gray-700">
                      Never miss a customer inquiry. MojiChat works 24/7, handling unlimited conversations
                      simultaneously while maintaining consistent quality.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">What Makes MojiChat Different?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Context-Aware:</strong> Maintains conversation history and understands complex multi-turn dialogues
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Customizable Personality:</strong> Train the chatbot to match your brand voice and tone
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Enterprise-Ready:</strong> Scalable infrastructure with SOC 2 compliance and GDPR ready
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Seamless Integration:</strong> Works with your existing tools and platforms
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Powerful Features</h3>
                  <p className="text-gray-600 mb-6">
                    MojiChat comes packed with enterprise features to handle any conversational AI use case
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="bg-gray-50 rounded-xl p-6 card-hover">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Supported Platforms</h4>
                  <p className="text-gray-600 mb-4">
                    Connect MojiChat to all major messaging and social commerce platforms
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {integrations.map((integration) => (
                      <div key={integration} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        {integration}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'usecases' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Real-World Applications</h3>
                  <p className="text-gray-600 mb-6">
                    See how businesses across industries are using MojiChat to improve customer experience
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {useCases.map((useCase, index) => (
                    <div key={useCase.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h4>
                      <p className="text-gray-600 mb-4">{useCase.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</div>
                        {useCase.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Success Stories</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                      <div className="text-sm text-gray-700">Reduction in support costs</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                      <div className="text-sm text-gray-700">Customer satisfaction rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                      <div className="text-sm text-gray-700">Increase in engagement</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'technology' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Technology Stack</h3>
                  <p className="text-gray-600 mb-6">
                    Built on cutting-edge AI technologies for maximum performance and reliability
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <Code className="w-5 h-5 text-indigo-600 mr-2" />
                        <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Architecture Overview</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Multi-Agent System:</strong> Specialized agents for different conversation types
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">RAG Pipeline:</strong> Retrieval-Augmented Generation for accurate responses
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Real-time Processing:</strong> WebSocket connections for streaming responses
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Scalable Infrastructure:</strong> Auto-scaling cloud deployment
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Deploy MojiChat?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get started with a free consultation and see how MojiChat can transform your customer engagement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                      Schedule Demo
                    </button>
                    <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition-colors">
                      View Documentation
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MojiChatDetail
