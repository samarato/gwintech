import React, { useState } from 'react';
import { Cloud, Code, Users, Brain, ArrowRight, Zap, Shield, Database, MessageSquare, ExternalLink } from 'lucide-react';
import InfrastructureDetail from './InfrastructureDetail';
import AIConsultingDetail from './AIConsultingDetail';
import SoftwareDevelopmentDetail from './SoftwareDevelopmentDetail';
import MojiChatDetail from './MojiChatDetail';
import CybiriDetail from './CybiriDetail';

const Services: React.FC = () => {
  const [isInfraModalOpen, setIsInfraModalOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isSoftwareModalOpen, setIsSoftwareModalOpen] = useState(false);
  const [isMojiChatModalOpen, setIsMojiChatModalOpen] = useState(false);
  const [isCybiriModalOpen, setIsCybiriModalOpen] = useState(false);

  const services = [
    {
      icon: MessageSquare,
      title: "MojiChat AI Chatbot",
      description: "Enterprise-grade omnichannel AI chatbot platform with unified inbox for LINE OA, Facebook, Instagram, TikTok, Shopee, Telegram, WhatsApp, and Web Widget. Manage all customer conversations from one dashboard with AI-powered responses.",
      features: [
        "Unified Inbox (LINE, FB, IG, TikTok, Shopee, WhatsApp, Telegram)",
        "AI Knowledge Base & RAG Pipeline",
        "Visual Flow Builder & Workflow Automation",
        "Real-time Analytics & CSAT Tracking",
        "Team Collaboration & Agent Assignment"
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      onLearnMore: () => setIsMojiChatModalOpen(true),
      externalLink: "https://mojichat.co",
      customIcon: "/icons/mojiChatIcon.png"
    },
    {
      icon: Shield,
      title: "Cybiri Security Platform",
      description: "Enterprise-grade Cybersecurity SaaS Platform unifying 7 security domains: Automated Pentesting, Attack Surface Management, Vulnerability Management, AI Security Engine, SOAR, UEBA, and Multi-cloud Compliance. Security for Everyone.",
      features: [
        "Automated Pentesting (DAST, SAST, SCA, API Security)",
        "AI DevFix - Auto Remediation Code Generation",
        "Attack Surface Management & Asset Discovery",
        "SOAR & Incident Response Automation",
        "DevSecOps CI/CD Integration (GitHub, GitLab, Azure)"
      ],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      onLearnMore: () => setIsCybiriModalOpen(true),
      externalLink: "https://cybiri.com",
      customIcon: "/icons/Logo_Cybiri.png"
    },
    {
      icon: Cloud,
      title: "Infrastructure Consulting",
      description: "Expert cloud infrastructure design and implementation with Huawei Cloud, featuring Terraform Infrastructure as Code, Container orchestration, and enterprise-grade security solutions.",
      features: [
        "Huawei Cloud Architecture Design",
        "Terraform Infrastructure as Code",
        "Container Orchestration (CCE)",
        "Load Balancing & Auto-scaling",
        "Security & Compliance"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      onLearnMore: () => setIsInfraModalOpen(true)
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development services with modern technologies including .NET C# 8-10, Python, React, and mobile apps. We build native iOS/Android and cross-platform solutions with Flutter and React Native.",
      features: [
        "React, Next.js & Vue.js Frontend",
        ".NET C# 8/9/10, Python & Node.js Backend",
        "Native iOS (Swift) & Android (Kotlin)",
        "Cross-Platform (Flutter, React Native)",
        "DevOps & CI/CD Pipeline"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      onLearnMore: () => setIsSoftwareModalOpen(true)
    },
    {
      icon: Users,
      title: "IT Outsourcing",
      description: "Comprehensive IT outsourcing solutions with dedicated teams, project management, and quality assurance for your technology needs.",
      features: [
        "Dedicated Development Teams",
        "Project Management",
        "Quality Assurance & Testing",
        "Technical Support & Maintenance",
        "Scalable Resource Allocation"
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      borderColor: "border-green-200"
    },
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Advanced AI solutions powered by LangChain, LangGraph, and intelligent multi-agent systems for automation, analysis, and decision-making.",
      features: [
        "LangChain & LangGraph Integration",
        "Multi-Agent AI Systems",
        "RAG & Vector Databases",
        "Real-time AI Processing",
        "Custom AI Tool Development"
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      onLearnMore: () => setIsAIModalOpen(true)
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-moe-pink">Services</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions with a focus on innovation, 
            quality, and customer satisfaction. From infrastructure to AI, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} p-6 md:p-8 rounded-xl border ${service.borderColor} hover:shadow-lg transition-all duration-300 md:hover:scale-105`}
              >
                <div className="flex items-center mb-6 flex-wrap">
                  {service.customIcon ? (
                    <div className="rounded-lg mr-3 md:mr-4 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src={service.customIcon}
                        alt={service.title}
                        className="h-14 w-14 object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} mr-3 md:mr-4 flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words">{service.title}</h3>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-moe-pink to-moe-purple rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm md:text-base text-gray-700 break-words">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {(service.onLearnMore || service.externalLink) && (
                  <div className="flex flex-wrap gap-3">
                    {service.onLearnMore && (
                      <button
                        onClick={service.onLearnMore}
                        className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                    {service.externalLink && (
                      <a
                        href={service.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity group`}
                      >
                        Visit
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-moe-pink to-moe-purple p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-moe-pink rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
      <InfrastructureDetail
        isOpen={isInfraModalOpen}
        onClose={() => setIsInfraModalOpen(false)}
      />
      
      <SoftwareDevelopmentDetail
        isOpen={isSoftwareModalOpen}
        onClose={() => setIsSoftwareModalOpen(false)}
      />
      
      <AIConsultingDetail
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />

      <MojiChatDetail
        isOpen={isMojiChatModalOpen}
        onClose={() => setIsMojiChatModalOpen(false)}
      />

      <CybiriDetail
        isOpen={isCybiriModalOpen}
        onClose={() => setIsCybiriModalOpen(false)}
      />
    </section>
  );
};

export default Services; 