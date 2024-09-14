import React from "react";
import data from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Profile() {
  const { language } = useLanguage();
  const { profile } = data[language];

  return (
    <div className="container mx-auto bg-header dark:bg-myDarkC pt-6 pb-20">
      <h2 className="text-3xl font-bold text-center p-10 dark:text-white">
        {profile.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-stretch">
        {/* Bilgi Kartı */}
        <div className="bg-white dark:bg-darkPi dark:text-white p-10 w-full rounded-xl shadow-lg lg:max-w-md lg:pl-12 lg:py-10">
          <div className="text-medium text-[#a02256] mb-2 font-semibold">
            {profile.informationTitle}
          </div>
          <div className="flex flex-col gap-6">
            {profile.information.map((info, index) => (
              <div
                key={index}
                className="flex flex-col text-base lg:flex-row lg:justify-between text-right"
              >
                <p className="font-semibold text-left">{info.label}</p>
                <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hakkımda Bölümü */}
        <div className="flex flex-col w-full gap-5 p-6 lg:pt-9">
          <div className="relative text-2xl font-playfair font-semibold pl-2 after:content-[''] after:bg-[#82BBFF] after:block after:absolute after:rounded after:w-24 after:h-4 after:-z-50 after:left-0 after:top-4">
            {profile.aboutMe}
          </div>
          <p className="text-base leading-relaxed dark:text-gray-300">
            {profile.introText}
          </p>
          <p className="text-base leading-relaxed dark:text-gray-300">
            {profile.purposeText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
