import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import MojiChatDetail from './MojiChatDetail';
import CybiriDetail from './CybiriDetail';

const Services: React.FC = () => {
  const [isMojiChatModalOpen, setIsMojiChatModalOpen] = useState(false);
  const [isCybiriModalOpen, setIsCybiriModalOpen] = useState(false);

  const products = [
    {
      title: "MojiChat",
      tagline: "AI-Powered Omnichannel Chatbot Platform",
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
      customIcon: "/icons/mojiChatIcon.png",
      stats: [
        { label: "Uptime", value: "99.9%" },
        { label: "Response Time", value: "<1s" },
        { label: "Languages", value: "100+" }
      ]
    },
    {
      title: "Cybiri",
      tagline: "Unified Cybersecurity Platform",
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
      customIcon: "/icons/Logo_Cybiri.png",
      stats: [
        { label: "Security Features", value: "120+" },
        { label: "Scanning Engines", value: "8" },
        { label: "Monitoring", value: "24/7" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 px-4">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-moe-pink/10 to-moe-purple/10 rounded-full text-moe-pink font-semibold text-sm mb-4">
            OUR PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SaaS <span className="text-moe-pink">Solutions</span> Built for Scale
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            We build enterprise-grade SaaS platforms that help businesses automate operations,
            enhance customer engagement, and secure their digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.bgGradient} p-6 md:p-8 rounded-2xl border ${product.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="rounded-lg mr-4 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img
                    src={product.customIcon}
                    alt={product.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{product.title}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/60 rounded-xl">
                {product.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full mr-3 mt-1.5 flex-shrink-0`}></div>
                    <span className="text-sm md:text-base text-gray-700 break-words">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={product.onLearnMore}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors border border-gray-200 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={product.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${product.gradient} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity group`}
                >
                  Try It Free
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-moe-pink to-moe-purple p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start your free trial today and experience the power of our SaaS solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-moe-pink rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modals */}
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
