import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { contactInfo } from '../utils/contents';

const ThankYou = () => {
  const handleWhatsAppClick = () => {
    const cleanNumber = contactInfo.whatsapp.replace(/\D/g, '');
    const message = "Hi! I have just completed my registration for Nosa Sports Academy. Please confirm my enrollment and provide next steps.";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-12"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Registration Successful!
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to the Nosa Sports Academy family
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Thank you for registering with Nosa Sports Academy! Your registration has been successfully submitted 
              and our team will review your application within 24 hours.
            </p>
            
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="font-semibold text-primary-900 mb-3">What happens next?</h3>
              <ul className="text-left space-y-2 text-primary-800">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Our admissions team will review your application</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You'll receive a confirmation email with next steps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We'll schedule your skills assessment and trial session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Welcome to your football journey!</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              icon={<MessageCircle className="w-6 h-6" />}
              className="bg-green-600 hover:bg-green-700 min-w-[250px]"
            >
              Contact Us on WhatsApp
            </Button>
            
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                icon={<ArrowLeft className="w-5 h-5" />}
                className="min-w-[200px]"
              >
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-4">
              Have questions? Our team is here to help:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-700">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold">Email:</span>
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold">Phone:</span>
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;