import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import Button from "../common/Button";
import { contactInfo } from "../../utils/contents";

const ContactInfo = () => {
  const whatsAppMessage =
    "Hi! I'm interested in joining the Elite Football Academy. Could you please provide more information?";

  const handleWhatsAppClick = () => {
    const cleanNumber = contactInfo.whatsApp.replace(/\0/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsAppMessage)}`;
    window.open(url, "_blank");
  };

  const ContactInformation = [
    {
      icon: MapPin,
      title: "Academy Address",
      details: [
        "123 Lokogoma Road",
        "Elite Sports Complex",
        "Federal Capital Territory, FCT 900100",
      ],
      color: "text-red-600",
    },

    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +23470846",
        "Registration: +234803654986",
        "Emergency: +23491760467",
      ],
      color: "text-blue-600",
    },

    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@elitefootballacademy.com",
        "registration@elitefootballacademy.com",
        "coaching@elitefootballacademy.com",
      ],
      color: "text-green-600",
    },

    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 800 AM - 8:00Pm",
        "Saturday: 8:00 AM - 6:00 PM",
      ],
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to start your football journey? Contact us today for more
            information about our programs and enrollment process
          </p>

          {/* WhatsApp CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              icon={<MessageCircle className="w-6 h-6" />}
              className="bg-green-600 hover:bg-green-700"
            >
              Chat with us on WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ContactInformation.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, display: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover-xl transition-shadow duration-300"
            >
              <div className={`bg-gray-100 rounded-2xl flex items-center justify-center `}>
                <info.icon className={`w-8 h-8 ${info.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3> 
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
