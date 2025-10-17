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

      alert("✅ Registration successful!. Kindly forward your payment slip, fullname, and phone to our WhatsApp. Thank you.");
      window.location.href = "/thank-you";
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

          {/* Payment Information */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-300 rounded-xl p-4 xs:p-5 sm:p-6 mb-6 xs:mb-8">
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-primary-900 mb-3 xs:mb-4 flex items-center">
              <svg className="w-5 h-5 xs:w-6 xs:h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Academy Fee & Payment Details
            </h3>
            
            <div className="space-y-3 xs:space-y-4">
              <div className="bg-white rounded-lg p-3 xs:p-4 shadow-sm">
                <p className="text-xs xs:text-sm text-gray-600 mb-1">One Year Academy Fee</p>
                <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-primary-600">₦100,000</p>
              </div>

              <div className="bg-white rounded-lg p-3 xs:p-4 shadow-sm space-y-2">
                <p className="font-semibold text-gray-900 text-sm xs:text-base mb-2">Bank Transfer Details:</p>
                <div className="space-y-1.5 text-xs xs:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-semibold text-gray-900 text-right">Nosakhare Emmanuel Igiebor</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-200">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-semibold text-gray-900 font-mono">9055599964</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-semibold text-gray-900">Moniepoint</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-900 text-white rounded-lg p-3 xs:p-4">
                <p className="font-semibold text-sm xs:text-base mb-2 flex items-center">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  After Payment:
                </p>
                <p className="text-xs xs:text-sm leading-relaxed">
                  Send your <span className="font-semibold">payment slip</span> to our WhatsApp along with your <span className="font-semibold">full name</span> and <span className="font-semibold">phone number</span> for confirmation.
                </p>
              </div>
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