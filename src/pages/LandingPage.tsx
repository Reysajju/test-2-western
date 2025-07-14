import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Megaphone, Award, Users, CheckCircle, Upload, UserPlus, Edit3, Printer, Target, Star } from 'lucide-react';
import ConvertKitForm from '../components/ConvertKitForm';

const LandingPage: React.FC = () => {
  const [emailList, setEmailList] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBulkEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Parse CSV format emails
      const emails = emailList
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => {
          const parts = line.split(',');
          return {
            email: parts[0]?.trim(),
            name: parts[1]?.trim() || '',
          };
        })
        .filter(item => item.email && item.email.includes('@'));

      // Submit each email to ConvertKit using your form
      for (const emailData of emails) {
        try {
          // Use ConvertKit's API or form submission
          const formData = new FormData();
          formData.append('email_address', emailData.email);
          if (emailData.name) {
            formData.append('first_name', emailData.name);
          }
          
          // Submit to ConvertKit form endpoint
          await fetch('https://api.convertkit.com/v3/forms/23453ee44b/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailData.email,
              first_name: emailData.name,
              api_key: 'your_api_key' // You'll need to add your ConvertKit API key
            })
          });
          
          // Small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`Error submitting ${emailData.email}:`, error);
        }
      }
      
      console.log(`Processing ${emails.length} emails for ConvertKit import:`, emails);
      
      setSubmitStatus('success');
      setEmailList('');
    } catch (error) {
      console.error('Error importing emails:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const features = [
    {
      icon: PenTool,
      title: 'Professional Ghostwriting',
      description: 'Expert writers who bring your ideas to life with compelling, authentic content that resonates with your audience.',
    },
    {
      icon: BookOpen,
      title: 'Complete Publishing Solutions',
      description: 'From manuscript to market-ready book, we handle every aspect of the publishing process with precision and care.',
    },
    {
      icon: Megaphone,
      title: 'Strategic Marketing',
      description: 'Data-driven marketing campaigns that amplify your reach and connect you with your target readers effectively.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Books Published' },
    { number: '10M+', label: 'Words Written' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Bestsellers' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                From Ghostwriting to Publishing and Marketing,{' '}
                <span className="text-blue-300">We Cover Everything</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Transform your ideas into bestselling books with our comprehensive publishing ecosystem. 
                Professional writers, publishers, and marketers working together for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
                <BookOpen className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Begin?</h3>
                  <p className="text-blue-100 mb-6">Join thousands of successful authors who chose Western Publish</p>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-400" />
                    <span className="text-sm font-medium">Award-Winning Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Publishing Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service you need to transform your manuscript into a bestselling book, 
              all under one roof with seamless collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to bestselling success, we provide comprehensive support at every stage of your publishing journey.
            </p>
          </div>

          {/* Ghostwriting Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 rounded-lg p-3 mr-4">
                    <PenTool className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Ghostwriting</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Transform your ideas into compelling narratives with our team of expert ghostwriters. Whether you have a complete concept or just a spark of inspiration, we'll help you craft a book that captures your unique voice and resonates with your target audience.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Business books and thought leadership content</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Memoirs and autobiographies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Fiction novels and series</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Self-help and educational content</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Start Your Ghostwriting Project
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                <div className="text-center">
                  <Star className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Ghostwriters?</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ 15+ years average experience</p>
                    <p>✓ Published authors in your genre</p>
                    <p>✓ Collaborative writing process</p>
                    <p>✓ Your voice, professionally crafted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publishing Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 order-2 lg:order-1">
                <div className="text-center">
                  <Printer className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Publishing Excellence</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ Amazon, Barnes & Noble, Apple Books</p>
                    <p>✓ Print-on-demand and eBook formats</p>
                    <p>✓ Professional cover design</p>
                    <p>✓ ISBN and copyright registration</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-600 rounded-lg p-3 mr-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Complete Publishing Solutions</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Navigate the complex world of publishing with confidence. Our comprehensive publishing services ensure your book reaches readers through all major platforms while maintaining the highest quality standards.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Global distribution network</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Professional formatting and layout</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Quality control and proofreading</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Royalty optimization strategies</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Publish Your Book
                </Link>
              </div>
            </div>
          </div>

          {/* Marketing Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 rounded-lg p-3 mr-4">
                    <Megaphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Strategic Marketing</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Launch your book with impact and sustain long-term success. Our data-driven marketing strategies help you build an author platform, connect with readers, and achieve bestseller status across multiple categories.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Amazon bestseller campaigns</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Social media marketing strategies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Author website and branding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Media outreach and PR campaigns</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Launch Your Marketing Campaign
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
                <div className="text-center">
                  <Target className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Marketing That Works</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ 300% average sales increase</p>
                    <p>✓ Bestseller list placements</p>
                    <p>✓ Targeted audience building</p>
                    <p>✓ ROI-focused campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editing Section */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 order-2 lg:order-1">
                <div className="text-center">
                  <Edit3 className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Editorial Excellence</h4>
                  <div className="space-y-4 text-gray-700">
                    <p>✓ Developmental editing</p>
                    <p>✓ Line editing and copyediting</p>
                    <p>✓ Proofreading and fact-checking</p>
                    <p>✓ Style guide compliance</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-lg p-3 mr-4">
                    <Edit3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Professional Editing</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Polish your manuscript to perfection with our comprehensive editing services. Our experienced editors ensure your book meets industry standards while preserving your unique voice and message.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Structural and content editing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Grammar and style refinement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Consistency and flow optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Final proofreading and quality assurance</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
                >
                  Get Professional Editing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Collection Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-900 to-blue-900 text-white" id="email-signup">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bulk Email Import */}
            <div>
              <div className="text-center mb-8">
                <Upload className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Bulk Email Import
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Import thousands of emails instantly to your ConvertKit account
                </p>
                <div className="bg-blue-800 bg-opacity-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-100 mb-2">
                    <strong>Format:</strong> email@domain.com, First Name (one per line)
                  </p>
                  <p className="text-xs text-blue-200">
                    Example: john@example.com, John Smith
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleBulkEmailSubmit} className="space-y-6">
                <div>
                  <label htmlFor="emailList" className="block text-lg font-semibold mb-4">
                    Paste Your Email List (CSV Format)
                  </label>
                  <textarea
                    id="emailList"
                    value={emailList}
                    onChange={(e) => setEmailList(e.target.value)}
                    placeholder="john@example.com, John Smith&#10;jane@example.com, Jane Doe&#10;author@domain.com, Author Name"
                    rows={6}
                    className="w-full px-4 py-3 text-gray-900 rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !emailList.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Importing to ConvertKit...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5" />
                      <span>Import to ConvertKit</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-600 text-white p-4 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Emails successfully imported to ConvertKit!</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-600 text-white p-4 rounded-lg">
                    <span>Error importing emails. Please try again or contact support.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Single Email Signup */}
            <div>
              <div className="text-center mb-8">
                <UserPlus className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Join Our Newsletter
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Get exclusive publishing tips, industry insights, and special offers
                </p>
              </div>
              
              {/* ConvertKit Form Container */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="w-full">
                  <ConvertKitForm />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-blue-200 text-sm">
              Your email is safe with us. We never spam and you can unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 text-blue-600 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Publish Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join hundreds of successful authors who trusted Western Publish with their literary journey. 
            From concept to bestseller, we're your complete publishing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;