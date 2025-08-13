'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaBuilding, FaUser } from 'react-icons/fa';
import { tilt_neon } from '@/font';

const services = [
    'SEO & Marketing',
    'Website Design & Development',
    'Website + SEO',
    'UX/UI Design',
    'Development',
    'eCommerce Design & Development',
    'Landing Page',
    'App Design & Development',
    'Software Development',
    'Software Automation',
    'CRM',
    'ERP',
    'HRMS',
    'Others',
];

const budgets = [
    'INR 50,000 – 1,00,000',
    'INR 1,00,000 – 3,00,000',
    'INR 3,00,000 – 5,00,000',
    'INR 5,00,000 – 10,00,000',
    'INR 10,00,000 – 20,00,000',
    'INR 20,00,000+',
];

export default function Form() {
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState(null);

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    return (
        <div className="bg-[#f9f9f9] p-6 sm:p-10 rounded-xl shadow-md max-w-4xl mx-auto text-black" id='quote'>
            <h2 className={`text-2xl md:text-3xl font-black mb-4 ${tilt_neon.className}`}>
                Let's create something together
            </h2>

            {/* Section 1: Services */}
            <div className="mb-8">
                <p className="text-sm font-medium text-[#5c66ab] mb-3">
                    1. What we'll be crafting together...*
                </p>
                <div className="flex flex-wrap gap-3">
                    {services.map((service, idx) => (
                        <motion.button
                            key={idx}
                            type="button"
                            onClick={() => toggleService(service)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-sm border transition-all duration-150 ${selectedServices.includes(service)
                                ? 'bg-purple-100 border-[#3f4670] text-[#3f4670] font-semibold'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {service}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Section 2: Budget */}
            <div className="mb-8">
                <p className="text-sm font-medium text-[#5c66ab] mb-3">2. Your budget is...*</p>
                <div className="flex flex-wrap gap-3">
                    {budgets.map((budget, idx) => (
                        <motion.button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full text-sm border transition-all duration-150 ${selectedBudget === budget
                                ? 'bg-purple-100 border-[#3f4670] text-[#3f4670] font-semibold'
                                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {budget}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Section 3: Personal Info */}
            <div className="mb-10">
                <p className="text-sm font-medium text-[#5c66ab] mb-3">3. Tell us a little about you...</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center  border-gray-300 px-3 py-2 rounded-lg">
                        <FaUser className="text-[#5c66ab] mr-2" />
                        <input type="text" placeholder="Your Name*" className="input" />
                    </div>
                    <div className="flex items-center  border-gray-300 px-3 py-2 rounded-lg">
                        <FaEnvelope className="text-[#5c66ab] mr-2" />
                        <input type="email" placeholder="Email*" className="input" />
                    </div>
                    <div className="flex items-center  border-gray-300 px-3 py-2 rounded-lg">
                        <FaBuilding className="text-[#5c66ab] mr-2" />
                        <input type="text" placeholder="Company" className="input" />
                    </div>
                </div>

                <textarea
                    placeholder="What’s on your mind?*"
                    rows={4}
                    className="input resize-none"
                ></textarea>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <select className="input">
                        <option>Do you have a specific deadline?</option>
                        <option>Within 1 month</option>
                        <option>Within 3 months</option>
                        <option>Flexible</option>
                    </select>
                    <select className="input">
                        <option>Where do you know us from?</option>
                        <option>Google</option>
                        <option>LinkedIn</option>
                        <option>Referral</option>
                        <option>Other</option>
                    </select>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                    <span>Or drop us a line</span>
                    <a href="mailto:hello@webseeder.in" className="text-black font-medium hover:underline">
                        hello@webseeder.in
                    </a>
                    <label className="flex items-center gap-1 text-xs mt-1 sm:mt-0 sm:ml-4">
                        <input type="checkbox" className="accent-[#3f4670]" />
                        I want to subscribe to <span className="font-bold">webseeder</span>
                    </label>
                </div>

                <motion.button
                    onClick={() => console.log('Form submitted')} // Replace with actual handler
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="group inline-flex items-center justify-center cursor-pointer bg-[#5c66ab] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform hover:scale-105 relative"
                >
                    <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                        Submit Action
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                        <FaPaperPlane className="h-5 w-5" />
                    </span>
                </motion.button>
            </div>

            {/* Custom input styling */}
            <style jsx>{`
                .input {
                    border: 1px solid #d1d5db;
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    width: 100%;
                    background-color: #fff;
                    color: #111827;
                }
                .input:focus {
                    outline: none;
                    border-color: #d1d5db;
                    box-shadow: 0 0 0 1px #d1d5db;
                }
            `}</style>
        </div>
    );
}
