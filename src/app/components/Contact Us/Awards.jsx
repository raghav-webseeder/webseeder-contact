'use client';

import React from 'react';
import { FaTrophy, FaHandshake, FaRegStar, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { tilt_neon } from '@/font';

export default function Awards() {
    return (
        <div className="bg-white p-10 sm:p-16 max-w-6xl mx-auto text-black">
            <h2 className={`text-2xl md:text-3xl font-black text-center mb-4 ${tilt_neon.className}`}>
                Our Prestigious Awards & Recognition
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Award 1 */}
                <motion.div
                    className="text-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    
                >
                    <FaAward className="text-4xl mb-4 text-pink-600" />
                    <h3 className="text-lg font-semibold mb-3">Proudly Celebrating Excellence</h3>
                    <p className="text-sm text-gray-600">
                        Our dedication to innovation and client success has earned us this prestigious reward.
                    </p>
                </motion.div>

                {/* Award 2 */}
                <motion.div
                    className="text-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaHandshake className="text-4xl mb-4 text-green-600" />
                    <h3 className="text-lg font-semibold mb-3">A Testament to Teamwork</h3>
                    <p className="text-sm text-gray-600">
                        This award is a reflection of our talented team's relentless pursuit of excellence.
                    </p>
                </motion.div>

                {/* Award 3 */}
                <motion.div
                    className="text-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaRegStar className="text-4xl mb-4 text-blue-500" />
                    <h3 className="text-lg font-semibold mb-3">Dedicated to Delivering Results</h3>
                    <p className="text-sm text-gray-600">
                        We're honored to have received this award, a testament to our commitment to achieving outstanding results.
                    </p>
                </motion.div>

                {/* Award 4 */}
                <motion.div
                    className="text-center p-6 bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <FaTrophy className="text-4xl mb-4 text-[#5c66ab]" />
                    <h3 className="text-lg font-semibold mb-3">Your Trust, Our Reward</h3>
                    <p className="text-sm text-gray-600">
                        This award symbolizes the trust our clients have placed in us, driving us to excel in IT and marketing services.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
