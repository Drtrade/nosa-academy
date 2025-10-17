import MetaTags from "../components/common/MetaTags";
import OwnerProfile from "../components/about/OwnerProfile";
import CompleteBiography from "../components/about/CompleteBiography";
import VisionAndLegacy from "../components/about/VisionAndLegacy";
import SocialMediaLinks from "../components/common/SocialMediaLinks";
import { motion } from "framer-motion";
import { AcademyInfo, Owner } from "../utils/contents";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <MetaTags
        title="About Nosa Igiebor | Nigerian Football Legend & Academy Founder"
        description="Learn about Nosa Igiebor's legendary football career - AFCON 2013 winner, UEFA Champions League player, and founder of Nigeria's premier youth football academy."
        keywords="Nosa Igiebor, Nigerian footballer, AFCON 2013, football career"
        canonical="/about"
        ogType="profile"
        ogImage="https://www.nosasportsacademy.com/images/og-about.jpg"
      />
      <OwnerProfile />
      <CompleteBiography />
      <VisionAndLegacy />

      {/* Achievements Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
              Career Achievements
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
              <span className="hidden sm:inline">
                A comprehensive list of honors and recognition earned throughout a legendary career
              </span>
              <span className="sm:hidden">
                Honors and recognition from a legendary career
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
            {Owner.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg xs:rounded-xl p-4 xs:p-5 sm:p-6 shadow-md xs:shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-2 xs:space-x-3">
                  <div className="w-2 h-2 xs:w-3 xs:h-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex-shrink-0 mt-2 xs:mt-1.5"></div>
                  <span className="text-sm xs:text-base text-gray-700 font-medium leading-relaxed">
                    {achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 sm:bg-gradient-to-r sm:from-primary-600 sm:to-accent-600">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6 xs:space-y-8"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 xs:mb-4 leading-tight">
              <span className="block xs:inline">Connect with </span>
              <span className="block xs:inline">Nosa Igiebor</span>
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg md:text-xl opacity-90 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-2 xs:px-0 leading-relaxed">
              <span className="hidden sm:inline">
                Follow the journey and get insights from a football legend. Stay updated with academy news, training tips, and career highlights.
              </span>
              <span className="sm:hidden">
                Follow the journey and get insights from a football legend. Academy news, tips, and highlights.
              </span>
            </p>

            <div className="flex justify-center pt-4 xs:pt-6 sm:pt-8">
              <div className="scale-75 xs:scale-90 sm:scale-100">
                <SocialMediaLinks links={Owner.socialLinks} size="xl" />
              </div>
            </div>

            <p className="text-xs xs:text-sm sm:text-base md:text-lg opacity-80 mt-6 xs:mt-8 px-4 xs:px-0">
              <span className="hidden sm:inline">
                Join millions of followers across all platforms for exclusive content and behind-the-scenes access
              </span>
              <span className="sm:hidden">
                Join followers for exclusive content and behind-the-scenes access
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academy Philosophy */}
      <section className="py-12 xs:py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
              Our Training Philosophy
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
              <span className="hidden sm:inline">
                We believe in developing complete players through a holistic approach to football education
              </span>
              <span className="sm:hidden">
                Developing complete players through holistic football education
              </span>
            </p>
          </motion.div>

          {/* Philosophy Content Placeholder */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-4 xs:mb-6">
                Complete Player Development
              </h3>
              <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                Our philosophy centers on developing not just skilled footballers, but complete individuals ready for success both on and off the field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Stats Section */}
      {/* <section className="py-12 xs:py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 sm:bg-gradient-to-r sm:from-gray-900 sm:to-gray-800">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 xs:mb-12 sm:mb-16 leading-tight">
              Academy by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xs:gap-8">
              {[
                {
                  number: "5+",
                  label: "Years of Excellence",
                },
                { number: "500+", label: "Active Players" },
                { number: "50+", label: "Professional Graduates" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 leading-none">
                    {stat.number}
                  </div>
                  <div className="text-sm xs:text-base sm:text-lg md:text-xl opacity-90 leading-tight">
                    <span className="hidden xs:inline">{stat.label}</span>
                    <span className="xs:hidden">
                      {stat.label.split(' ')[0]}
                      {stat.label.includes('Excellence') ? '' : ` ${stat.label.split(' ')[1]}`}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
