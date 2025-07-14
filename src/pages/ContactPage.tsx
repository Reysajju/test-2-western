import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, BookOpen, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    project: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        project: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['1-800-PUBLISH (1-800-782-5474)', 'Mon-Fri 9am-6pm EST'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@westernpublish.com', 'support@westernpublish.com'],
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Publishing Lane', 'New York, NY 10001'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9am - 6pm EST', 'Weekend: By appointment'],
    },
  ];

  const services = [
    'Ghostwriting',
    'Book Publishing',
    'Marketing & Promotion',
    'Editing & Proofreading',
    'Cover Design',
    'Author Branding',
    'Consultation',
    'Other',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's Bring Your Story to Life
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to start your publishing journey? We're here to answer your questions and help you 
              choose the perfect publishing package for your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Project</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                    placeholder="e.g., Business book, Memoir, Fiction novel"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
                    placeholder="Describe your book idea, target audience, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send My Project Details</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-600 text-white p-4 rounded-lg">
                    <p>Thank you! We've received your project details and will contact you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-600 text-white p-4 rounded-lg">
                    <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Have questions about our services? Want to discuss your project before getting started? 
                  We're here to help and would love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="bg-blue-100 rounded-lg p-3 w-12 h-12 mb-4">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Western Publish?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-300">500+</div>
                    <div className="text-blue-100 text-sm">Books Published</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-300">98%</div>
                    <div className="text-blue-100 text-sm">Happy Clients</div>
                  </div>
                </div>
                <p className="text-blue-100 mt-6 text-center">
                  Join hundreds of successful authors who trusted us with their stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does the publishing process take?</h3>
              <p className="text-gray-700">
                Timeline varies by project scope, but typically 3-6 months for ghostwriting and publishing, 
                2-3 months for publishing existing manuscripts, and 1-2 months for marketing campaigns.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in your publishing packages?</h3>
              <p className="text-gray-700">
                Our packages include editing, formatting, cover design, ISBN assignment, distribution setup, 
                and marketing support. Specific inclusions vary by package level.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with first-time authors?</h3>
              <p className="text-gray-700">
                Absolutely! We specialize in guiding first-time authors through the entire process, 
                from initial concept to published book and beyond.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What genres do you work with?</h3>
              <p className="text-gray-700">
                We work with all genres including business books, memoirs, fiction, self-help, 
                academic texts, and more. Our team has expertise across multiple genres.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;