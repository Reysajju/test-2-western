import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, UserCheck, Mail, Database } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, mailing address',
        'Project Information: Manuscript content, publishing preferences, target audience details',
        'Communication Records: Emails, messages, and consultation notes',
        'Usage Data: Website analytics, page views, and user interactions',
        'Payment Information: Billing details (processed securely through third-party providers)',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide ghostwriting, publishing, and marketing services',
        'Communicate about your projects and send important updates',
        'Process payments and manage your account',
        'Improve our services and website functionality',
        'Send relevant newsletters and promotional content (with your consent)',
        'Comply with legal obligations and protect our business interests',
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing Practices',
      content: [
        'We only add emails to our marketing lists with explicit consent',
        'Bulk email imports are processed securely and added to your designated ConvertKit account',
        'We never sell, rent, or share email lists with third parties for marketing purposes',
        'All marketing emails include easy unsubscribe options',
        'We respect all unsubscribe requests immediately',
        'Email data is stored securely and handled according to GDPR and CAN-SPAM regulations',
      ],
    },
    {
      icon: UserCheck,
      title: 'Information Sharing',
      content: [
        'Service Providers: Trusted third parties who assist with our operations (editors, designers, marketers)',
        'Legal Requirements: When required by law, court order, or government request',
        'Business Transfers: In case of merger, acquisition, or sale of business assets',
        'Consent: When you explicitly authorize us to share specific information',
        'We NEVER sell your personal information to advertisers or marketers',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'SSL encryption for all data transmission',
        'Secure servers with regular security updates and monitoring',
        'Limited access to personal information on a need-to-know basis',
        'Regular security audits and vulnerability assessments',
        'Secure backup systems with encryption',
        'Employee training on data protection and privacy practices',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your privacy and the security of your personal information are of utmost importance to us. 
              This policy explains how we collect, use, and protect your data.
            </p>
            <div className="mt-8 text-sm text-blue-200">
              <p>Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Privacy Commitment</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                At Western Publish, we understand that when you share your stories, ideas, and personal information 
                with us, you're placing your trust in our hands. This Privacy Policy outlines our commitment to 
                protecting your privacy and explains how we handle your personal data in accordance with applicable 
                privacy laws, including GDPR, CCPA, and CAN-SPAM Act.
              </p>
              <p>
                This policy applies to all services provided by Western Publish, including ghostwriting, publishing, 
                marketing, and our website. By using our services, you agree to the practices described in this policy.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                <p className="text-blue-800 font-medium">
                  <strong>Important:</strong> We never sell your personal information to third parties, and we never 
                  use your email addresses for spam or unauthorized marketing purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <section.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <UserCheck className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your Privacy Rights</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              You have important rights regarding your personal information. We're committed to honoring these rights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Access Your Data</h3>
              <p className="text-blue-100">Request a copy of all personal information we have about you.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Correct Inaccuracies</h3>
              <p className="text-blue-100">Update or correct any inaccurate personal information.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Delete Your Data</h3>
              <p className="text-blue-100">Request deletion of your personal information (subject to legal requirements).</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Limit Processing</h3>
              <p className="text-blue-100">Restrict how we process your personal information.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Data Portability</h3>
              <p className="text-blue-100">Receive your data in a portable format for transfer to another service.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Opt-Out</h3>
              <p className="text-blue-100">Unsubscribe from marketing communications at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                and personalize content. Here's what you need to know:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p>Required for basic website functionality, including security and account access.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p>Help us understand how visitors interact with our website to improve user experience.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                  <p>Used to deliver relevant advertisements and track campaign effectiveness.</p>
                </div>
              </div>
              
              <p className="bg-blue-50 border-l-4 border-blue-600 p-4 text-blue-800">
                You can control cookie preferences through your browser settings. Disabling certain cookies may 
                affect website functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're here to help. If you have any questions about this Privacy Policy or how we handle your data, 
            please don't hesitate to contact us.
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong> privacy@westernpublish.com
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> 1-800-PUBLISH (1-800-782-5474)
            </p>
            <p className="text-lg text-gray-700">
              <strong>Response Time:</strong> We respond to all privacy inquiries within 48 hours
            </p>
          </div>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
          >
            Contact Privacy Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;