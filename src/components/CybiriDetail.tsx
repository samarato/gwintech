import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Zap,
  Globe,
  Brain,
  Code,
  CheckCircle,
  X,
  Users,
  Settings,
  TrendingUp,
  Lock,
  Search,
  AlertTriangle,
  Cloud,
  GitBranch,
  ExternalLink
} from 'lucide-react'

interface CybiriDetailProps {
  isOpen: boolean
  onClose: () => void
}

const CybiriDetail: React.FC<CybiriDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  const features = [
    {
      icon: Search,
      title: 'Automated Pentesting',
      description: 'Comprehensive security scanning with DAST, SAST, SCA, and API Security',
      capabilities: ['Web & API Testing (OWASP ZAP, Nuclei)', 'Source Code Analysis (Semgrep)', 'Dependency Scanning (Trivy)']
    },
    {
      icon: Brain,
      title: 'AI Security Engine',
      description: 'AI-powered vulnerability analysis with automatic remediation code generation',
      capabilities: ['AI DevFix - Auto Code Fixes', 'Intelligent Risk Prioritization', 'Natural Language Querying']
    },
    {
      icon: Globe,
      title: 'Attack Surface Management',
      description: 'Continuous monitoring of internet-facing assets and shadow IT detection',
      capabilities: ['Subdomain Discovery', 'DNS Change Detection', 'Technology Fingerprinting']
    },
    {
      icon: Zap,
      title: 'SOAR & Incident Response',
      description: 'Security orchestration with automated playbooks and incident tracking',
      capabilities: ['Automated Playbooks', 'Jira & ServiceNow Integration', 'Approval Workflows']
    },
    {
      icon: Users,
      title: 'UEBA Analytics',
      description: 'User and Entity Behavior Analytics for insider threat detection',
      capabilities: ['Behavior Baseline Creation', 'Anomaly Detection', 'MITRE ATT&CK Mapping']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Security',
      description: 'Cloud Security Posture Management across AWS, Azure, and GCP',
      capabilities: ['CSPM Scanning', 'Container & K8s Security', 'Compliance Monitoring']
    }
  ]

  const useCases = [
    {
      title: 'DevSecOps Integration',
      description: 'Embed security into your CI/CD pipeline with automated scanning on every commit and pull request',
      benefits: ['Scan on commit & PR', 'Merge blocking on findings', 'Developer-friendly reporting']
    },
    {
      title: 'Vulnerability Management',
      description: 'Centralized vulnerability tracking with SLA-based prioritization and AI-powered deduplication',
      benefits: ['CVSS v3.1 scoring', '8 lifecycle states', 'Bulk operations & reporting']
    },
    {
      title: 'Compliance & Audit',
      description: 'Meet regulatory requirements with comprehensive compliance reporting and evidence collection',
      benefits: ['OWASP, PCI-DSS, HIPAA, ISO 27001', 'Automated compliance reports', 'Audit trail & evidence']
    },
    {
      title: 'Penetration Testing',
      description: 'Full pentester workspace with collaboration tools, evidence attachment, and methodology support',
      benefits: ['OWASP ASVS & PTES', 'Real-time collaboration', 'Combined manual + automated reports']
    }
  ]

  const securityDomains = [
    'Automated Pentesting', 'Attack Surface Management', 'Vulnerability Management', 'AI Security Engine',
    'SOAR', 'UEBA', 'Multi-Cloud Compliance', 'WAF & DDoS Protection',
    'Zero Trust', 'Bot Detection', 'Dark Web Monitoring', 'Breach Simulation'
  ]

  const techStack = [
    { name: 'OWASP ZAP & Nuclei', description: 'Dynamic application security testing' },
    { name: 'Semgrep & Trivy', description: 'Static analysis & container scanning' },
    { name: 'OpenAI & Claude', description: 'AI-powered analysis & DevFix' },
    { name: 'Kubernetes Native', description: 'Scalable microservices architecture' },
    { name: 'SignalR Real-time', description: 'Live collaboration & updates' },
    { name: 'PostgreSQL & Redis', description: 'Enterprise-grade data layer' }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/icons/Logo_Cybiri.png"
                  alt="Cybiri Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  Cybiri Security Platform
                </h2>
                <p className="text-gray-600">
                  Security for Everyone - Enterprise-grade Cybersecurity SaaS
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
              { id: 'overview', label: 'Overview', icon: Shield },
              { id: 'features', label: 'Features', icon: Zap },
              { id: 'usecases', label: 'Use Cases', icon: TrendingUp },
              { id: 'technology', label: 'Technology', icon: Code }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-emerald-600 shadow-sm'
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
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">Unified Cybersecurity Platform</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Cybiri unifies 7 major security domains into a single platform: Automated Pentesting,
                    Attack Surface Management, Vulnerability Management, AI Security Engine, SOAR, UEBA,
                    and Multi-cloud Compliance. Deliver world-class security without requiring large, specialized teams.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">120+</div>
                      <div className="text-sm opacity-80">Security Features</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">8</div>
                      <div className="text-sm opacity-80">Scanning Engines</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">24</div>
                      <div className="text-sm opacity-80">Feature Modules</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm opacity-80">Continuous Monitoring</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <Brain className="w-12 h-12 text-emerald-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">AI-Powered DevFix</h4>
                    <p className="text-gray-700">
                      Automatically generate remediation code for vulnerabilities using GPT-4 and Claude.
                      Get developer-ready fixes with context-aware code suggestions.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6">
                    <GitBranch className="w-12 h-12 text-teal-600 mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">DevSecOps Native</h4>
                    <p className="text-gray-700">
                      Seamlessly integrate with GitHub Actions, GitLab CI, Bitbucket, and Azure DevOps.
                      Block vulnerable merges and scan on every commit.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Why Choose Cybiri?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Unified Platform:</strong> Replace multiple point solutions with one comprehensive security platform
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>AI-First Approach:</strong> Intelligent prioritization, auto-remediation, and natural language querying
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Developer Friendly:</strong> Designed for DevSecOps with CI/CD integration and developer-level reporting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>Cost Effective:</strong> More affordable than Rapid7, Qualys, Tenable with superior features
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
                  <h3 className="text-2xl font-bold mb-4">Security Capabilities</h3>
                  <p className="text-gray-600 mb-6">
                    Cybiri provides 120+ features across 24 modules covering all aspects of enterprise security
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="bg-gray-50 rounded-xl p-6 card-hover">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability) => (
                          <li key={capability} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4">Security Domains</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive coverage across all major security domains
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {securityDomains.map((domain) => (
                      <div key={domain} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-gray-200">
                        {domain}
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
                    See how organizations use Cybiri to strengthen their security posture
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

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Target Industries</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">Enterprise</div>
                      <div className="text-sm text-gray-700">Large organizations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600 mb-2">Financial</div>
                      <div className="text-sm text-gray-700">Banks & Fintech</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600 mb-2">Government</div>
                      <div className="text-sm text-gray-700">Public sector</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">Telecom</div>
                      <div className="text-sm text-gray-700">Communications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600 mb-2">SME</div>
                      <div className="text-sm text-gray-700">Mid-size companies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600 mb-2">DevSecOps</div>
                      <div className="text-sm text-gray-700">Security teams</div>
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
                    Built on modern, enterprise-grade technologies for maximum security and scalability
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {techStack.map((tech) => (
                    <div key={tech.name} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center mb-2">
                        <Code className="w-5 h-5 text-emerald-600 mr-2" />
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
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Multi-Tenant SaaS:</strong> Secure isolation for 200+ concurrent organizations
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">8 Scanning Engines:</strong> DAST, SAST, SCA, Mobile, Infrastructure, Cloud, Container, API
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Real-time Collaboration:</strong> SignalR-based live updates and pentester workspace
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-1.5"></div>
                      <div>
                        <strong className="text-white">Enterprise Security:</strong> JWT, MFA, SSO (Google, Azure AD, SAML 2.0), RBAC
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Organization?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get started with Cybiri and experience enterprise-grade security without the complexity.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://cybiri.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      Visit Cybiri
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-emerald-600 transition-colors text-center"
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

export default CybiriDetail
