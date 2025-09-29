import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import Button from "../common/Button";
import { contactInfo } from "../../utils/contents";

const ContactHero = () => {
  const handleWhatsAppClick = () => {
    const cleanNumber = contactInfo.whatsApp.replace(/\D/g, "");
    const message =
      "Hi! I'm interested in Nosa Igiebor Sports Academy. Could you please provide more information about your programs?";
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {/* Section Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Contact
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Nosa Igiebor Sports Academy
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600">
                Ready to start your football journey? We're here to help you
                every step of the way.
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 flex-1">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3 sm:mb-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-sm text-gray-600">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 w-full sm:w-auto mt-3 sm:mt-0"
                >
                  Chat Now
                </Button>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 flex-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3 sm:mb-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                <Button
                  as="a"
                  href={`tel:${contactInfo.phone}`}
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto mt-3 sm:mt-0"
                >
                  Call Now
                </Button>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 flex-1">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto sm:mx-0 mb-3 sm:mb-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                <Button
                  as="a"
                  href={`mailto:${contactInfo.email}`}
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto mt-3 sm:mt-0"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Academy Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Nosa Igiebor Sports Academy"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>

            {/* Floating Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg xs:shadow-xl max-w-[140px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-xs border border-gray-100"
            >
              <div className="flex items-center space-x-2 xs:space-x-2.5 sm:space-x-3 mb-2 xs:mb-2.5 sm:mb-3">
                <MapPin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" />
                <span className="font-medium xs:font-semibold text-gray-900 text-xs xs:text-sm sm:text-base leading-tight">
                  <span className="hidden sm:inline">Our Location</span>
                  <span className="sm:hidden">Location</span>
                </span>
              </div>
              <div className="space-y-0.5 xs:space-y-1 text-[10px] xs:text-xs sm:text-sm text-gray-600 leading-tight">
                {Object.values(contactInfo.address).map((line, i) => (
                  <p
                    key={i}
                    className="truncate sm:whitespace-normal"
                    title={line}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
