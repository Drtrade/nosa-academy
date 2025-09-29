import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  BookOpen,
  Trophy,
  Shield,
} from "lucide-react";
import SocialMediaLinks from "../common/SocialMediaLinks";
import { contactInfo } from "../../utils/contents";

const DetailedContactInfo = () => {
  const contactSections = [
    {
      icon: MapPin,
      title: "Academy Address",
      color: "text-red-600 bg-red-100",
      details: [
        contactInfo.address.street,
        contactInfo.address.district,
        `${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zipCode}`,
        contactInfo.address.country,
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      color: "text-blue-600 bg-blue-100",
      details: [
        `Main Office: ${contactInfo.phone}`,
        // `Registration: ${contactInfo.phone.registration}`,
        // `Coaching Dept: ${contactInfo.phone.coaching}`,
        // `Emergency: ${contactInfo.phone.emergency}`
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      color: "text-green-600 bg-green-100",
      details: [
        `General Info: ${contactInfo.email}`,
        // `Registration: ${contactInfo.registrationEmail}`,
        // `Coaching: ${contactInfo.coachingEmail}`,
        // `Media: ${contactInfo.mediaEmail}`
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      color: "text-purple-600 bg-purple-100",
      details: [
        contactInfo.officeHours.weekdays,
        contactInfo.officeHours.saturday,
        contactInfo.officeHours.sunday,
        contactInfo.officeHours.holidays,
      ],
    },
  ];

  {
    /*This not available for implementation for now */
  }
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

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center sm:text-left"
              >
                {/* Rounded Icon */}
                <div
                  className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mb-6 mx-auto sm:mx-0`}
                >
                  <section.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>

                <div className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-600 text-sm leading-relaxed"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academy Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4 leading-tight">
            <span className="block xs:inline">Follow </span>
            <span className="block xs:inline">Nosa Igiebor Sports Academy</span>
          </h2>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-8 opacity-90 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 xs:px-0">
            <span className="hidden sm:inline">
              Stay connected with us on social media for the latest updates,
              training tips, match highlights, and academy news
            </span>
            <span className="sm:hidden">
              Stay connected for updates, training tips, highlights, and academy
              news
            </span>
          </p>

          <div className="flex justify-center mb-6 xs:mb-8">
            <SocialMediaLinks
              links={contactInfo.socialLinks}
              size="sm"
              className="xs:size-md sm:size-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedContactInfo;
