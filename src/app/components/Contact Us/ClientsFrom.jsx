'use client';
import { tilt_neon } from "@/font";
import React from 'react';
import Flag from 'react-world-flags';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

// Dynamically import Globe with ssr: false to disable SSR
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

const countries = [
    { name: 'USA', code: 'US' },
    { name: 'UK', code: 'GB' },
    { name: 'Australia', code: 'AU' },
    { name: 'India', code: 'IN' },
    { name: 'Canada', code: 'CA' },
    { name: 'Germany', code: 'DE' },
    { name: 'Spain', code: 'ES' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'France', code: 'FR' },
    { name: 'Italy', code: 'IT' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'UAE', code: 'AE' },
    { name: 'Israel', code: 'IL' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Finland', code: 'FI' },
];

export default function ClientsFrom() {
    return (
        <div className="bg-white px-6 md:px-16 py-16 text-gray-800">
            {/* Main Section */}
            <section className="max-w-7xl mx-auto">
                {/* Top Center Content */}
                <div className="text-center mb-12">
                    <h2 className={`text-4xl font-bold text-indigo-900 mb-6 ${tilt_neon.className}`}>
                        Our Clients From
                    </h2>
                    <p className="text-lg mb-4 text-gray-600">
                        Our clients are from various corners of the globe including the USA,
                        UK, Europe, UAE, Australia, Spain, Netherlands, Finland & many more.
                    </p>
                    <p className="text-base text-gray-500 mb-8">
                        Our value addition point is to understand the needs of the global
                        clients, being available as per timezone requirements & eventually
                        coming up with solutions that are built to enhance their online
                        presence and do goal-conversion.
                    </p>
                    <button className="bg-green-500 text-white rounded-full py-2 px-6 text-lg">
                        Elevate Your Journey with Us
                    </button>
                </div>

                {/* Flex container for Flags and Globe */}
                <div className="lg:flex lg:justify-between gap-12">
                    {/* Left Section - Flag List */}
                    <div className="lg:w-3/5 w-full">
                        {/* Stats Section */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                                <div className="text-3xl font-bold text-green-500">15+</div>
                                <p className="text-sm text-gray-700">Years of Experience</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
                                <div className="text-3xl font-bold text-blue-500">35,000+</div>
                                <p className="text-sm text-gray-700">Hours Worked</p>
                            </div>
                            <div className="bg-teal-50 p-6 rounded-lg shadow-md text-center">
                                <div className="text-3xl font-bold text-teal-500">580+</div>
                                <p className="text-sm text-gray-700">Global Clients</p>
                            </div>
                            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
                                <div className="text-3xl font-bold text-yellow-500">9,050+</div>
                                <p className="text-sm text-gray-700">Successful Projects</p>
                            </div>
                        </div>

                        {/* Flag List */}
                        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 text-xl">
                            {countries.map((country, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Flag code={country.code} style={{ width: '3em', height: '3em' }} />
                                    <span className="mt-2 text-sm text-gray-800">{country.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Globe Icon */}
                    <div className="lg:w-2/5 w-full mt-16 lg:mt-0 flex items-center justify-center">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={400}
                                width={400}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
