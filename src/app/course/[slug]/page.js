"use client";

import { usePathname, useSearchParams } from "next/navigation";


function CoursePage() {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const slug = pathname.split("/").pop();
    const query = Object.fromEntries(searchParams);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    {/* Hero Section */}
                    <div className="relative h-96 bg-gradient-to-r from-blue-600 to-indigo-700">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 px-8 py-16 flex flex-col justify-center h-full">
                            <h1 className="text-4xl font-bold text-white mb-4">
                                {decodeURIComponent(slug)}
                            </h1>
                            <p className="text-xl text-gray-200">Master your skills with our comprehensive course</p>
                        </div>
                    </div>

                    {/* Course Details */}
                    <div className="px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-2 space-y-6">
                                <section className="space-y-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">Course Overview</h2>
                                    <p className="text-gray-600">
                                        Learn from industry experts and gain practical experience through hands-on projects.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-semibold text-gray-800">What You'll Learn</h2>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>Fundamental concepts and best practices</li>
                                        <li>Real-world project implementation</li>
                                        <li>Industry-standard tools and techniques</li>
                                        <li>Problem-solving and optimization</li>
                                    </ul>
                                </section>
                            </div>

                            {/* Course Card */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <span className="text-3xl font-bold text-gray-900">$9<sup>99</sup></span>
                                        <span className="text-gray-600">/month</span>
                                    </div>
                                    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Enroll Now
                                    </button>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-4">
                                            <p className="text-gray-600">✓ Full course access</p>
                                            <p className="text-gray-600">✓ Project resources</p>
                                            <p className="text-gray-600">✓ Community support</p>
                                            <p className="text-gray-600">✓ Certificate of completion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;