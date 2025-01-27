import React from 'react';
import SkillImg from   '../assets/asset 2.png';




const Skills = () => {
  const skills = [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 84 },
    { name: 'JavaScript', level: 74 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Git & GitHub', level: 60 },
    { name: 'React', level: 70 },
    { name: 'Python', level: 50 },
  ];

  return (
    <section id="skills" className="bg-white px-[13rem] dark:bg-gray-900 py-20 flex">
  <div className="container ">
    <h2 className="text-4xl font-bold ml-[33rem] mb-8 dark:text-white text-purple-500">Skills
     
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-1 gap-[2rem] mr-[10rem]">
      {skills.map((skill, index) => (
        <div key={index} className="w-full ">
          <h3 className="text-sm font-semibold dark:text-gray-300">{skill.name}</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full" style={{ width: `${skill.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
  <img src={SkillImg} alt="Developer Illustration" className="w-1/2 " style={{width:'35rem', height:'35rem'}}/>
</section>

  );
};

export default Skills;
