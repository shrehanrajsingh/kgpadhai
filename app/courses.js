"use client"
import { useEffect, useState } from 'react';
import Image from "next/image";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="courses">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <h2 className="text-5xl text-center font-semibold tracking-tight text-white sm:text-7xl">Courses</h2>
            <div className="md:flex justify-center items-start font-mono py-10 ">
                {courses.map((course) => (
                    <div key={course._id} className="md:max-w-sm bg-white text-black border m-4 border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img src={"courseimg/"+course.image} alt={course.coursename} width={400} height={200} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{course.coursename}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.description}.</p>
                            <br />
                            <a href={course.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check out
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12M9 1l4 4-4 4"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;