import { motion } from "framer-motion";
import { Play, Award, Users, Calendar } from "lucide-react";
import Button from "../common/Button";

const hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-block/70 to-block/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Football training"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl max-auto px-4 sm:px-6 lg:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Elite Football
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              {" "}
              Academy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Transform your passion into excellence. Join the premier football
            academy where champions are made and dreams become reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px]">
              {" "}
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px] text-white border-white hover:bg-white hover:text-gray-900"
            >
              <Play className="w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: Users, value: "500+", label: "Active Players" },
              { icon: Award, value: "50+", label: "Championships Won" },
              { icon: Calendar, value: "10+", label: "Year Experience" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <stat.icon className="w-8 h-8 text-accent-400" />
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default hero;
