import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  AlertCircle,
  Shield,
} from "lucide-react";
import Button from "../common/Button";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    homeAddress: "",
    allergies: "",
    parentFullName: "",
    parentEmail: "",
    parentPhone: "",
    parentWorkplace: "",
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "dateOfBirth" && value) {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData((prev) => ({ ...prev, age: age.toString() }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/nosa/google_sheets/fnnyCwNhayDSrTlo?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([[
            formData.firstName,
            formData.middleName,
            formData.surname,
            formData.phone,
            formData.email,
            formData.dateOfBirth,
            formData.age,
            formData.gender,
            formData.homeAddress,
            formData.allergies,
            formData.parentFullName,
            formData.parentEmail,
            formData.parentPhone,
            formData.parentWorkplace,
            new Date().toISOString(),
          ]]),
        }
      );

      if (!response.ok) {
        const result = await response.json();
        throw new Error(`Submission error: ${JSON.stringify(result)}`);
      }

      setFormData({
        firstName: "",
        middleName: "",
        surname: "",
        phone: "",
        email: "",
        dateOfBirth: "",
        age: "",
        gender: "",
        homeAddress: "",
        allergies: "",
        parentFullName: "",
        parentEmail: "",
        parentPhone: "",
        parentWorkplace: "",
        termsAccepted: false,
      });

      alert("✅ Registration successful! We'll contact you within 24 hours.");
      // window.location.href = "/thank-you";
    } catch (error) {
      console.error("Submission failed:", error.message);
      alert("❌ Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-3 xs:px-4 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-sm xs:text-base";
  const labelClasses = "block text-xs xs:text-sm font-semibold text-gray-700 mb-1.5 xs:mb-2";

  return (
    <section className="py-12 xs:py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-10 sm:mb-12"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 leading-tight">
            Register for Nosa Sports Academy
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl mx-auto px-2 xs:px-0 leading-relaxed">
            <span className="hidden sm:inline">
              Begin your journey to football excellence. Fill out the form below to secure your place at our academy.
            </span>
            <span className="sm:hidden">
              Begin your football journey. Fill out the form to secure your place.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl xs:rounded-3xl shadow-lg xs:shadow-xl p-4 xs:p-5 sm:p-6 md:p-8"
        >
          {/* Security Notice */}
          <div className="flex items-start space-x-2 xs:space-x-3 bg-green-50 border border-green-200 rounded-lg p-3 xs:p-4 mb-6 xs:mb-8">
            <Shield className="w-5 h-5 xs:w-6 xs:h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-800 text-sm xs:text-base">
                Secure Registration
              </h3>
              <p className="text-xs xs:text-sm text-green-700">
                Your information is protected and will only be used for academy enrollment purposes.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 xs:space-y-8">
            {/* Trainee Information */}
            <div>
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 flex items-center">
                <User className="w-5 h-5 xs:w-6 xs:h-6 mr-2 xs:mr-3 text-primary-600" />
                Trainee Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label htmlFor="middleName" className={labelClasses}>
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Middle (optional)"
                  />
                </div>

                <div className="sm:col-span-2 md:col-span-1">
                  <label htmlFor="surname" className={labelClasses}>
                    Surname *
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter surname"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 mt-4 xs:mt-5 sm:mt-6">
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    <Phone className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    <Mail className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="trainee@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 mt-4 xs:mt-5 sm:mt-6">
                <div>
                  <label htmlFor="dateOfBirth" className={labelClasses}>
                    <Calendar className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="age" className={labelClasses}>
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    className={inputClasses}
                    placeholder="Auto"
                    readOnly
                  />
                </div>

                <div className="xs:col-span-2 sm:col-span-1">
                  <label htmlFor="gender" className={labelClasses}>
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 xs:mt-5 sm:mt-6">
                <label htmlFor="homeAddress" className={labelClasses}>
                  <MapPin className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                  Home Address *
                </label>
                <textarea
                  id="homeAddress"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={inputClasses}
                  placeholder="Enter complete home address"
                />
              </div>

              <div className="mt-4 xs:mt-5 sm:mt-6">
                <label htmlFor="allergies" className={labelClasses}>
                  <AlertCircle className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                  Allergies / Medical Conditions
                </label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows={3}
                  className={inputClasses}
                  placeholder="List any allergies or conditions (leave blank if none)"
                />
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div>
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-4 xs:mb-5 sm:mb-6 flex items-center">
                <User className="w-5 h-5 xs:w-6 xs:h-6 mr-2 xs:mr-3 text-primary-600" />
                Parent/Guardian Info
              </h2>

              <div className="grid grid-cols-1 gap-4 xs:gap-5 sm:gap-6">
                <div>
                  <label htmlFor="parentFullName" className={labelClasses}>
                    Parent/Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    id="parentFullName"
                    name="parentFullName"
                    value={formData.parentFullName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="parentEmail" className={labelClasses}>
                      <Mail className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                      Parent Email *
                    </label>
                    <input
                      type="email"
                      id="parentEmail"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="parent@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="parentPhone" className={labelClasses}>
                      <Phone className="w-3 h-3 xs:w-4 xs:h-4 inline mr-1.5 xs:mr-2" />
                      Parent Phone *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="parentWorkplace" className={labelClasses}>
                    Parent/Guardian Workplace
                  </label>
                  <input
                    type="text"
                    id="parentWorkplace"
                    name="parentWorkplace"
                    value={formData.parentWorkplace}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Company and position (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-lg p-4 xs:p-5 sm:p-6">
              <label className="flex items-start space-x-2 xs:space-x-3">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 flex-shrink-0"
                />
                <span className="text-xs xs:text-sm text-gray-700 leading-relaxed">
                  I agree to the{" "}
                  <button type="button" className="text-primary-600 hover:text-primary-700 font-medium underline">
                    Terms and Conditions
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-primary-600 hover:text-primary-700 font-medium underline">
                    Privacy Policy
                  </button>
                  . I consent to Nosa Igiebor Sports Academy contacting me regarding this registration and future programs.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4 xs:pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full xs:w-auto min-w-[280px] xs:min-w-[200px] text-sm xs:text-base py-3 xs:py-4 font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
              </Button>
              <p className="text-xs xs:text-sm text-gray-600 mt-3 xs:mt-4 px-4 xs:px-0">
                * Required fields. We'll contact you within 24 hours to confirm your registration.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;