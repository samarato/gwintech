import React, { useState } from 'react';
import { X, Code, Layers, Users, Zap, GitBranch, Database, Shield, Monitor, Settings, ArrowRight, CheckCircle, Clock, Target, Repeat, Palette, Smartphone, Globe, TestTube, Cpu, Cloud } from 'lucide-react';

interface SoftwareDevelopmentDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const SoftwareDevelopmentDetail: React.FC<SoftwareDevelopmentDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Code },
    { id: 'sdlc', label: 'SDLC & Methodology', icon: Repeat },
    { id: 'agile', label: 'Agile & Scrum', icon: Target },
    { id: 'uxui', label: 'UX/UI Design', icon: Palette },
    { id: 'techstack', label: 'Tech Stack', icon: Layers }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Development Excellence</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Full-stack development services with modern technologies, agile methodologies, and scalable architecture following industry best practices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Development Expertise</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Layers className="h-6 w-6 text-moe-pink mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Clean Architecture</h4>
                <p className="text-gray-600">Domain-Driven Design with CQRS, Event Sourcing, and modular monolith patterns</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Code className="h-6 w-6 text-moe-purple mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Full-Stack Development</h4>
                <p className="text-gray-600">.NET 9, React 18, TypeScript, Node.js with modern frameworks and libraries</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Database className="h-6 w-6 text-moe-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Database Design</h4>
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis, Entity Framework, and optimized data modeling</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-moe-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Security & Authorization</h4>
                <p className="text-gray-600">JWT, OAuth 2.0, RBAC, multi-tenancy, and enterprise security patterns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-moe-pink/10 to-moe-purple/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Approach</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="h-5 w-5 text-moe-pink" />
                <span className="font-medium">Agile Methodology</span>
              </div>
              <p className="text-sm text-gray-600">Scrum framework with 2-week sprints and continuous delivery</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <TestTube className="h-5 w-5 text-moe-purple" />
                <span className="font-medium">Test-Driven Development</span>
              </div>
              <p className="text-sm text-gray-600">Unit, integration, and E2E testing with high code coverage</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <GitBranch className="h-5 w-5 text-moe-blue" />
                <span className="font-medium">CI/CD Pipeline</span>
              </div>
              <p className="text-sm text-gray-600">Automated testing, building, and deployment workflows</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Palette className="h-5 w-5 text-moe-green" />
                <span className="font-medium">UX/UI Design</span>
              </div>
              <p className="text-sm text-gray-600">User-centered design with modern UI frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSDLC = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Development Life Cycle</h2>
        <p className="text-lg text-gray-600">
          Comprehensive SDLC approach ensuring quality, maintainability, and scalability
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">SDLC Process Flow</h3>
        <svg viewBox="0 0 800 600" className="w-full h-auto">
          <rect width="800" height="600" fill="#f8fafc" />
          
          {/* Planning Phase */}
          <rect x="50" y="50" width="120" height="80" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="110" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Planning</text>
          <text x="110" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Requirements</text>
          <text x="110" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Analysis</text>
          
          {/* Design Phase */}
          <rect x="200" y="50" width="120" height="80" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" rx="8" />
          <text x="260" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Design</text>
          <text x="260" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Architecture</text>
          <text x="260" y="115" textAnchor="middle" className="fill-gray-600 text-xs">UI/UX</text>
          
          {/* Development Phase */}
          <rect x="350" y="50" width="120" height="80" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="410" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Development</text>
          <text x="410" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Coding</text>
          <text x="410" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Integration</text>
          
          {/* Testing Phase */}
          <rect x="500" y="50" width="120" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="560" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Testing</text>
          <text x="560" y="100" textAnchor="middle" className="fill-gray-600 text-xs">QA</text>
          <text x="560" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Validation</text>
          
          {/* Deployment Phase */}
          <rect x="650" y="50" width="120" height="80" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2" rx="8" />
          <text x="710" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Deployment</text>
          <text x="710" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Release</text>
          <text x="710" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Production</text>
          
          {/* Maintenance Phase */}
          <rect x="350" y="180" width="120" height="80" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" rx="8" />
          <text x="410" y="210" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Maintenance</text>
          <text x="410" y="230" textAnchor="middle" className="fill-gray-600 text-xs">Support</text>
          <text x="410" y="245" textAnchor="middle" className="fill-gray-600 text-xs">Updates</text>
          
          {/* Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          <line x1="170" y1="90" x2="200" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="320" y1="90" x2="350" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="470" y1="90" x2="500" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="620" y1="90" x2="650" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="710" y1="130" x2="410" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
          
          {/* Detailed Activities */}
          <rect x="50" y="320" width="700" height="250" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" rx="8" />
          <text x="400" y="345" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Phase Activities & Deliverables</text>
          
          {/* Planning Details */}
          <rect x="70" y="360" width="130" height="180" fill="#ffffff" stroke="#ec4899" strokeWidth="1" rx="4" />
          <text x="135" y="380" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Planning</text>
          <text x="75" y="400" className="fill-gray-600 text-xs">• Requirements gathering</text>
          <text x="75" y="415" className="fill-gray-600 text-xs">• Stakeholder analysis</text>
          <text x="75" y="430" className="fill-gray-600 text-xs">• Project scope definition</text>
          <text x="75" y="445" className="fill-gray-600 text-xs">• Timeline estimation</text>
          <text x="75" y="460" className="fill-gray-600 text-xs">• Risk assessment</text>
          <text x="75" y="475" className="fill-gray-600 text-xs">• Resource planning</text>
          <text x="75" y="495" className="fill-gray-800 text-xs font-medium">Deliverables:</text>
          <text x="75" y="510" className="fill-gray-600 text-xs">• Project charter</text>
          <text x="75" y="525" className="fill-gray-600 text-xs">• Requirements document</text>
          
          {/* Design Details */}
          <rect x="220" y="360" width="130" height="180" fill="#ffffff" stroke="#0ea5e9" strokeWidth="1" rx="4" />
          <text x="285" y="380" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Design</text>
          <text x="225" y="400" className="fill-gray-600 text-xs">• System architecture</text>
          <text x="225" y="415" className="fill-gray-600 text-xs">• Database design</text>
          <text x="225" y="430" className="fill-gray-600 text-xs">• UI/UX wireframes</text>
          <text x="225" y="445" className="fill-gray-600 text-xs">• API specifications</text>
          <text x="225" y="460" className="fill-gray-600 text-xs">• Security design</text>
          <text x="225" y="475" className="fill-gray-600 text-xs">• Performance planning</text>
          <text x="225" y="495" className="fill-gray-800 text-xs font-medium">Deliverables:</text>
          <text x="225" y="510" className="fill-gray-600 text-xs">• Architecture diagrams</text>
          <text x="225" y="525" className="fill-gray-600 text-xs">• Design mockups</text>
          
          {/* Development Details */}
          <rect x="370" y="360" width="130" height="180" fill="#ffffff" stroke="#10b981" strokeWidth="1" rx="4" />
          <text x="435" y="380" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Development</text>
          <text x="375" y="400" className="fill-gray-600 text-xs">• Code implementation</text>
          <text x="375" y="415" className="fill-gray-600 text-xs">• Unit testing</text>
          <text x="375" y="430" className="fill-gray-600 text-xs">• Code reviews</text>
          <text x="375" y="445" className="fill-gray-600 text-xs">• Integration testing</text>
          <text x="375" y="460" className="fill-gray-600 text-xs">• Documentation</text>
          <text x="375" y="475" className="fill-gray-600 text-xs">• Version control</text>
          <text x="375" y="495" className="fill-gray-800 text-xs font-medium">Deliverables:</text>
          <text x="375" y="510" className="fill-gray-600 text-xs">• Source code</text>
          <text x="375" y="525" className="fill-gray-600 text-xs">• Technical docs</text>
          
          {/* Testing Details */}
          <rect x="520" y="360" width="130" height="180" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" rx="4" />
          <text x="585" y="380" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Testing</text>
          <text x="525" y="400" className="fill-gray-600 text-xs">• System testing</text>
          <text x="525" y="415" className="fill-gray-600 text-xs">• Performance testing</text>
          <text x="525" y="430" className="fill-gray-600 text-xs">• Security testing</text>
          <text x="525" y="445" className="fill-gray-600 text-xs">• User acceptance</text>
          <text x="525" y="460" className="fill-gray-600 text-xs">• Bug fixing</text>
          <text x="525" y="475" className="fill-gray-600 text-xs">• Regression testing</text>
          <text x="525" y="495" className="fill-gray-800 text-xs font-medium">Deliverables:</text>
          <text x="525" y="510" className="fill-gray-600 text-xs">• Test reports</text>
          <text x="525" y="525" className="fill-gray-600 text-xs">• Bug reports</text>
        </svg>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Automated testing pipelines</li>
            <li>• Code quality metrics</li>
            <li>• Performance benchmarking</li>
            <li>• Security vulnerability scanning</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Technical specifications</li>
            <li>• API documentation</li>
            <li>• User manuals</li>
            <li>• Deployment guides</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Performance monitoring</li>
            <li>• User feedback integration</li>
            <li>• Regular updates</li>
            <li>• Technology upgrades</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderAgile = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Agile & Scrum Methodology</h2>
        <p className="text-lg text-gray-600">
          Iterative development approach with continuous delivery and customer collaboration
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Scrum Framework</h3>
        <svg viewBox="0 0 800 500" className="w-full h-auto">
          <rect width="800" height="500" fill="#f8fafc" />
          
          {/* Sprint Cycle */}
          <circle cx="400" cy="250" r="180" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="10,5" />
          <text x="400" y="70" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Sprint Cycle (2 weeks)</text>
          
          {/* Sprint Planning */}
          <rect x="150" y="150" width="100" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="8" />
          <text x="200" y="175" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Sprint</text>
          <text x="200" y="190" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Planning</text>
          
          {/* Daily Standup */}
          <rect x="350" y="100" width="100" height="60" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="400" y="125" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Daily</text>
          <text x="400" y="140" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Standup</text>
          
          {/* Sprint Review */}
          <rect x="550" y="150" width="100" height="60" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="600" y="175" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Sprint</text>
          <text x="600" y="190" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Review</text>
          
          {/* Sprint Retrospective */}
          <rect x="350" y="340" width="100" height="60" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="2" rx="8" />
          <text x="400" y="365" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Sprint</text>
          <text x="400" y="380" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Retrospective</text>
          
          {/* Development Work */}
          <rect x="300" y="200" width="200" height="100" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="400" y="225" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Development Work</text>
          <text x="400" y="245" textAnchor="middle" className="fill-gray-600 text-xs">• Coding</text>
          <text x="400" y="260" textAnchor="middle" className="fill-gray-600 text-xs">• Testing</text>
          <text x="400" y="275" textAnchor="middle" className="fill-gray-600 text-xs">• Code Review</text>
          <text x="400" y="290" textAnchor="middle" className="fill-gray-600 text-xs">• Documentation</text>
          
          {/* Arrows */}
          <defs>
            <marker id="scrum-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          <line x1="250" y1="180" x2="300" y2="220" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" />
          <line x1="400" y1="160" x2="400" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" />
          <line x1="500" y1="220" x2="550" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" />
          <line x1="400" y1="300" x2="400" y2="340" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" />
          
          {/* Product Backlog */}
          <rect x="50" y="300" width="120" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="110" y="325" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Product</text>
          <text x="110" y="340" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Backlog</text>
          <text x="110" y="360" textAnchor="middle" className="fill-gray-600 text-xs">User Stories</text>
          
          {/* Sprint Backlog */}
          <rect x="630" y="300" width="120" height="80" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="690" y="325" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Sprint</text>
          <text x="690" y="340" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Backlog</text>
          <text x="690" y="360" textAnchor="middle" className="fill-gray-600 text-xs">Selected Items</text>
          
          <line x1="170" y1="320" x2="200" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" strokeDasharray="5,5" />
          <line x1="600" y1="200" x2="630" y2="320" stroke="#6b7280" strokeWidth="2" markerEnd="url(#scrum-arrow)" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-6 w-6 text-moe-blue mr-2" />
              Scrum Events
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Sprint Planning</h4>
                <p className="text-sm text-gray-600 mb-2">Define sprint goals and select backlog items</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Duration: 4 hours (2-week sprint)</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Daily Standup</h4>
                <p className="text-sm text-gray-600 mb-2">Synchronize team activities and identify blockers</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Duration: 15 minutes daily</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Sprint Review</h4>
                <p className="text-sm text-gray-600 mb-2">Demonstrate completed work to stakeholders</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Duration: 2 hours</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Sprint Retrospective</h4>
                <p className="text-sm text-gray-600 mb-2">Reflect on process and identify improvements</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Duration: 1.5 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-moe-green mr-2" />
              Scrum Roles
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Product Owner</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Defines product vision and requirements</li>
                  <li>• Manages product backlog</li>
                  <li>• Prioritizes features and user stories</li>
                  <li>• Accepts or rejects work results</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Scrum Master</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Facilitates Scrum events</li>
                  <li>• Removes impediments</li>
                  <li>• Coaches team on Scrum practices</li>
                  <li>• Protects team from distractions</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Development Team</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cross-functional and self-organizing</li>
                  <li>• Develops working software</li>
                  <li>• Estimates effort and complexity</li>
                  <li>• Commits to sprint goals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Agile Principles in Practice</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <div className="flex items-center mb-2">
              <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
              <h4 className="font-semibold text-gray-900">Customer Collaboration</h4>
            </div>
            <p className="text-sm text-gray-600">Regular feedback and involvement throughout development</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <div className="flex items-center mb-2">
              <Zap className="h-5 w-5 text-purple-600 mr-2" />
              <h4 className="font-semibold text-gray-900">Responding to Change</h4>
            </div>
            <p className="text-sm text-gray-600">Adapting to changing requirements and priorities</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <div className="flex items-center mb-2">
              <Code className="h-5 w-5 text-purple-600 mr-2" />
              <h4 className="font-semibold text-gray-900">Working Software</h4>
            </div>
            <p className="text-sm text-gray-600">Delivering functional software every sprint</p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-purple-200">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <h4 className="font-semibold text-gray-900">Individual Interactions</h4>
            </div>
            <p className="text-sm text-gray-600">Emphasizing people and communication over processes</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUXUI = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">UX/UI Design Excellence</h2>
        <p className="text-lg text-gray-600">
          User-centered design approach with modern UI frameworks and accessibility standards
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Process</h3>
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          <rect width="800" height="400" fill="#f8fafc" />
          
          {/* Research Phase */}
          <rect x="50" y="50" width="120" height="80" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="110" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Research</text>
          <text x="110" y="100" textAnchor="middle" className="fill-gray-600 text-xs">User Analysis</text>
          <text x="110" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Market Study</text>
          
          {/* Design Phase */}
          <rect x="200" y="50" width="120" height="80" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" rx="8" />
          <text x="260" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Design</text>
          <text x="260" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Wireframes</text>
          <text x="260" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Prototypes</text>
          
          {/* Testing Phase */}
          <rect x="350" y="50" width="120" height="80" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="410" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Testing</text>
          <text x="410" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Usability</text>
          <text x="410" y="115" textAnchor="middle" className="fill-gray-600 text-xs">A/B Testing</text>
          
          {/* Implementation Phase */}
          <rect x="500" y="50" width="120" height="80" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="560" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Implementation</text>
          <text x="560" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Development</text>
          <text x="560" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Integration</text>
          
          {/* Iteration Phase */}
          <rect x="650" y="50" width="120" height="80" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2" rx="8" />
          <text x="710" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Iteration</text>
          <text x="710" y="100" textAnchor="middle" className="fill-gray-600 text-xs">Feedback</text>
          <text x="710" y="115" textAnchor="middle" className="fill-gray-600 text-xs">Refinement</text>
          
          {/* Arrows */}
          <defs>
            <marker id="design-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          <line x1="170" y1="90" x2="200" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#design-arrow)" />
          <line x1="320" y1="90" x2="350" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#design-arrow)" />
          <line x1="470" y1="90" x2="500" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#design-arrow)" />
          <line x1="620" y1="90" x2="650" y2="90" stroke="#6b7280" strokeWidth="2" markerEnd="url(#design-arrow)" />
          <line x1="710" y1="130" x2="110" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#design-arrow)" strokeDasharray="5,5" />
          
          {/* Design Tools */}
          <rect x="50" y="220" width="700" height="150" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" rx="8" />
          <text x="400" y="245" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Design Tools & Technologies</text>
          
          <rect x="70" y="260" width="150" height="100" fill="#ffffff" stroke="#f59e0b" strokeWidth="1" rx="4" />
          <text x="145" y="280" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Research Tools</text>
          <text x="75" y="300" className="fill-gray-600 text-xs">• User interviews</text>
          <text x="75" y="315" className="fill-gray-600 text-xs">• Analytics tools</text>
          <text x="75" y="330" className="fill-gray-600 text-xs">• Heatmap analysis</text>
          <text x="75" y="345" className="fill-gray-600 text-xs">• Survey platforms</text>
          
          <rect x="240" y="260" width="150" height="100" fill="#ffffff" stroke="#0ea5e9" strokeWidth="1" rx="4" />
          <text x="315" y="280" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Design Tools</text>
          <text x="245" y="300" className="fill-gray-600 text-xs">• Figma/Sketch</text>
          <text x="245" y="315" className="fill-gray-600 text-xs">• Adobe Creative Suite</text>
          <text x="245" y="330" className="fill-gray-600 text-xs">• Principle/Framer</text>
          <text x="245" y="345" className="fill-gray-600 text-xs">• InVision/Marvel</text>
          
          <rect x="410" y="260" width="150" height="100" fill="#ffffff" stroke="#10b981" strokeWidth="1" rx="4" />
          <text x="485" y="280" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Frontend Frameworks</text>
          <text x="415" y="300" className="fill-gray-600 text-xs">• React/Next.js</text>
          <text x="415" y="315" className="fill-gray-600 text-xs">• Tailwind CSS</text>
          <text x="415" y="330" className="fill-gray-600 text-xs">• Material-UI</text>
          <text x="415" y="345" className="fill-gray-600 text-xs">• Styled Components</text>
          
          <rect x="580" y="260" width="150" height="100" fill="#ffffff" stroke="#ec4899" strokeWidth="1" rx="4" />
          <text x="655" y="280" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Testing Tools</text>
          <text x="585" y="300" className="fill-gray-600 text-xs">• Hotjar/FullStory</text>
          <text x="585" y="315" className="fill-gray-600 text-xs">• Maze/UserTesting</text>
          <text x="585" y="330" className="fill-gray-600 text-xs">• Optimizely</text>
          <text x="585" y="345" className="fill-gray-600 text-xs">• Google Analytics</text>
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Palette className="h-6 w-6 text-moe-pink mr-2" />
              Design Principles
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-moe-pink rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">User-Centered Design</h4>
                  <p className="text-sm text-gray-600">Focus on user needs, behaviors, and goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-moe-purple rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Accessibility First</h4>
                  <p className="text-sm text-gray-600">WCAG 2.1 compliance and inclusive design</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-moe-blue rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Responsive Design</h4>
                  <p className="text-sm text-gray-600">Mobile-first approach with adaptive layouts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-moe-green rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Performance Optimization</h4>
                  <p className="text-sm text-gray-600">Fast loading times and smooth interactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Smartphone className="h-6 w-6 text-moe-blue mr-2" />
              Modern UI Components
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Component Library</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Buttons</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Forms</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Navigation</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Cards</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Modals</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tables</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Animation & Interactions</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Framer Motion</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">CSS Transitions</span>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">Micro-interactions</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Design Systems</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Atomic Design</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Style Guide</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Brand Identity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechStack = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
        <p className="text-lg text-gray-600">
          Modern, scalable technologies for enterprise-grade applications
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Stack Architecture</h3>
        <svg viewBox="0 0 800 600" className="w-full h-auto">
          <rect width="800" height="600" fill="#f8fafc" />
          
          {/* Frontend Layer */}
          <rect x="50" y="50" width="700" height="100" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="400" y="80" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Frontend Layer</text>
          
          <rect x="80" y="110" width="120" height="30" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" rx="4" />
          <text x="140" y="130" textAnchor="middle" className="fill-gray-800 text-xs font-medium">React 18 + TypeScript</text>
          
          <rect x="220" y="110" width="120" height="30" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" rx="4" />
          <text x="280" y="130" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Next.js 14</text>
          
          <rect x="360" y="110" width="120" height="30" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" rx="4" />
          <text x="420" y="130" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Tailwind CSS</text>
          
          <rect x="500" y="110" width="120" height="30" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" rx="4" />
          <text x="560" y="130" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Vite</text>
          
          <rect x="640" y="110" width="80" height="30" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" rx="4" />
          <text x="680" y="130" textAnchor="middle" className="fill-gray-800 text-xs font-medium">PWA</text>
          
          {/* Backend Layer */}
          <rect x="50" y="180" width="700" height="100" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" rx="8" />
          <text x="400" y="210" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Backend Layer</text>
          
          <rect x="80" y="240" width="120" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="140" y="260" textAnchor="middle" className="fill-gray-800 text-xs font-medium">.NET 9 + C#</text>
          
          <rect x="220" y="240" width="120" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="280" y="260" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Clean Architecture</text>
          
          <rect x="360" y="240" width="120" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="420" y="260" textAnchor="middle" className="fill-gray-800 text-xs font-medium">CQRS + MediatR</text>
          
          <rect x="500" y="240" width="120" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="560" y="260" textAnchor="middle" className="fill-gray-800 text-xs font-medium">FastAPI</text>
          
          <rect x="640" y="240" width="80" height="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="680" y="260" textAnchor="middle" className="fill-gray-800 text-xs font-medium">JWT Auth</text>
          
          {/* Database Layer */}
          <rect x="50" y="310" width="700" height="100" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="400" y="340" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">Database Layer</text>
          
          <rect x="80" y="370" width="120" height="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="140" y="390" textAnchor="middle" className="fill-gray-800 text-xs font-medium">PostgreSQL</text>
          
          <rect x="220" y="370" width="120" height="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="280" y="390" textAnchor="middle" className="fill-gray-800 text-xs font-medium">MongoDB</text>
          
          <rect x="360" y="370" width="120" height="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="420" y="390" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Redis Cache</text>
          
          <rect x="500" y="370" width="120" height="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="560" y="390" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Entity Framework</text>
          
          <rect x="640" y="370" width="80" height="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="680" y="390" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Prisma</text>
          
          {/* DevOps Layer */}
          <rect x="50" y="440" width="700" height="100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="400" y="470" textAnchor="middle" className="fill-gray-900 text-lg font-semibold">DevOps & Infrastructure</text>
          
          <rect x="80" y="500" width="120" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="140" y="520" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Docker</text>
          
          <rect x="220" y="500" width="120" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="280" y="520" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Kubernetes</text>
          
          <rect x="360" y="500" width="120" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="420" y="520" textAnchor="middle" className="fill-gray-800 text-xs font-medium">GitHub Actions</text>
          
          <rect x="500" y="500" width="120" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="560" y="520" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Terraform</text>
          
          <rect x="640" y="500" width="80" height="30" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="680" y="520" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Monitoring</text>
          
          {/* Arrows */}
          <defs>
            <marker id="tech-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          <line x1="400" y1="150" x2="400" y2="180" stroke="#6b7280" strokeWidth="2" markerEnd="url(#tech-arrow)" />
          <line x1="400" y1="280" x2="400" y2="310" stroke="#6b7280" strokeWidth="2" markerEnd="url(#tech-arrow)" />
          <line x1="400" y1="410" x2="400" y2="440" stroke="#6b7280" strokeWidth="2" markerEnd="url(#tech-arrow)" />
        </svg>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Globe className="h-5 w-5 text-moe-pink mr-2" />
            Frontend Technologies
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-pink-200">
              <h4 className="font-medium text-gray-900">React Ecosystem</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">React 18</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">TypeScript</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-pink-200">
              <h4 className="font-medium text-gray-900">Styling & UI</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Tailwind</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Material-UI</span>
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Cpu className="h-5 w-5 text-moe-blue mr-2" />
            Backend Technologies
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <h4 className="font-medium text-gray-900">.NET Ecosystem</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">.NET 9</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">C#</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">ASP.NET Core</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <h4 className="font-medium text-gray-900">Architecture</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Clean Arch</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CQRS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">DDD</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Cloud className="h-5 w-5 text-moe-green mr-2" />
            DevOps & Cloud
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <h4 className="font-medium text-gray-900">Containerization</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Docker</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Kubernetes</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Helm</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <h4 className="font-medium text-gray-900">CI/CD</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">GitHub Actions</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Azure DevOps</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Terraform</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Best Practices</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <TestTube className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Testing Strategy</h4>
                <p className="text-sm text-gray-600">Unit tests, integration tests, E2E testing with Jest, Cypress, and xUnit</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Security</h4>
                <p className="text-sm text-gray-600">OWASP compliance, JWT authentication, RBAC, and secure coding practices</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Monitor className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Monitoring</h4>
                <p className="text-sm text-gray-600">Application monitoring, logging, and performance tracking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <GitBranch className="h-5 w-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Version Control</h4>
                <p className="text-sm text-gray-600">Git workflow, code reviews, and automated quality checks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-moe-pink to-moe-purple rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Software Development Services</h1>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-moe-pink text-moe-pink'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'sdlc' && renderSDLC()}
          {activeTab === 'agile' && renderAgile()}
          {activeTab === 'uxui' && renderUXUI()}
          {activeTab === 'techstack' && renderTechStack()}
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentDetail; 