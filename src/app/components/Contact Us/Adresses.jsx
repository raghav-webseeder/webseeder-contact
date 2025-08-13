'use client';

import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Form from './Form';
import { motion } from 'framer-motion';

const locations = [
    {
        city: 'Harare',
        address: '12807A0282024, Harare, ZW',
        link: 'https://maps.google.com/?q=12807A0282024, Harare, ZW'
    },
    {
        city: 'Indore',
        address:
            'Office No. 203, Navneet Plaza, 5/2 Old Palasia, Greater Kailash Road, Above Fantasy Bakery, Indore, Madhya Pradesh, India',
        link: 'https://maps.google.com/?q=Office No. 203, Navneet Plaza, 5/2 Old Palasia, Indore',
        primary: true
    },
    {
        city: 'Kingston Upon Thames',
        address: 'KT6 7DQ Tolworth Broadway, Kingston Upon Thames, GB',
        link: 'https://maps.google.com/?q=KT6 7DQ Tolworth Broadway, Kingston Upon Thames'
    },
    {
        city: 'Sharjah',
        address: 'Block C V104 SRTIP, Sharjah, AE',
        link: 'https://maps.google.com/?q=Block C V104 SRTIP, Sharjah'
    }
];

export default function Contact() {
    return (
        <div
            className="relative bg-cover bg-center px-6 md:px-16 py-16 text-white"
            style={{
                backgroundImage: "url('/contactBackground.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-stretch relative z-10">
                {/* === Left Side - Contact Info === */}
                <motion.div
                    className="flex flex-col h-full pr-2 lg:border-r lg:border-white/20"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white font-semibold uppercase mb-3 text-sm tracking-wide text-center sm:text-left">
                        Let's Discuss Your Project
                    </p>
                    <h2 className="text-5xl font-bold text-white mb-6 leading-tight text-center sm:text-left">
                        Webseeder Technologies
                    </h2>

                    {/* Contact info */}
                    <div className="mb-10 space-y-2">
                        <div className="flex items-center gap-3 text-lg text-gray-300">
                            <FaEnvelope className="text-blue-400" />
                            <a href="mailto:hello@webseeder.in" className="hover:underline">hello@webseeder.in</a>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-gray-300">
                            <FaPhoneAlt className="text-blue-400" />
                            <a href="tel:+917898877166" className="hover:underline">+91-7898877166</a>
                        </div>
                    </div>

                    {/* Location List */}
                    <div className="space-y-8 text-base text-gray-300">
                        {locations.map((loc, index) => (
                            <motion.div
                                key={index}
                                className="border-t border-white/10 pt-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
                                    {loc.city}
                                    {loc.primary && (
                                        <span className="bg-white/10 text-xs px-2 py-0.5 rounded-full">Primary</span>
                                    )}
                                </h4>
                                {loc.primary && <p className="font-semibold text-sm text-white mb-1">Headquarters</p>}
                                <p className="mb-2 leading-relaxed">{loc.address}</p>
                                <a
                                    href={loc.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 flex items-center gap-1 text-sm hover:underline"
                                >
                                    Get directions <FaExternalLinkAlt size={11} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* === Right Side - Contact Form === */}
                <motion.div
                    className="flex flex-col h-full pr-2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Form />
                </motion.div>
            </div>
        </div>
    );
}
