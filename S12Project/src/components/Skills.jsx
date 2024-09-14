import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { SkillsData } from "../data/SkillsData";
import data from "../data/data";

function Skills() {
  const { language } = useLanguage();
  const skillsTitle = data[language].skillsTitle;

  return (
    <div className="container mx-auto flex flex-col items-center py-20 bg-white text-center dark:bg-myDarkG">
      <h1 className="text-4xl font-bold mb-12 dark:text-white">
        {skillsTitle}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {SkillsData.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center">
            <img
              className="w-24 h-24 object-contain rounded-md bg-gray-100 p-2 dark:bg-gray-700"
              src={skill.imgsrc}
              alt={skill.name}
            />
            <p className="mt-2 text-lg font-medium text-neutral-700 dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <img
        src="/svg/Rectangle_22.svg"
        alt=""
        className="relative top-[130px] right-[710px] hidden sm:block"
      />
      <img
        src="/svg/Ellipse_12.svg"
        alt=""
        className="relative top-[130px] left-[730px] hidden sm:block"
      />
    </div>
  );
}

export default Skills;
