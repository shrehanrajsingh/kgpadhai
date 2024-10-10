import Image from "next/image";

import Testimonial1 from "./assets/testimonial1.jpeg";
import Testimonial2 from "./assets/testimonial2.jpeg";
import Testimonial3 from "./assets/testimonial3.jpeg";

const courses=[
  {
    slug:"course/learnjava",
    coursename:"Learn Java",
    image:"/assets/course1.png",
    description:"Learn Java Description",
  },
  {
    slug:"course/learnwebdev",
    coursename:"Learn WebDev",
    image:"/assets/course2.png",
    description:"Learn WebDev Description",
  },
  {
    slug:"course/learndsa",
    coursename:"Learn Data Structures & Algorithms",
    image:"/assets/course3.png",
    description:"Learn DSA",
  }
]
export default function Home() {
  return (
    <div >
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
        <a href="/" className="pl-8">Logo</a>

        <div className="pr-8 md:block hidden">
          <a href="/" className="p-4">Home</a>
          <a href="/" className="p-4">About Us</a>
          <a href="/" className="p-4">Courses</a>
          <a href="/" className="p-4">Contact Us</a>
        </div>

        <div className="md:hidden block">
          <button className="mobile-menu-button p-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <a href="/" className="block p-4">Home</a>
          <a href="/" className="block p-4">About Us</a>
          <a href="/" className="block p-4">Courses</a>
          <a href="/" className="block p-4">Contact Us</a>
        </div>
      </nav>

      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">KGPadhai</h1>
        <a href="#courses" className="py-6 px-10 bg-black text-white rounded-full text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce">Learn Now</a>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-100 h-screen font-mono py-10" id="courses">
        <h1 className="text-5xl font-black">Courses</h1>
        <p className="lg:w-2/3 md:w-3/4 sm:w-full text-xl text-center font-black mt-4">Choose from a wide range of courses</p>
        <div className="flex flex-wrap justify-center mt-16">
          
        {Object.keys(courses).map((key,index) => {
        return (
          <div className="m-6 shadow-lg bg-white" key={key} style={{ width: "300px" }}>
            <Image src={courses[index]['image']} alt="course{index}" width={300} height={200} />
            <div className="p-4" key={index}>
              <span className="font-bold text-gray-700">{courses[index]['coursename']}</span>
              <span className="block text-gray-500 text-sm">{courses[index]['description']}</span>
              <a href={courses[index]['slug']} className="py-1 px-5 bg-green-700 text-white rounded-full text-md hover:bg-green-400 transition duration-300 ease-in-out flex items-center" style={{width:'40%'}}>Explore</a>
            </div>
          </div>
        )})
    }

        </div>
      </div>


      <div className="flex flex-col justify-center items-center bg-gray-100 h-screen font-mono py-10" id="about">
        <h1 className="text-5xl font-black">About Us</h1>
        <p className="lg:w-2/3 md:w-3/4 sm:w-full text-xl text-center font-black mt-4">
          We are dedicated to providing the best online learning experience. Our platform offers a wide range of courses designed to help you achieve your goals.
        </p>
        <div className="flex flex-wrap justify-center mt-16">
          <div className="m-6 shadow-lg bg-white p-6 rounded-lg" style={{ width: "300px" }}>
            <h2 className="font-bold text-2xl">Our Mission</h2>
            <p className="text-gray-500 text-sm mt-4">
              To empower learners everywhere by providing high-quality education and resources.
            </p>
          </div>
          <div className="m-6 shadow-lg bg-white p-6 rounded-lg" style={{ width: "300px" }}>
            <h2 className="font-bold text-2xl">Our Vision</h2>
            <p className="text-gray-500 text-sm mt-4">
              To be the leading online learning platform, recognized for our innovative approach and commitment to excellence.
            </p>
          </div>
          <div className="m-6 shadow-lg bg-white p-6 rounded-lg" style={{ width: "300px" }}>
            <h2 className="font-bold text-2xl">Our Values</h2>
            <p className="text-gray-500 text-sm mt-4">
              Integrity, Innovation, and Inclusivity are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-100 h-screen font-mono py-10">
        <h1 className="text-5xl font-black">Testimonials</h1>
        <p className="lg:w-2/3 md:w-3/4 sm:w-full text-xl text-center font-black mt-4">What our customers say about us</p>
        <div className="flex flex-wrap justify-center mt-16">
          <div className="m-6 shadow-lg bg-white" style={{ width: "300px" }}>
            <Image src={Testimonial1} alt="course1" width={300} height={200} />
            <div className="p-4">
              <span className="font-bold">John Doe</span>
              <span className="block text-gray-500 text-sm">"This platform has transformed my learning experience. Highly recommended!"</span>
            </div>
          </div>
          <div className="m-6 shadow-lg bg-white" style={{ width: "300px" }}>
            <Image src={Testimonial2} alt="course1" width={300} height={200} />
            <div className="p-4">
              <span className="font-bold">Jane Smith</span>
              <span className="block text-gray-500 text-sm">"The courses are well-structured and the instructors are very knowledgeable."</span>
            </div>
          </div>
          <div className="m-6 shadow-lg bg-white" style={{ width: "300px" }}>
            <Image src={Testimonial3} alt="course1" width={300} height={200} />
            <div className="p-4">
              <span className="font-bold">Sam Wilson</span>
              <span className="block text-gray-500 text-sm">"I love the flexibility and the variety of courses offered."</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-100 h-screen font-mono py-10">
        <h1 className="text-5xl font-black">Contact Us</h1>
        <p className="lg:w-2/3 md:w-3/4 sm:w-full text-xl text-center font-black mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="w-full md:w-2/3 mt-10">
          <form className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="border border-gray-300 p-2 mb-4 rounded-md" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="border border-gray-300 p-2 mb-4 rounded-md" />
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="4" className="border border-gray-300 p-2 mb-4 rounded-md"></textarea>
            <button type="submit" className="w-full bg-black text-white py-2 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
