import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Network, 
  Code, 
  GitBranch, 
  Monitor,
  Layers,
  Zap,
  Lock,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react'

interface InfrastructureDetailProps {
  isOpen: boolean
  onClose: () => void
}

const InfrastructureDetail: React.FC<InfrastructureDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview')

  if (!isOpen) return null

  const services = [
    {
      icon: Cloud,
      title: 'VPC (Virtual Private Cloud)',
      description: 'Isolated network environment with custom IP ranges',
      features: ['Custom CIDR blocks', 'Multi-AZ deployment', 'Security groups']
    },
    {
      icon: Server,
      title: 'CCE (Cloud Container Engine)',
      description: 'Managed Kubernetes service for containerized applications',
      features: ['Auto-scaling', 'Load balancing', 'CI/CD integration']
    },
    {
      icon: Database,
      title: 'OBS (Object Storage Service)',
      description: 'Scalable object storage for data and backups',
      features: ['Terraform state management', 'Data encryption', 'Lifecycle policies']
    },
    {
      icon: Shield,
      title: 'WAF (Web Application Firewall)',
      description: 'Advanced security protection for web applications',
      features: ['DDoS protection', 'SQL injection prevention', 'Real-time monitoring']
    },
    {
      icon: Network,
      title: 'ELB (Elastic Load Balancer)',
      description: 'Distribute traffic across multiple instances',
      features: ['Health checks', 'SSL termination', 'Auto-scaling']
    },
    {
      icon: Monitor,
      title: 'LTS (Log Tank Service)',
      description: 'Centralized logging and monitoring solution',
      features: ['Real-time logs', 'Alerting', 'Analytics dashboard']
    }
  ]

  const terraformFeatures = [
    'Infrastructure as Code (IaC)',
    'Multi-environment deployment',
    'State management with OBS',
    'Automated provisioning',
    'Version control integration',
    'Disaster recovery setup'
  ]

  const regions = [
    { name: 'AP-Bangkok', code: 'ap-southeast-2', zones: ['2a', '2b', '2c'] },
    { name: 'AP-Singapore', code: 'ap-southeast-1', zones: ['1a', '1b', '1c'] },
    { name: 'CN-Hong Kong', code: 'ap-southeast-3', zones: ['3a', '3b', '3c'] }
  ]

  const InfrastructureDiagram = () => (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
      <svg viewBox="0 0 800 600" className="w-full h-auto">
        {/* Background */}
        <defs>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Huawei Cloud Region */}
        <rect x="50" y="50" width="700" height="500" rx="20" fill="url(#cloudGradient)" opacity="0.1" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="400" y="35" textAnchor="middle" className="fill-blue-600 text-lg font-bold">Huawei Cloud - AP-Bangkok Region</text>

        {/* VPC */}
        <rect x="100" y="100" width="600" height="400" rx="15" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
        <text x="120" y="125" className="fill-blue-700 text-sm font-semibold">VPC (Virtual Private Cloud)</text>

        {/* Availability Zones */}
        <rect x="130" y="150" width="160" height="320" rx="10" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1"/>
        <text x="210" y="175" textAnchor="middle" className="fill-blue-600 text-xs font-medium">AZ-2a</text>

        <rect x="320" y="150" width="160" height="320" rx="10" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1"/>
        <text x="400" y="175" textAnchor="middle" className="fill-blue-600 text-xs font-medium">AZ-2b</text>

        <rect x="510" y="150" width="160" height="320" rx="10" fill="#f0f9ff" stroke="#0369a1" strokeWidth="1"/>
        <text x="590" y="175" textAnchor="middle" className="fill-blue-600 text-xs font-medium">AZ-2c (Preferred)</text>

        {/* Load Balancer */}
        <rect x="350" y="120" width="100" height="20" rx="5" fill="url(#serverGradient)"/>
        <text x="400" y="135" textAnchor="middle" className="fill-white text-xs font-medium">ELB</text>

        {/* CCE Clusters */}
        <circle cx="210" cy="220" r="25" fill="#10b981" opacity="0.8"/>
        <text x="210" y="225" textAnchor="middle" className="fill-white text-xs font-bold">CCE</text>

        <circle cx="400" cy="220" r="25" fill="#10b981" opacity="0.8"/>
        <text x="400" y="225" textAnchor="middle" className="fill-white text-xs font-bold">CCE</text>

        <circle cx="590" cy="220" r="25" fill="#10b981" opacity="0.8"/>
        <text x="590" y="225" textAnchor="middle" className="fill-white text-xs font-bold">CCE</text>

        {/* Databases */}
        <rect x="180" y="280" width="60" height="40" rx="5" fill="#f59e0b"/>
        <text x="210" y="300" textAnchor="middle" className="fill-white text-xs font-medium">RDS</text>

        <rect x="370" y="280" width="60" height="40" rx="5" fill="#f59e0b"/>
        <text x="400" y="300" textAnchor="middle" className="fill-white text-xs font-medium">RDS</text>

        <rect x="560" y="280" width="60" height="40" rx="5" fill="#f59e0b"/>
        <text x="590" y="300" textAnchor="middle" className="fill-white text-xs font-medium">RDS</text>

        {/* Storage */}
        <rect x="180" y="350" width="60" height="30" rx="5" fill="#8b5cf6"/>
        <text x="210" y="370" textAnchor="middle" className="fill-white text-xs font-medium">OBS</text>

        <rect x="370" y="350" width="60" height="30" rx="5" fill="#8b5cf6"/>
        <text x="400" y="370" textAnchor="middle" className="fill-white text-xs font-medium">OBS</text>

        <rect x="560" y="350" width="60" height="30" rx="5" fill="#8b5cf6"/>
        <text x="590" y="370" textAnchor="middle" className="fill-white text-xs font-medium">OBS</text>

        {/* NAT Gateway */}
        <rect x="350" y="420" width="100" height="25" rx="5" fill="#ef4444"/>
        <text x="400" y="437" textAnchor="middle" className="fill-white text-xs font-medium">NAT Gateway</text>

        {/* Security */}
        <rect x="120" y="480" width="80" height="20" rx="5" fill="#dc2626"/>
        <text x="160" y="495" textAnchor="middle" className="fill-white text-xs font-medium">WAF</text>

        <rect x="600" y="480" width="80" height="20" rx="5" fill="#dc2626"/>
        <text x="640" y="495" textAnchor="middle" className="fill-white text-xs font-medium">Security</text>

        {/* Connections */}
        <line x1="400" y1="140" x2="210" y2="195" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="400" y1="140" x2="400" y2="195" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="400" y1="140" x2="590" y2="195" stroke="#3b82f6" strokeWidth="2"/>

        <line x1="210" y1="245" x2="210" y2="280" stroke="#10b981" strokeWidth="2"/>
        <line x1="400" y1="245" x2="400" y2="280" stroke="#10b981" strokeWidth="2"/>
        <line x1="590" y1="245" x2="590" y2="280" stroke="#10b981" strokeWidth="2"/>

        {/* Internet */}
        <ellipse cx="400" cy="20" rx="60" ry="15" fill="#fbbf24"/>
        <text x="400" y="25" textAnchor="middle" className="fill-white text-xs font-medium">Internet</text>
        <line x1="400" y1="35" x2="400" y2="120" stroke="#f59e0b" strokeWidth="3"/>
      </svg>
    </div>
  )

  const TerraformCode = () => (
    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
      <pre className="text-green-400 text-sm">
        <code>{`# Huawei Cloud Infrastructure with Terraform
terraform {
  required_providers {
    huaweicloud = {
      source  = "huaweicloud/huaweicloud"
      version = "~> 1.40.0"
    }
  }
}

# Configure the Huawei Cloud Provider
provider "huaweicloud" {
  region = "ap-southeast-2"
}

# Create VPC
resource "huaweicloud_vpc" "main" {
  name = "gwintech-vpc"
  cidr = "10.0.0.0/16"
}

# Create CCE Cluster
resource "huaweicloud_cce_cluster" "main" {
  name         = "gwintech-cce"
  flavor_id    = "cce.s1.small"
  vpc_id       = huaweicloud_vpc.main.id
  subnet_id    = huaweicloud_vpc_subnet.main.id
  cluster_type = "VirtualMachine"
}

# Create Load Balancer
resource "huaweicloud_lb_loadbalancer" "main" {
  name          = "gwintech-elb"
  vip_subnet_id = huaweicloud_vpc_subnet.main.id
}`}</code>
      </pre>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">
                Infrastructure Consulting
              </h2>
              <p className="text-gray-600">
                Huawei Cloud Solutions with Terraform Infrastructure as Code
              </p>
            </div>
            <button 
              onClick={() => onClose?.()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'overview', label: 'Overview', icon: Cloud },
              { id: 'architecture', label: 'Architecture', icon: Layers },
              { id: 'terraform', label: 'Terraform IaC', icon: Code },
              { id: 'regions', label: 'Regions', icon: Network }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {services.map((service, index) => (
                    <div key={service.title} className="bg-gray-50 rounded-xl p-6 card-hover">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Our Infrastructure Consulting?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">🚀 Rapid Deployment</h4>
                      <p className="opacity-90">Infrastructure provisioned in minutes, not hours</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">🔒 Enterprise Security</h4>
                      <p className="opacity-90">Bank-level security with WAF and encryption</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">📈 Auto-Scaling</h4>
                      <p className="opacity-90">Automatically scale based on demand</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">💰 Cost Optimization</h4>
                      <p className="opacity-90">Pay only for what you use with smart resource management</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Huawei Cloud Architecture Diagram</h3>
                  <p className="text-gray-600 mb-6">
                    Multi-AZ deployment with high availability and disaster recovery
                  </p>
                  <InfrastructureDiagram />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">Implementation Steps</h4>
                    <ol className="space-y-2 text-sm text-blue-800">
                      <li>1. Create EPS (Elastic Public Service)</li>
                      <li>2. Set up OBS for Terraform State</li>
                      <li>3. Configure VPC with subnets</li>
                      <li>4. Deploy ELB (Load Balancer)</li>
                      <li>5. Configure DNS and NAT Gateway</li>
                      <li>6. Set up SWR (Software Repository)</li>
                      <li>7. Deploy CCE (Kubernetes)</li>
                      <li>8. Configure LTS (Logging)</li>
                      <li>9. Set up Cloud Backup</li>
                      <li>10. Configure WAF (Security)</li>
                    </ol>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li>• High availability across 3 AZs</li>
                      <li>• Automated scaling and load balancing</li>
                      <li>• Comprehensive monitoring and logging</li>
                      <li>• Enterprise-grade security</li>
                      <li>• Disaster recovery capabilities</li>
                      <li>• Cost-effective resource utilization</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'terraform' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Infrastructure as Code with Terraform</h3>
                  <p className="text-gray-600 mb-6">
                    Manage your entire Huawei Cloud infrastructure with version-controlled Terraform configurations
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-4">Terraform Features</h4>
                      <ul className="space-y-2">
                        {terraformFeatures.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold mb-4">Supported Resources</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        <div>• VPC & Subnets</div>
                        <div>• CCE Clusters</div>
                        <div>• Load Balancers</div>
                        <div>• Object Storage</div>
                        <div>• DNS Zones</div>
                        <div>• NAT Gateways</div>
                        <div>• Security Groups</div>
                        <div>• Auto Scaling</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4">Sample Terraform Configuration</h4>
                    <TerraformCode />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">🚀 Get Started</h4>
                    <p className="text-yellow-700 mb-4">
                      Ready to deploy your infrastructure? Our team will provide you with:
                    </p>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Complete Terraform modules</li>
                      <li>• CI/CD pipeline integration</li>
                      <li>• State management setup</li>
                      <li>• Documentation and training</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'regions' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Huawei Cloud Regions</h3>
                  <p className="text-gray-600 mb-6">
                    Deploy your infrastructure across multiple regions for optimal performance and compliance
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {regions.map((region) => (
                      <div key={region.code} className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">Region: {region.code}</p>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-800">Availability Zones:</h5>
                          {region.zones.map((zone) => (
                            <div key={zone} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {region.code}{zone}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Let's discuss your infrastructure requirements and create a customized solution for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                      Schedule Consultation
                    </button>
                    <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
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

export default InfrastructureDetail 