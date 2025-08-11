import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";

const trainingSchedule = () => {
  const schedule = [
    {
      day: "Monday & Wednesday",
      time: "4:00 PM - 6:00 PM",
      agedGroup: "Under 12",
      location: "Main field 1",
      capacity: "20 players",
      focus: "Basic Skills & fun Games",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Training Schedule
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured training sessions designed for different age groups and
            skill levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schedule.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-primary-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold, text-gray-900">
                  {schedule.agedGroup}
                </h3>
                <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold">
                  {schedule.day}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">
                    {schedule.time}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">{schedule.location}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">{schedule.capacity}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Focus Area</p>
                <p className="font-semibold text-gray-900">{schedule.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default trainingSchedule;
