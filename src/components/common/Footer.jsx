import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube, 
  Linkedin, // ✅ correct spelling
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { AcademyInfo, contactInfo } from "../../utils/contents";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // ✅ fixed variable name

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/NosaIgieborSportsAcademy", label: "Facebook" },
    { icon: Twitter, url: "https://www.x.com/NosaAcademy", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/NosaIgieborSportsAcademy", label: "Instagram" },
    { icon: Youtube, url: "http://www.youtube.com/@NosaIgieborSportsAcademy", label: "YouTube" },
    // { icon: Linkedin, url: "https://www.linkedin.com/NosaIgieborSportsAcademy", label: "Linkedin" }, // ✅ fixed icon name
  ];

  const quickLinks = [
    { name: "About Us", url: "/about" }, 
    { name: "Contact", url: "/contact" },
    { name: "Enrollment", url: "/register" },
    { name: "Team", url: "/team" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NFA</span>
              </div>

              <div>
                <h3 className="text-xl font-bold">{AcademyInfo.name}</h3>
                <p className="text-gray-400 text-sm">{AcademyInfo.tagline}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Developing the next generation of football champions through
              excellence in training, character development, and professional
              guidance
            </p>

            {/* Social media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => ( // ✅ fixed .map
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-primary-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Stella Maris School</p>
                  <p>Plot 76 cadastral zone C10, Wumba district</p>
                  <p>Federal Capital Territory, FCT 900104</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-sm text-gray-300">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-sm text-gray-300">
                  {contactInfo.email}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for latest news and updates
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-2 px-4 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all duration-200 text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {AcademyInfo.name}. All rights reserved. |{" "}
            <span className="ml-2">Founded in {AcademyInfo.foundedYear}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
