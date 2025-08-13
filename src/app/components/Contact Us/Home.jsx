'use client';

import React from 'react';
import { FaClock, FaCalendarAlt, FaDesktop, FaUsers, FaGlobe, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import Image from 'next/image';
import { tilt_neon } from '@/font';

export default function Home() {
    return (
        <div className="bg-white px-4 md:px-20 py-12 text-gray-800">
            {/* Main Section  */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                {/* LEFT: Text Content (60%) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3"
                >
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900 tracking-tight ${tilt_neon.className}`}>
                        Let’s Build What Your Business Actually Needs
                    </h1>
                    <p className="text-lg mb-4">
                        Have a project in mind? Stuck with outdated systems? Or just need clarity before your next digital move?
                        Speak directly with our experts in web development, software engineering, mobile apps, automation, and digital marketing.
                    </p>
                    <p className="font-bold text-base mb-6">
                        Book a Free Tech Consultation | Contact Our Team
                    </p>
                    <motion.button
                        onClick={() => {
                            scroller.scrollTo('quote', {
                                smooth: true,
                                offset: -100,
                                duration: 500,
                            });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center justify-center cursor-pointer bg-[#5c66ab] text-white rounded px-4 py-2 text-sm sm:text-lg shadow-lg gap-2 transition-all duration-300 transform hover:scale-105 relative"
                    >
                        <span className="transition-all duration-500 group-hover:opacity-0 group-hover:scale-0">
                            Get a Quote
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center opacity-0 scale-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                            <FaArrowRight className="h-5 w-5" />
                        </span>
                    </motion.button>
                </motion.div>

                {/* RIGHT: Image (40%) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 flex justify-center items-center"
                >
                    <div className="bg-gray-300 w-full h-[300px] sm:w-[600px] lg:h-[400px] rounded-lg overflow-hidden relative">
                        {/* Replace with actual image */}
                        <Image
                            src="/AdobeStock_161922244.jpeg" // Path to your image
                            alt="Landscape Image"
                            layout="fill" // Ensures the image fills the container
                            objectFit="cover" // Ensures the image is cropped to maintain the landscape aspect
                        />
                    </div>
                </motion.div>
            </section>

            {/* Awards Section */}
            <section className="max-w-7xl mx-auto mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Award 1 */}
                    <motion.div
                        className="bg-red-50 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FaClock className="text-3xl mb-4 text-orange-500" />
                        <div className="text-2xl font-bold text-orange-500">99%</div>
                        <p className="text-sm font-medium text-gray-700">Job Satisfaction Ratio</p>
                    </motion.div>

                    {/* Award 2 */}
                    <motion.div
                        className="bg-purple-50 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FaCalendarAlt className="text-3xl mb-4 text-indigo-600" />
                        <div className="text-2xl font-bold text-indigo-600">15+</div>
                        <p className="text-sm font-medium text-gray-700">Years of Experience</p>
                    </motion.div>

                    {/* Award 3 */}
                    <motion.div
                        className="bg-green-50 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FaDesktop className="text-3xl mb-4 text-emerald-500" />
                        <div className="text-2xl font-bold text-emerald-500">9,050+</div>
                        <p className="text-sm font-medium text-gray-700">Successful Projects</p>
                    </motion.div>

                    {/* Award 4 */}
                    <motion.div
                        className="bg-blue-50 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <FaUsers className="text-3xl mb-4 text-blue-600" />
                        <div className="text-2xl font-bold text-blue-600">35+</div>
                        <p className="text-sm font-medium text-gray-700">Experts</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
