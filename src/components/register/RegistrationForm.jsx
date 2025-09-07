import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, MapPin, AlertCircle, Shield } from 'lucide-react';
import Button from '../common/Button';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    surname: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    parentFullName: '',
    homeAddress: '',
    allergies: '',
    parentEmail: '',
    parentPhone: '',
    parentWorkplace: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate age when date of birth changes
    if (name === 'dateOfBirth' && value) {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        setFormData(prev => ({ ...prev, age: (age - 1).toString() }));
      } else {
        setFormData(prev => ({ ...prev, age: age.toString() }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Netlify form submission will handle the redirect
    // The form action and method are handled by Netlify
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register for Nosa Sports Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your journey to football excellence. Fill out the form below to secure your place at our academy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Security Notice */}
          <div className="flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Secure Registration</h3>
              <p className="text-sm text-green-700">Your information is protected and will only be used for academy enrollment purposes.</p>
            </div>
          </div>

          <form 
            name="academy-registration" 
            method="POST" 
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="academy-registration" />
            <input type="hidden" name="bot-field" />

            {/* Trainee Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-primary-600" />
                Trainee Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    placeholder="Enter middle name (optional)"
                  />
                </div>
                
                <div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    <Phone className="w-4 h-4 inline mr-2" />
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    <Mail className="w-4 h-4 inline mr-2" />
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label htmlFor="dateOfBirth" className={labelClasses}>
                    <Calendar className="w-4 h-4 inline mr-2" />
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
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Auto-calculated"
                    readOnly
                  />
                </div>
                
                <div>
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

              <div className="mt-6">
                <label htmlFor="homeAddress" className={labelClasses}>
                  <MapPin className="w-4 h-4 inline mr-2" />
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

              <div className="mt-6">
                <label htmlFor="allergies" className={labelClasses}>
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  Allergies / Medical Conditions
                </label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows={3}
                  className={inputClasses}
                  placeholder="Please list any allergies, medical conditions, or medications (leave blank if none)"
                />
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-primary-600" />
                Parent/Guardian Information
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
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
                    placeholder="Enter parent/guardian full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentEmail" className={labelClasses}>
                      <Mail className="w-4 h-4 inline mr-2" />
                      Parent/Guardian Email *
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
                      <Phone className="w-4 h-4 inline mr-2" />
                      Parent/Guardian Phone *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="+1 (555) 123-4567"
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
                    placeholder="Company name and position (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-lg p-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">Terms and Conditions</a> and 
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium"> Privacy Policy</a>. 
                  I consent to Nosa Sports Academy contacting me regarding this registration and future programs.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                loading={isSubmitting}
                className="min-w-[200px]"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
              </Button>
              <p className="text-sm text-gray-600 mt-4">
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