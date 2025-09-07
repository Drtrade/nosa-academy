import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, BookOpen, Trophy, Shield } from 'lucide-react';
import SocialMediaLinks from '../common/SocialMediaLinks';
import { contactInfo } from '../../utils/contents';

const DetailedContactInfo = () => {
  const contactSections = [
    {
      icon: MapPin,
      title: 'Academy Address',
      color: 'text-red-600 bg-red-100',
      details: [
        contactInfo.address.street,
        contactInfo.address.district,
        `${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zipCode}`,
        contactInfo.address.country
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      color: 'text-blue-600 bg-blue-100',
      details: [
        `Main Office: ${contactInfo.phone}`,
        // `Registration: ${contactInfo.phone.registration}`,
        // `Coaching Dept: ${contactInfo.phone.coaching}`,
        // `Emergency: ${contactInfo.phone.emergency}`
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      color: 'text-green-600 bg-green-100',
      details: [
        `General Info: ${contactInfo.email}`,
        // `Registration: ${contactInfo.registrationEmail}`,
        // `Coaching: ${contactInfo.coachingEmail}`,
        // `Media: ${contactInfo.mediaEmail}`
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      color: 'text-purple-600 bg-purple-100',
      details: [
        contactInfo.officeHours.weekdays,
        contactInfo.officeHours.saturday,
        contactInfo.officeHours.sunday,
        contactInfo.officeHours.holidays
      ]
    }
  ];

    {/*This not available for implementation for now */}
    //   const departments = [
//     {
//       icon: Users,
//       title: 'Admissions & Registration',
//       description: 'Questions about enrollment, requirements, and application process',
//       contact: contactInfo.phone.registration,
//       email: contactInfo.registrationEmail
//     },
//     {
//       icon: BookOpen,
//       title: 'Coaching & Training',
//       description: 'Training programs, coaching staff, and technical development',
//       contact: contactInfo.phone.coaching,
//       email: contactInfo.coachingEmail
//     },
//     {
//       icon: Trophy,
//       title: 'Events & Competitions',
//       description: 'Tournament information, matches, and academy events',
//       contact: contactInfo.phone.main,
//       email: contactInfo.email
//     },
//     {
//       icon: Shield,
//       title: 'Emergency & Safety',
//       description: '24/7 emergency contact for urgent matters',
//       contact: contactInfo.phone.emergency,
//       email: contactInfo.email
//     }
//   ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your academy-related inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <section.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <div className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Department-Specific Contacts is not available for now*/}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for faster, more accurate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.title}</h3>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary-600" />
                        <a href={`tel:${dept.contact}`} className="text-primary-600 hover:text-primary-700 font-medium">
                          {dept.contact}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary-600" />
                        <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Academy Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            Follow Nosa Igiebor Sports Academy
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stay connected with us on social media for the latest updates, training tips, match highlights, and academy news
          </p>
          
          <div className="flex justify-center mb-8">
            <SocialMediaLinks 
              links={contactInfo.socialLinks} 
              size="xl"
            />
          </div>

{/* Followers count display */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="opacity-90">Total Followers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Daily</div>
              <div className="opacity-90">Content Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Live</div>
              <div className="opacity-90">Match Coverage</div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedContactInfo;