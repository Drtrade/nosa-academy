import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { contactInfo } from '../utils/contents';

const ThankYou = () => {
  const handleWhatsAppClick = () => {
    const cleanNumber = contactInfo.whatsApp.replace(/\D/g, '');
    const message = "Hi! I have just completed my registration for Nosa Sports Academy. Please confirm my enrollment and provide next steps.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16 xs:pt-18 sm:pt-20 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center py-8 xs:py-10 sm:py-12">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl xs:rounded-3xl shadow-lg xs:shadow-xl sm:shadow-2xl p-6 xs:p-8 sm:p-10 md:p-12"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 xs:mb-8"
          >
            <div className="w-20 h-20 xs:w-24 xs:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6">
              <CheckCircle className="w-10 h-10 xs:w-12 xs:h-12 text-green-600" />
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
              Registration Successful!
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600">
              Welcome to the Nosa Igiebor Sports Academy family
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 xs:space-y-5 sm:space-y-6 mb-6 xs:mb-8"
          >
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed px-2 xs:px-0">
              <span className="hidden sm:inline">
                Thank you for registering with Nosa Igiebor Sports Academy! Your registration has been successfully submitted and our team will review your application within 24 hours.
              </span>
              <span className="sm:hidden">
                Thank you for registering! Your application has been submitted and our team will review it within 24 hours.
              </span>
            </p>
            
            <div className="bg-primary-50 border border-primary-200 rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6">
              <h3 className="font-semibold text-primary-900 mb-3 xs:mb-4 text-sm xs:text-base">
                What happens next?
              </h3>
              <ul className="text-left space-y-2 xs:space-y-3 text-primary-800">
                <li className="flex items-start space-x-2 xs:space-x-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary-600 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></span>
                  <span className="text-xs xs:text-sm sm:text-base leading-relaxed">
                    Our admissions team will review your application
                  </span>
                </li>
                <li className="flex items-start space-x-2 xs:space-x-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary-600 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></span>
                  <span className="text-xs xs:text-sm sm:text-base leading-relaxed">
                    You'll receive a confirmation email with next steps
                  </span>
                </li>
                <li className="flex items-start space-x-2 xs:space-x-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary-600 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></span>
                  <span className="text-xs xs:text-sm sm:text-base leading-relaxed">
                    We'll schedule your skills assessment and trial session
                  </span>
                </li>
                <li className="flex items-start space-x-2 xs:space-x-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary-600 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></span>
                  <span className="text-xs xs:text-sm sm:text-base leading-relaxed">
                    Welcome to your football journey!
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-3 xs:gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full xs:w-auto bg-green-600 hover:bg-green-700 min-w-[280px] xs:min-w-[250px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
            >
              <MessageCircle className="w-5 h-5 xs:w-6 xs:h-6 mr-2" />
              Contact Us on WhatsApp
            </Button>
            
            <Link to="/" className="w-full xs:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
              >
                <ArrowLeft className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 xs:mt-8 pt-6 xs:pt-8 border-t border-gray-200"
          >
            <p className="text-xs xs:text-sm text-gray-600 mb-3 xs:mb-4">
              Have questions? Our team is here to help:
            </p>
            <div className="flex flex-col gap-2 xs:gap-3 sm:flex-row sm:gap-4 justify-center text-xs xs:text-sm text-gray-700">
              <div className="flex flex-col xs:flex-row items-center justify-center space-x-0 xs:space-x-2 space-y-1 xs:space-y-0">
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="text-primary-600 hover:text-primary-700 break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col xs:flex-row items-center justify-center space-x-0 xs:space-x-2 space-y-1 xs:space-y-0">
                <span className="font-semibold">Phone:</span>
                <a href={`tel:${contactInfo.phone}`} className="text-primary-600 hover:text-primary-700">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;