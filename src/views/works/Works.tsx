import React, {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import desk from "../../assets/deks.webp";
import programming from "../../assets/programming.webp";
import {TabContentComponent} from "../../components";
import {Theme, ThemeContext} from "../../context/ThemeContext";
import ThemeHelper from "../../helpers/ThemeHelper";

enum Viewing {
  WORK,
  STUDIES
}

const Works = () => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [ tabContent, setTabContent ] = useState(Viewing.WORK);
  const [ tabWorkAnimation, setTabWorkAnimation ] = useState("");
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  const handleChangeTabContent = () => {
    setTabContent(tabContent === Viewing.WORK ? Viewing.STUDIES : Viewing.WORK);
    themeContext.toggleTheme();
    setTabWorkAnimation(tabContent === Viewing.WORK ? "animate-work-fade-out" : "animate-work-fade-in")
  }

  const fadeInImage = () => (inView ? "opacity-100" : "");

  return (
    <div className={`relative flex justify-center items-center sm:block transition-all p-9 w-full h-full ${ThemeHelper.bgColorBasedOnTheme(themeContext.theme)} ${ThemeHelper.textColorBasedOnTheme(themeContext.theme)}`}>
      <img ref={ref} className={`w-full h-full sm:w-9/12 md:w-7/12 sm:max-w-[800px] sm:max-h-[500px] absolute bottom-0 right-0 object-cover transition-opacity duration-500 ease-out opacity-0 ${fadeInImage()}`}
           src={tabContent === Viewing.STUDIES ? desk : programming} alt="pc-placeholder"/>
          <TabContentComponent
            icon={"fas fa-user-graduate"}
            iconText={t("works-tab.toggle")}
            title={t("works-tab.title")}
            theme={Theme.DARK}
            onTabChange={handleChangeTabContent}
            className={`${tabWorkAnimation} z-30 absolute top-10`}
          >
            <div dangerouslySetInnerHTML={{ __html: t("works-tab.description")}}></div>
            <ul className={"list-disc"}>
              <li>Interlogica (11-2019) - JS, TS, React (redux), Vue (vuex), Angular (NgRX), Docker, Bootstrap, Tailwind, NodeJS, PHP</li>
              <li>Egea tecnologie (10-2018 / 11-2019) - JS, Vue (vuex), bulma, NodeJS, C#</li>
              <li>Alpenite (06-2018 / 10-2018) - SFCC, NodeJS</li>
              <li>Easystima (05-2015 / 04-2018) - Visual Basic, MaterializeCSS</li>
              <li>GoodJOB (09-2014 / 05-2015) - Webmaster, Facebook, Twitter & Linkedin social media manager</li>
            </ul>
          </TabContentComponent>
          <TabContentComponent
            icon={"fas fa-code-branch"}
            iconText={t("works-tab.toggle")}
            title={t("study-tab.title")}
            theme={Theme.WHITE}
            onTabChange={handleChangeTabContent}
            className={`absolute top-10 duration-500 ease-out ${tabContent === Viewing.WORK ? "scale-75" : ""}`}
          >
            <div dangerouslySetInnerHTML={{ __html: t("study-tab.unive-description") }}></div>
            <ul className={"list-disc mt-3"}>
              <li>{t("study-tab.exams.algorithms")}</li>
              <li>{t("study-tab.exams.programming")}</li>
              <li>{t("study-tab.exams.database")}</li>
              <li>{t("study-tab.exams.web-design")}</li>
              <li>{t("study-tab.exams.tech-app-web")}</li>
            </ul>
            <div className={"mt-3"} dangerouslySetInnerHTML={{ __html: t("study-tab.itis-description") }}></div>
          </TabContentComponent>
    </div>
  )
}

export default Works;