import React from 'react'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'MojiChat', href: 'https://mojichat.co', external: true },
      { name: 'Cybiri', href: 'https://cybiri.com', external: true },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Values', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/icons/gwintechicon500.png"
                alt="GWIN TECH Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-display font-bold gradient-text">
                GWIN TECH
              </span>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              GWIN TECH CO., LTD. is a SaaS company building enterprise-grade platforms for
              customer engagement and cybersecurity. Our products MojiChat and Cybiri help
              businesses scale and stay secure.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-words">info@gwintech.co</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="break-words">+66 98 828 4666</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="break-words text-sm md:text-base">752/58 Khum Thong-Lam Toi Ting Rd, Lat Krabang, Bangkok</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-white transition-colors duration-200 inline-flex items-center group"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GWIN TECH CO., LTD. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
