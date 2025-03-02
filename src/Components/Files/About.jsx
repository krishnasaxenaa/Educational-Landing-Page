import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-gray-200">
      <div className="w-full md:w-[1250px] mx-auto my-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">
            Welcome to Educational Hub
          </h1>
          <p className="text-lg mb-8 text-left">
            Where we believe that anyone can learn to code and unlock their
            potential in the digital world. Our mission is to make coding
            accessible, engaging, and fun for learners of all ages and skill
            levels.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg">
            We are a team of passionate educators, developers, and tech
            enthusiasts dedicated to empowering individuals with the skills they
            need to thrive in today’s technology-driven world.
            {showMore && (
              <span>
                Whether you're a beginner taking your first steps into
                programming or an experienced coder looking to sharpen your
                skills, we’re here to guide you every step of the way.
              </span>
            )}
          </p>
          <button
            onClick={toggleShowMore}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-700 transition"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-lg">
              Interactive Courses: Hands-on, project-based learning designed to
              help you master coding concepts quickly and effectively.
            </li>
            <li className="text-lg">
              Personalized Learning Paths: Tailored courses to match your goals,
              whether you're learning for fun, school, or a career change.
            </li>
            <li className="text-lg">
              Expert Instructors: Learn from industry professionals with
              real-world experience.
            </li>
            <li className="text-lg">
              Community Support: Join a vibrant community of learners,
              collaborate on projects, and get your questions answered.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a world where everyone has the opportunity to learn
            coding and use it to solve problems, create innovations, and build a
            better future. By breaking down barriers to tech education, we aim
            to inspire the next generation of developers, designers, and tech
            leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
