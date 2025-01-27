import React from "react";
import AboutImg from "../assets/asset 1.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 flex px-20">
      <img src={AboutImg} alt="Developer Illustration" className="w-1/2" />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6  dark:text-white pb-12 text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-6 text-justify">
          As a web developer, <br></br>I am passionate about creating visually
          appealing and user-friendly websites. With expertise in HTML, CSS,
          JavaScript, Bootstrap, I strive to deliver high-quality
          and responsive designs that meet the needs of my clients. I look
          forward to collaborating with you and bringing your web development
          projects to life. Feel free to explore my portfolio and get in touch
          with me to discuss your project requirements.
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex ">
          <a href="https://drive.google.com/file/d/1T2Dn80RO1HuGWjGY5bgM-nhMK9debXV-/view?usp=sharing" alt="../assets/Manmohan singh.pdf">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
