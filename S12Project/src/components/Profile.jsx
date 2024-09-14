import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Profile() {
  return <div>Profile</div>;
  const { language } = useLanguage();
  const { profile } = data[language];
}

export default Profile;
