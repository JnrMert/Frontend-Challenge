import React from "react";
import "../styles/Header.css";
import MyActions from "./MyActions";
import data from "../data/data";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  return <div>Header</div>;
  //dil
  const { language } = useLanguage();
  const { header } = data[language];

  return (
    <>
      <div className="container mx-auto bg-header dark:bg-myDarkC">
        <MyActions className="mt-20 pr-10 bg-slate-100 dark:bg-[_#2A262B]" />
        <div className="flex justify-end"></div>
        <div className="flex flex-wrap flex-col-reverse w-full mx-auto gap-10 lg:flex-row lg:flex-nowrap lg:max-w-6xl lg:pt-[151px] lg:pb-[94px] lg:w-9/12">
          <div className="dark:text-white flex flex-col gap-5 mx-auto text-center w-2/3 lg:text-left lg:w-1/2">
            <div className="relative text-2xl leading-none after:content-[''] after:bg-[#E92577] after:block after:rounded after:absolute after:w-32 after:h-[28px] after:-z-50 after:top-20 after:left-13">
              {header.greeting}
            </div>
            <div className="font-medium text-3xl">
              {header.introduction}
              <br />
              {header.profession}
              <br />
              {header.invitation}
            </div>
            <div></div>
            <div className="mt-9">
              <div className="flex gap-6 w-[84px] mx-auto pb-5 lg:mx-0">
                <a href="https://www.linkedin.com/in/yzcmert/" />
                <a href="https://github.com/JnrMert" />
              </div>
              <div className="pb-16 lg:pb-0">{header.contact}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
