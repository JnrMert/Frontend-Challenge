import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import data from "../data/data";

function Footer() {
  const { language } = useLanguage();
  const { footer } = data[language];

  return (
    <div className="footer-container container mx-auto bg-white dark:bg-myDarkG dark:text-white flex flex-col items-center pt-24 pb-6 lg:justify-center lg:flex-row">
      <div className="text-4xl font-medium text-center w-1/2 lg:text-center lg:p-6">
        <h3 className="font-playfair relative"></h3>
      </div>
      <div className="flex flex-col mt-3 font-medium links">
        <a href="https://github.com/jnrMert" className="text-[#1769FF]">
          {footer.links.github}
        </a>
        <a
          href="https://www.linkedin.com/in/yzcmert/"
          className="text-[#0077B5] linkedin"
        >
          {footer.links.linkedin}
        </a>
        <a href="mailto:yzc.mert@icloud.com" className="text-[#AF0C48] email">
          {footer.links.email}
        </a>
      </div>
    </div>
  );
}

export default Footer;
