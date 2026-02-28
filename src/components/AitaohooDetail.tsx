import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Zap,
  Shield,
  Brain,
  Code,
  CheckCircle,
  X,
  Terminal,
  TrendingUp,
  Lock,
  Network,
  BarChart3,
  ExternalLink
} from 'lucide-react'

interface AitaohooDetailProps {
  isOpen: boolean
  onClose: () => void
}

const AitaohooDetail: React.FC<AitaohooDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  const features = [
    {
      icon: Network,
      title: 'Secure Tunneling',
      description: 'Expose local services to the internet through encrypted tunnels with automatic TLS certificates',
      capabilities: ['HTTP/HTTPS Tunnels', 'TCP Tunnels', 'End-to-End Encryption']
    },
    {
      icon: Globe,
      title: 'Custom Subdomains',
      description: 'Use memorable custom subdomains instead of random identifiers for your tunnels',
      capabilities: ['Branded URLs', 'Persistent Subdomains', 'Wildcard Support']
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboard',
      description: 'Monitor traffic, bandwidth, and connection status with a comprehensive web dashboard',
      capabilities: ['Traffic Analytics', 'Bandwidth Monitoring', 'Connection Logs']
    },
    {
      icon: Terminal,
      title: 'CLI & Web Management',
      description: 'Manage tunnels via a powerful command-line interface or intuitive web dashboard',
      capabilities: ['One-command Setup', 'Web Dashboard', 'API Access']
    },
    {
      icon: Shield,
      title: 'Self-Hosted & Private',
      description: 'Deploy on your own infrastructure for complete data privacy and control',
      capabilities: ['Full Data Ownership', 'On-premise Deployment', 'No Third-party Dependencies']
    },
    {
      icon: Zap,
      title: 'Rust-Powered Performance',
      description: 'Built with Rust for blazing-fast performance, memory safety, and minimal resource usage',
      capabilities: ['Low Latency', 'Memory Safe', 'Minimal CPU Overhead']
    }
  ]

  const useCases = [
    {
      title: 'Local Development & Testing',
      description: 'Share your local development server with teammates or clients without deploying to a staging environment',
      benefits: ['Instant public URLs', 'No deployment needed', 'Real-time collaboration']
    },
    {
      title: 'Webhook Development',
      description: 'Receive webhooks from services like Stripe, GitHub, or Slack directly on your local machine',
      benefits: ['Direct webhook delivery', 'Request inspection', 'Easy debugging']
    },
    {
      title: 'Demo & Presentations',
      description: 'Showcase your work-in-progress applications to stakeholders with custom branded URLs',
      benefits: ['Professional URLs', 'No staging setup', 'Instant access']
    },
    {
      title: 'IoT & Edge Devices',
      description: 'Access IoT devices, home servers, or edge computing nodes securely from anywhere',
      benefits: ['Remote device access', 'Secure connections', 'No port forwarding']
    }
  ]

  const techStack = [
    { name: 'Rust (Backend)', description: 'High-performance tunnel server with memory safety guarantees' },
    { name: 'Next.js (Frontend)', description: 'Modern React-based dashboard with server-side rendering' },
    { name: 'Automatic TLS', description: 'SSL/TLS certificates provisioned and renewed automatically' },
    { name: 'Stripe Billing', description: 'Integrated subscription management and payment processing' },
    { name: 'Docker Ready', description: 'Containerized deployment for easy self-hosting' },
    { name: 'REST API', description: 'Programmatic tunnel management and automation' }
  ]

  const pricingTiers = ['Free — For Hobbyists', 'Pro $10/mo — For Teams', 'Enterprise $50/mo — Advanced Needs']

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/icons/aitaohoo-icon.png"
                  alt="AITaoHoo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  AITaoHoo
                </h2>
                <p className="text-gray-600">
                  Self-Hosted Tunneling Platform — Expose Local Services to the World
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
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'features', label: 'Features', icon: Zap },
              { id: 'usecases', label: 'Use Cases', icon: TrendingUp },
              { id: 'technology', label: 'Technology', icon: Code }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-sm'
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
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">Self-Hosted Tunneling Platform</h3>
                  <p className="text-lg opacity-90 mb-6">
                    AITaoHoo lets you expose your local services to the internet securely. Built with Rust for
                    blazing-fast performance and Next.js for a modern dashboard experience. Deploy on your own
                    infrastructure and keep full control of your data.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">Rust</div>
                      <div className="text-sm opacity-80">Powered Backend</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">TLS</div>
                      <div className="text-sm opacity-80">Auto Certificates</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">&lt;1min</div>
                      <div className="text-sm opacity-80">Setup Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">100%</div>
                      <div className="text-sm opacity-80">Self-Hosted</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-orange-50 rounded-xl p-6">
                    <Lock className="w-12 h-12 text-orange-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h4>
                    <p className="text-gray-700">
                      Self-hosted architecture means your data never touches third-party servers.
                      Deploy on your own infrastructure for complete privacy and compliance.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6">
                    <Terminal className="w-12 h-12 text-amber-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Developer Experience</h4>
                    <p className="text-gray-700">
                      Get up and running in under a minute with the CLI. Manage tunnels from the
                      command line or the intuitive web dashboard — your choice.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Why Choose AITaoHoo?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Self-Hosted:</strong> Full control over your tunneling infrastructure — no data leaves your servers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Rust Performance:</strong> Blazing-fast tunnel server with minimal resource consumption and memory safety
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Transparent Pricing:</strong> Free tier for hobbyists, affordable plans for teams — no hidden fees
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Custom Subdomains:</strong> Professional, branded URLs instead of random identifiers
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
                  <h3 className="text-2xl font-bold mb-4">Platform Features</h3>
                  <p className="text-gray-600 mb-6">
                    Everything you need to securely expose local services with enterprise-grade reliability
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="bg-gray-50 rounded-xl p-6 card-hover">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Pricing Tiers</h4>
                  <p className="text-gray-600 mb-4">
                    Transparent pricing for every stage of growth
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {pricingTiers.map((tier) => (
                      <div key={tier} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        {tier}
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
                  <h3 className="text-2xl font-bold mb-4">Real-World Use Cases</h3>
                  <p className="text-gray-600 mb-6">
                    See how developers and teams use AITaoHoo to streamline their workflows
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {useCases.map((useCase) => (
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

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Who Uses AITaoHoo?</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">Developers</div>
                      <div className="text-sm text-gray-700">Individual & hobby projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600 mb-2">Startups</div>
                      <div className="text-sm text-gray-700">Fast prototyping & demos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">DevOps</div>
                      <div className="text-sm text-gray-700">Infrastructure & tooling</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600 mb-2">IoT Teams</div>
                      <div className="text-sm text-gray-700">Remote device access</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">Agencies</div>
                      <div className="text-sm text-gray-700">Client demos & reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600 mb-2">Enterprise</div>
                      <div className="text-sm text-gray-700">Secure internal access</div>
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
                    Built with modern, high-performance technologies for reliability and speed
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <Code className="w-5 h-5 text-orange-600 mr-2" />
                        <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-bold text-white mb-4">Architecture Highlights</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Rust Tunnel Server:</strong> Memory-safe, zero-cost abstractions for maximum throughput and minimal latency
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Next.js Dashboard:</strong> Server-side rendered React application with real-time updates
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Automatic TLS:</strong> SSL certificates provisioned and renewed automatically via Let's Encrypt
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Self-Hosted:</strong> Docker-ready deployment with full infrastructure control and data sovereignty
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Tunnels?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get started with AITaoHoo and expose your local services securely in under a minute.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://aitaohoo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Visit AITaoHoo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-orange-600 transition-colors text-center"
                    >
                      Request Demo
                    </a>
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

export default AitaohooDetail
