import React from "react";
import Herosection from "../assets/Herosection.jpg";

const Hero = () => {
  const heading = "Unlock Your Potential with SkillSphere";
  const subheading = "Learn from industry experts and grow your skills with our comprehensive courses.";
  const buttonText = "Get Started";
  const imageAlt = "Hero Section";
  const sectionTitle = "Courses with Top Categories";

  // Course categories data
  const courses = [
    { id: 1, name: "HTML & CSS", icon: "📄", description: "Learn the basics of web development." },
    { id: 2, name: "JavaScript", icon: "🟨", description: "Master the language of the web." },
    { id: 3, name: "React.js", icon: "⚛️", description: "Build dynamic user interfaces." },
    { id: 4, name: "Vue.js", icon: "🟢", description: "Create modern web applications." },
    { id: 5, name: "Web Accessibility", icon: "♿", description: "Make the web inclusive for everyone." },
    { id: 6, name: "Performance Optimization", icon: "⚡", description: "Speed up your websites." },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] p-4 md:p-0">
      <div className="max-w-[1250px] mx-auto py-12">
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="w-full sm:w-1/2 p-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{heading}</h2>
            <p className="text-xl sm:text-3xl font-semibold mb-4 text-gray-800">{subheading}</p>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 cursor-pointer transition duration-100"
              aria-label="Get Started"
            >
              {buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="p-4">
            <a href="#">
              <img
                src={Herosection}
                alt={imageAlt}
                className="w-[550px] max-w-full mix-blend-multiply"
              />
            </a>
          </div>
        </div>

        {/* Courses Overview Section */}
        <div className="my-16">
          <h3 className="text-4xl text-center font-bold mb-8">{sectionTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{course.name}</h4>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;