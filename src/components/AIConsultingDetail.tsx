import React, { useState } from 'react';
import { X, Brain, Zap, Network, Code, Database, Shield, Cpu, GitBranch, MessageSquare, Search, Calculator, Bot, Users, Layers, ArrowRight } from 'lucide-react';

interface AIConsultingDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultingDetail: React.FC<AIConsultingDetailProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Brain },
    { id: 'architecture', label: 'Architecture', icon: Network },
    { id: 'langchain', label: 'LangChain & LangGraph', icon: GitBranch },
    { id: 'agents', label: 'AI Agents', icon: Bot },
    { id: 'tools', label: 'Tools & Integration', icon: Code }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Consulting Excellence</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge AI solutions powered by LangChain, LangGraph, and intelligent multi-agent systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our AI Expertise</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Brain className="h-6 w-6 text-moe-pink mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Multi-Agent Systems</h4>
                <p className="text-gray-600">Design and implement intelligent agent ecosystems using LangChain and LangGraph</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-moe-purple mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Real-time AI Processing</h4>
                <p className="text-gray-600">Streaming responses and real-time AI interactions with FastAPI integration</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Database className="h-6 w-6 text-moe-blue mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Vector Databases & RAG</h4>
                <p className="text-gray-600">Advanced retrieval systems with Milvus, Redis, and PostgreSQL integration</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-moe-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Enterprise Security</h4>
                <p className="text-gray-600">JWT authentication, role-based access, and secure API endpoints</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-moe-pink/10 to-moe-purple/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Technologies</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <GitBranch className="h-5 w-5 text-moe-pink" />
                <span className="font-medium">LangChain</span>
              </div>
              <p className="text-sm text-gray-600">Agent orchestration framework</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Network className="h-5 w-5 text-moe-purple" />
                <span className="font-medium">LangGraph</span>
              </div>
              <p className="text-sm text-gray-600">State management & workflows</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Cpu className="h-5 w-5 text-moe-blue" />
                <span className="font-medium">FastAPI</span>
              </div>
              <p className="text-sm text-gray-600">High-performance API server</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <Database className="h-5 w-5 text-moe-green" />
                <span className="font-medium">Vector DB</span>
              </div>
              <p className="text-sm text-gray-600">Milvus & Redis integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI System Architecture</h2>
        <p className="text-lg text-gray-600">
          Multi-layered architecture following Domain-Driven Design principles
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <svg viewBox="0 0 800 600" className="w-full h-auto">
          {/* Background */}
          <rect width="800" height="600" fill="#f8fafc" />
          
          {/* API Layer */}
          <rect x="50" y="50" width="700" height="80" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" rx="8" />
          <text x="400" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">API Layer (FastAPI)</text>
          <text x="400" y="100" textAnchor="middle" className="fill-gray-600 text-xs">REST Endpoints • JWT Auth • Streaming Responses</text>
          
          {/* Agent Layer */}
          <rect x="50" y="150" width="700" height="100" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" rx="8" />
          <text x="400" y="180" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Agent Layer (LangChain + LangGraph)</text>
          
          {/* Genie Agent */}
          <rect x="80" y="200" width="150" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="155" y="225" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🧞 Genie Agent</text>
          
          {/* Pirate Agent */}
          <rect x="250" y="200" width="150" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="325" y="225" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🏴‍☠️ Pirate Agent</text>
          
          {/* State Management */}
          <rect x="420" y="200" width="150" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="495" y="225" textAnchor="middle" className="fill-gray-800 text-xs font-medium">State Management</text>
          
          {/* Tool Router */}
          <rect x="590" y="200" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="650" y="225" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Tool Router</text>
          
          {/* Tools Layer */}
          <rect x="50" y="270" width="700" height="80" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="400" y="300" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Tools & Services Layer</text>
          
          {/* Individual Tools */}
          <rect x="80" y="320" width="100" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="3" />
          <text x="130" y="337" textAnchor="middle" className="fill-gray-800 text-xs">🔍 Tavily Search</text>
          
          <rect x="200" y="320" width="100" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="3" />
          <text x="250" y="337" textAnchor="middle" className="fill-gray-800 text-xs">🧮 Calculator</text>
          
          <rect x="320" y="320" width="100" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="3" />
          <text x="370" y="337" textAnchor="middle" className="fill-gray-800 text-xs">🔬 Science Search</text>
          
          <rect x="440" y="320" width="100" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="3" />
          <text x="490" y="337" textAnchor="middle" className="fill-gray-800 text-xs">📊 RAG System</text>
          
          <rect x="560" y="320" width="100" height="25" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="3" />
          <text x="610" y="337" textAnchor="middle" className="fill-gray-800 text-xs">🔐 Auth Tools</text>
          
          {/* Infrastructure Layer */}
          <rect x="50" y="370" width="700" height="100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="400" y="400" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">Infrastructure Layer</text>
          
          {/* Database Services */}
          <rect x="80" y="420" width="120" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="140" y="445" textAnchor="middle" className="fill-gray-800 text-xs font-medium">PostgreSQL</text>
          
          <rect x="220" y="420" width="120" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="280" y="445" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Redis Cache</text>
          
          <rect x="360" y="420" width="120" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="420" y="445" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Milvus Vector DB</text>
          
          <rect x="500" y="420" width="120" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="560" y="445" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Docker Services</text>
          
          {/* External Services */}
          <rect x="50" y="490" width="700" height="80" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2" rx="8" />
          <text x="400" y="520" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">External Services</text>
          
          <rect x="150" y="540" width="120" height="25" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1" rx="3" />
          <text x="210" y="557" textAnchor="middle" className="fill-gray-800 text-xs">OpenAI API</text>
          
          <rect x="290" y="540" width="120" height="25" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1" rx="3" />
          <text x="350" y="557" textAnchor="middle" className="fill-gray-800 text-xs">Azure OpenAI</text>
          
          <rect x="430" y="540" width="120" height="25" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1" rx="3" />
          <text x="490" y="557" textAnchor="middle" className="fill-gray-800 text-xs">Tavily API</text>
          
          {/* Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          {/* Vertical arrows */}
          <line x1="400" y1="130" x2="400" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="250" x2="400" y2="270" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="350" x2="400" y2="370" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <line x1="400" y1="470" x2="400" y2="490" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain-Driven Design</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Modular architecture with clear boundaries</li>
            <li>• Separation of concerns across layers</li>
            <li>• Scalable and maintainable codebase</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Microservices Ready</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Docker containerization</li>
            <li>• API-first architecture</li>
            <li>• Independent service scaling</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Production Ready</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Health checks and monitoring</li>
            <li>• Error handling and logging</li>
            <li>• Performance optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderLangChain = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">LangChain & LangGraph Implementation</h2>
        <p className="text-lg text-gray-600">
          Advanced AI orchestration with state management and tool integration
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <GitBranch className="h-6 w-6 text-moe-blue mr-2" />
              LangGraph State Management
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">State Definition</h4>
                <pre className="text-xs text-gray-600 overflow-x-auto">
{`class State(InputState):
    messages: Annotated[Sequence[AnyMessage], add_messages]
    is_last_step: bool
    retrieved_documents: List[Document]
    extracted_entities: Dict[str, Any]
    embeddings_cache: Dict[str, List[float]]`}
                </pre>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Graph Workflow</h4>
                <pre className="text-xs text-gray-600 overflow-x-auto">
{`workflow = StateGraph(State)
workflow.add_node("agent", call_model)
workflow.add_node("tools", ToolNode(TOOLS))
workflow.add_edge(START, "agent")
workflow.add_conditional_edges("agent", should_continue)`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Network className="h-6 w-6 text-moe-purple mr-2" />
              Agent Execution Flow
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-moe-purple rounded-full flex items-center justify-center text-white text-sm font-semibold">1</div>
                <div>
                  <p className="font-medium text-gray-900">Input Processing</p>
                  <p className="text-sm text-gray-600">Message validation and state initialization</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-moe-blue rounded-full flex items-center justify-center text-white text-sm font-semibold">2</div>
                <div>
                  <p className="font-medium text-gray-900">Model Invocation</p>
                  <p className="text-sm text-gray-600">LLM processes input with tool binding</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-moe-green rounded-full flex items-center justify-center text-white text-sm font-semibold">3</div>
                <div>
                  <p className="font-medium text-gray-900">Tool Execution</p>
                  <p className="text-sm text-gray-600">Dynamic tool calling based on context</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-moe-pink rounded-full flex items-center justify-center text-white text-sm font-semibold">4</div>
                <div>
                  <p className="font-medium text-gray-900">Response Generation</p>
                  <p className="text-sm text-gray-600">Streaming response with state updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">LangGraph Workflow Visualization</h3>
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          <rect width="800" height="400" fill="#f8fafc" />
          
          {/* Start Node */}
          <circle cx="100" cy="200" r="30" fill="#10b981" stroke="#059669" strokeWidth="2" />
          <text x="100" y="205" textAnchor="middle" className="fill-white text-sm font-semibold">START</text>
          
          {/* Agent Node */}
          <rect x="200" y="170" width="100" height="60" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" rx="8" />
          <text x="250" y="195" textAnchor="middle" className="fill-white text-sm font-semibold">AGENT</text>
          <text x="250" y="210" textAnchor="middle" className="fill-white text-xs">call_model()</text>
          
          {/* Decision Diamond */}
          <polygon points="400,200 430,170 460,200 430,230" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <text x="430" y="205" textAnchor="middle" className="fill-white text-xs font-semibold">TOOLS?</text>
          
          {/* Tools Node */}
          <rect x="500" y="120" width="100" height="60" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" rx="8" />
          <text x="550" y="145" textAnchor="middle" className="fill-white text-sm font-semibold">TOOLS</text>
          <text x="550" y="160" textAnchor="middle" className="fill-white text-xs">ToolNode()</text>
          
          {/* End Node */}
          <circle cx="550" cy="280" r="30" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
          <text x="550" y="285" textAnchor="middle" className="fill-white text-sm font-semibold">END</text>
          
          {/* Arrows */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          <line x1="130" y1="200" x2="200" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="300" y1="200" x2="400" y2="200" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="430" y1="170" x2="500" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="430" y1="230" x2="520" y2="280" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="550" y1="180" x2="250" y2="230" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,5" />
          
          {/* Labels */}
          <text x="165" y="190" textAnchor="middle" className="fill-gray-600 text-xs">input</text>
          <text x="350" y="190" textAnchor="middle" className="fill-gray-600 text-xs">process</text>
          <text x="465" y="140" textAnchor="middle" className="fill-gray-600 text-xs">yes</text>
          <text x="475" y="270" textAnchor="middle" className="fill-gray-600 text-xs">no</text>
          <text x="380" y="250" textAnchor="middle" className="fill-gray-600 text-xs">continue</text>
        </svg>
      </div>
    </div>
  );

  const renderAgents = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Agent Ecosystem</h2>
        <p className="text-lg text-gray-600">
          Specialized agents for different use cases and capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🧞</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Genie Agent</h3>
              <p className="text-sm text-gray-600">Internal company assistant</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Capabilities</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Internal tool access and company data</li>
                <li>• Scientific research and analysis</li>
                <li>• Document retrieval and RAG</li>
                <li>• Secure authentication and authorization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Tools Available</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">🔬 Science Search</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">🔍 Web Search</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">🧮 Calculator</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 RAG System</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-3">🏴‍☠️</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Pirate Agent</h3>
              <p className="text-sm text-gray-600">General-purpose assistant</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-gray-900 mb-2">Capabilities</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• External tool integration only</li>
                <li>• General knowledge and assistance</li>
                <li>• Web search and information retrieval</li>
                <li>• Mathematical calculations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-gray-900 mb-2">Tools Available</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🔍 Tavily Search</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🧮 Calculator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Communication Flow</h3>
        <svg viewBox="0 0 800 300" className="w-full h-auto">
          <rect width="800" height="300" fill="#f8fafc" />
          
          {/* User */}
          <circle cx="100" cy="150" r="40" fill="#3b82f6" stroke="#2563eb" strokeWidth="2" />
          <text x="100" y="155" textAnchor="middle" className="fill-white text-sm font-semibold">USER</text>
          
          {/* API Gateway */}
          <rect x="200" y="120" width="80" height="60" fill="#10b981" stroke="#059669" strokeWidth="2" rx="8" />
          <text x="240" y="145" textAnchor="middle" className="fill-white text-sm font-semibold">API</text>
          <text x="240" y="160" textAnchor="middle" className="fill-white text-xs">Gateway</text>
          
          {/* Agent Router */}
          <polygon points="350,150 380,120 410,150 380,180" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
          <text x="380" y="155" textAnchor="middle" className="fill-white text-xs font-semibold">ROUTER</text>
          
          {/* Genie Agent */}
          <rect x="480" y="80" width="100" height="60" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" rx="8" />
          <text x="530" y="105" textAnchor="middle" className="fill-white text-sm font-semibold">🧞 GENIE</text>
          <text x="530" y="120" textAnchor="middle" className="fill-white text-xs">Internal Tools</text>
          
          {/* Pirate Agent */}
          <rect x="480" y="160" width="100" height="60" fill="#ef4444" stroke="#dc2626" strokeWidth="2" rx="8" />
          <text x="530" y="185" textAnchor="middle" className="fill-white text-sm font-semibold">🏴‍☠️ PIRATE</text>
          <text x="530" y="200" textAnchor="middle" className="fill-white text-xs">External Tools</text>
          
          {/* Tools */}
          <rect x="650" y="120" width="80" height="60" fill="#6b7280" stroke="#4b5563" strokeWidth="2" rx="8" />
          <text x="690" y="145" textAnchor="middle" className="fill-white text-sm font-semibold">TOOLS</text>
          <text x="690" y="160" textAnchor="middle" className="fill-white text-xs">& Services</text>
          
          {/* Arrows */}
          <defs>
            <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
            </marker>
          </defs>
          
          <line x1="140" y1="150" x2="200" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <line x1="280" y1="150" x2="350" y2="150" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <line x1="410" y1="140" x2="480" y2="110" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <line x1="410" y1="160" x2="480" y2="190" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <line x1="580" y1="110" x2="650" y2="140" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          <line x1="580" y1="190" x2="650" y2="160" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
          
          {/* Labels */}
          <text x="170" y="140" textAnchor="middle" className="fill-gray-600 text-xs">Request</text>
          <text x="315" y="140" textAnchor="middle" className="fill-gray-600 text-xs">Route</text>
          <text x="445" y="120" textAnchor="middle" className="fill-gray-600 text-xs">Internal</text>
          <text x="445" y="210" textAnchor="middle" className="fill-gray-600 text-xs">External</text>
          <text x="615" y="120" textAnchor="middle" className="fill-gray-600 text-xs">Execute</text>
          <text x="615" y="200" textAnchor="middle" className="fill-gray-600 text-xs">Execute</text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Configuration</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Authentication & Security</h4>
            <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded overflow-x-auto">
{`# JWT Token Authentication
curl -X POST "/api/v1/auth/token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user123",
    "app_code": "ai101"
  }'`}
            </pre>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Streaming Response</h4>
            <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded overflow-x-auto">
{`# Real-time Streaming
curl -X POST "/api/v1/agents/genie/stream" \\
  -H "Authorization: Bearer <token>" \\
  -H "x-conversation-id: conv-123" \\
  -H "x-model-name: gpt-4o-mini"`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTools = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Integration</h2>
        <p className="text-lg text-gray-600">
          Comprehensive tool ecosystem for enhanced AI capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-center mb-4">
            <Search className="h-8 w-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Search Tools</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <h4 className="font-medium text-gray-900">🔍 Tavily Search</h4>
              <p className="text-sm text-gray-600">Real-time web search with domain filtering</p>
              <div className="mt-2">
                <pre className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
{`tavily_search = TavilySearch(
    max_results=5,
    topic="general",
    include_domains=[".th", "co.th", ".com"]
)`}
                </pre>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-green-100">
              <h4 className="font-medium text-gray-900">🔬 Science Search</h4>
              <p className="text-sm text-gray-600">Specialized scientific research tool</p>
              <div className="mt-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Internal Tool</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center mb-4">
            <Calculator className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Computation Tools</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-blue-100">
              <h4 className="font-medium text-gray-900">🧮 Calculator</h4>
              <p className="text-sm text-gray-600">Mathematical expression evaluator</p>
              <div className="mt-2">
                <pre className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
{`@tool
async def calculator(expression: str) -> str:
    """Perform basic mathematical calculations"""
    try:
        result = eval(expression, {"__builtins__": {}}, {})
        return f"The result of {expression} is {result}"
    except Exception as e:
        return f"Error: {str(e)}"`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Data Tools</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-purple-100">
              <h4 className="font-medium text-gray-900">📊 RAG System</h4>
              <p className="text-sm text-gray-600">Retrieval-Augmented Generation</p>
              <div className="mt-2">
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Vector DB</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Embeddings</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Similarity</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 border border-purple-100">
              <h4 className="font-medium text-gray-900">🔐 Auth Tools</h4>
              <p className="text-sm text-gray-600">Authentication and authorization</p>
              <div className="mt-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">JWT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tool Integration Architecture</h3>
        <svg viewBox="0 0 800 500" className="w-full h-auto">
          <rect width="800" height="500" fill="#f8fafc" />
          
          {/* Tool Categories */}
          <rect x="50" y="50" width="200" height="400" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" rx="8" />
          <text x="150" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">INTERNAL TOOLS</text>
          
          <rect x="300" y="50" width="200" height="400" fill="#f0f9ff" stroke="#0ea5e9" strokeWidth="2" rx="8" />
          <text x="400" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">EXTERNAL TOOLS</text>
          
          <rect x="550" y="50" width="200" height="400" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="650" y="80" textAnchor="middle" className="fill-gray-900 text-sm font-semibold">INFRASTRUCTURE</text>
          
          {/* Internal Tools */}
          <rect x="70" y="100" width="160" height="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="150" y="125" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🔬 Science Search</text>
          
          <rect x="70" y="160" width="160" height="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="150" y="185" textAnchor="middle" className="fill-gray-800 text-xs font-medium">📊 RAG System</text>
          
          <rect x="70" y="220" width="160" height="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="150" y="245" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🔐 Auth Tools</text>
          
          <rect x="70" y="280" width="160" height="40" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" rx="4" />
          <text x="150" y="305" textAnchor="middle" className="fill-gray-800 text-xs font-medium">📁 Document Tools</text>
          
          {/* External Tools */}
          <rect x="320" y="100" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="400" y="125" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🔍 Tavily Search</text>
          
          <rect x="320" y="160" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="400" y="185" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🧮 Calculator</text>
          
          <rect x="320" y="220" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="400" y="245" textAnchor="middle" className="fill-gray-800 text-xs font-medium">🌐 Web APIs</text>
          
          <rect x="320" y="280" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" rx="4" />
          <text x="400" y="305" textAnchor="middle" className="fill-gray-800 text-xs font-medium">📈 Analytics</text>
          
          {/* Infrastructure */}
          <rect x="570" y="100" width="160" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="650" y="125" textAnchor="middle" className="fill-gray-800 text-xs font-medium">PostgreSQL</text>
          
          <rect x="570" y="160" width="160" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="650" y="185" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Redis Cache</text>
          
          <rect x="570" y="220" width="160" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="650" y="245" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Milvus Vector DB</text>
          
          <rect x="570" y="280" width="160" height="40" fill="#fde68a" stroke="#d97706" strokeWidth="1" rx="4" />
          <text x="650" y="305" textAnchor="middle" className="fill-gray-800 text-xs font-medium">Docker Services</text>
          
          {/* Tool Router */}
          <rect x="350" y="350" width="100" height="60" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" rx="8" />
          <text x="400" y="375" textAnchor="middle" className="fill-white text-sm font-semibold">TOOL</text>
          <text x="400" y="390" textAnchor="middle" className="fill-white text-sm font-semibold">ROUTER</text>
          
          {/* Arrows */}
          <defs>
            <marker id="toolArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>
          
          {/* Connection lines */}
          <line x1="150" y1="340" x2="350" y2="380" stroke="#6b7280" strokeWidth="2" markerEnd="url(#toolArrow)" />
          <line x1="400" y1="340" x2="400" y2="350" stroke="#6b7280" strokeWidth="2" markerEnd="url(#toolArrow)" />
          <line x1="450" y1="380" x2="570" y2="340" stroke="#6b7280" strokeWidth="2" markerEnd="url(#toolArrow)" />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tool Development</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Custom Tool Creation</h4>
              <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded overflow-x-auto">
{`from langchain_core.tools import tool

@tool
async def custom_tool(input: str) -> str:
    """Custom tool description"""
    # Tool implementation
    return result`}
              </pre>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Tool Registration</h4>
              <pre className="text-xs text-gray-600 bg-gray-50 p-3 rounded overflow-x-auto">
{`TOOLS = [
    search_science,
    tavily_search,
    calculator,
    custom_tool
]`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Zap className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Dynamic Tool Selection</h4>
                <p className="text-sm text-gray-600">AI automatically chooses appropriate tools based on context</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Layers className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Modular Architecture</h4>
                <p className="text-sm text-gray-600">Easy to add, remove, or modify tools without system changes</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Secure Execution</h4>
                <p className="text-sm text-gray-600">Sandboxed tool execution with proper error handling</p>
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
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Consulting Services</h1>
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
          {activeTab === 'architecture' && renderArchitecture()}
          {activeTab === 'langchain' && renderLangChain()}
          {activeTab === 'agents' && renderAgents()}
          {activeTab === 'tools' && renderTools()}
        </div>
      </div>
    </div>
  );
};

export default AIConsultingDetail; 