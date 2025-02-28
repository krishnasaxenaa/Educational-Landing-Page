import React from 'react';
import Html from '../assets/Images/Html.svg';
import CSS from '../assets/Images/CSS.svg';
import Js from '../assets/Images/Js.svg';
import ReactImage from '../assets/Images/React.svg';
import Tailwind from '../assets/Images/Tailwind.svg';
import Figma from '../assets/Images/Figma.svg';
import Wordpress from '../assets/Images/Wordpress.svg';
import Git from '../assets/Images/Git.svg';

const skills = [
  { src: Html, alt: 'HTML' },
  { src: CSS, alt: 'CSS' },
  { src: Js, alt: 'JavaScript' },
  { src: ReactImage, alt: 'React' },
  { src: Tailwind, alt: 'Tailwind CSS' },
  { src: Figma, alt: 'Figma' },
  { src: Wordpress, alt: 'WordPress' },
  { src: Git, alt: 'Git' }
];

const Course = () => {
  return (
    <section className='w-full md:w-[1250px] mx-auto my-8 p-4 md:p-12'>
      <div>
        <div className='mb-4'>
          <h1 className='text-4xl font-bold '>Skills</h1>
        </div>
        <div className='w-full sm:w-[600px] mx-auto flex flex-col justify-center items-center'>
          <p className='text-2xl font-medium mb-8 text-center'>The skills, tools, and technologies I use:</p>
          <div className='w-full flex flex-wrap justify-center gap-10'>
            {skills.map((skill, index) => (
              <img key={index} src={skill.src} alt={skill.alt} className='w-[80px]' />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
