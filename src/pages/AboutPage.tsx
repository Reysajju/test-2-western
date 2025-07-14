import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Target, Heart, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Stories',
      description: 'We believe every story deserves to be told and every author deserves professional support to bring their vision to life.',
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description: 'Our team of seasoned professionals maintains the highest standards in writing, editing, publishing, and marketing.',
    },
    {
      icon: Users,
      title: 'Author-Centric Approach',
      description: 'Your success is our success. We work closely with each author to understand their unique voice and goals.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes, from manuscript quality to market performance and reader engagement.',
    },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'Former publishing executive with 15+ years experience at major publishing houses. Led successful launches of 50+ bestsellers.',
      expertise: ['Publishing Strategy', 'Author Development', 'Market Analysis'],
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Ghostwriting',
      bio: 'Award-winning author and ghostwriter who has written for celebrities, CEOs, and thought leaders across multiple genres.',
      expertise: ['Ghostwriting', 'Memoir Writing', 'Business Books'],
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      bio: 'Digital marketing specialist who has helped authors build six-figure businesses through strategic book marketing campaigns.',
      expertise: ['Digital Marketing', 'Book Launches', 'Author Branding'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-blue-300 mx-auto mb-8" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Western Publish
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We're more than a publishing company – we're your complete literary partner, 
              dedicated to transforming authors' dreams into bestselling realities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2018, Western Publish emerged from a simple observation: talented authors 
                  were struggling to navigate the complex publishing landscape alone. Traditional publishers 
                  were increasingly selective, while self-publishing left authors overwhelmed by the 
                  technical and marketing challenges.
                </p>
                <p>
                  We saw an opportunity to bridge this gap by creating a comprehensive ecosystem where 
                  authors could access professional ghostwriting, publishing, and marketing services 
                  under one roof. Our integrated approach ensures quality consistency and seamless 
                  collaboration throughout the entire publishing journey.
                </p>
                <p>
                  Today, we've helped over 500 authors publish their works, with many achieving bestseller 
                  status and building sustainable author businesses. Our success is measured not just in 
                  books sold, but in dreams realized and stories shared with the world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 text-center">
                <Lightbulb className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To democratize professional publishing by providing authors with world-class services, 
                  expert guidance, and the tools they need to share their unique stories with global audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build with our authors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans who bring decades of publishing expertise and a passion for author success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to author success and publishing excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-blue-300 mb-4">500+</div>
              <div className="text-blue-100 font-medium text-lg">Books Published</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-blue-300 mb-4">50+</div>
              <div className="text-blue-100 font-medium text-lg">Bestsellers Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-blue-300 mb-4">98%</div>
              <div className="text-blue-100 font-medium text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-blue-300 mb-4">7</div>
              <div className="text-blue-100 font-medium text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's work together to transform your manuscript into a bestselling book that reaches readers worldwide.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
          >
            Start Your Publishing Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;