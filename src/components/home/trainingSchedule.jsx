import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";

const TrainingSchedule = () => {
  const schedule = [
    {
      day: "Monday & Wednesday",
      time: "4:00 PM - 6:00 PM",
      agedGroup: "Under 12",
      location: "Main field 1",
      capacity: "20 players",
      focus: "Basic Skills & Fun Games",
    },
    {
      day: "Tuesday & Thursday",
      time: "4:00 PM - 6:30 PM",
      agedGroup: "Under 18",
      location: "Main field 2",
      capacity: "30 players",
      focus: "Technical Development",
    },
    {
      day: "Friday",
      time: "5:00 PM - 7:00 PM",
      agedGroup: "Under 18",
      location: "Main field 1",
      capacity: "30 players",
      focus: "Advanced Tactics",
    },
    {
      day: "Saturday",
      time: "9:00 AM - 12:00 PM",
      agedGroup: "All Ages",
      location: "All Fields",
      capacity: "100 players",
      focus: "Match Day & Tournaments",
    },
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-12 sm:mb-16"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Training Schedule
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Structured training sessions designed for different age groups and skill levels
            </span>
            <span className="sm:hidden">
              Training sessions for different age groups and skill levels
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 border border-primary-100"
            >
              <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6 gap-2 xs:gap-3">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  {item.agedGroup}
                </h3>
                <span className="inline-flex items-center justify-center px-3 py-1.5 xs:px-4 xs:py-2 bg-primary-600 text-white rounded-full text-xs xs:text-sm font-semibold whitespace-nowrap">
                  {item.day}
                </span>
              </div>

              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-center space-x-2 xs:space-x-3">
                  <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm xs:text-base text-gray-700 font-medium">
                    {item.time}
                  </span>
                </div>

                <div className="flex items-center space-x-2 xs:space-x-3">
                  <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm xs:text-base text-gray-700">
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center space-x-2 xs:space-x-3">
                  <Users className="w-4 h-4 xs:w-5 xs:h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm xs:text-base text-gray-700">
                    {item.capacity}
                  </span>
                </div>
              </div>

              <div className="mt-4 xs:mt-5 sm:mt-6 p-3 xs:p-4 bg-white rounded-lg">
                <p className="text-xs xs:text-sm text-gray-600 mb-1 xs:mb-2">
                  Focus Area
                </p>
                <p className="text-sm xs:text-base font-semibold text-gray-900">
                  {item.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-specific note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 xs:mt-10 sm:mt-12"
        >
          <p className="text-xs xs:text-sm text-gray-500 px-4">
            <span className="hidden xs:inline">
              Note: All times are subject to change based on field availability. 
            </span>
            Please contact us for the most up-to-date schedule information.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSchedule;