import {useTranslation} from "react-i18next";
import {useInView} from 'react-intersection-observer';
import pc from "../../assets/hobby-pc.webp";
import reading from "../../assets/man-reading.webp";
import manga from "../../assets/manga.webp";
import {ThemeContext} from "../../context/ThemeContext";
import React, {useContext} from "react";
import {LinksComponent, TabContentComponent} from "../../components";
import ImageHelper from "../../helpers/ImageHelper";

const Hobbies = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const {t} = useTranslation();
  const imageClasses = `w-full h-full object-cover ${ImageHelper.getClassesForHover().join(" ")}`;
  const imageContainerClasses = "w-full h-full overflow-hidden";
  const themeContext = useContext(ThemeContext);

  const imagesBackgroundComponent = () => (
    <div className={"absolute top-0 right-0 left-0 bottom-0 w-full h-full columns-3 gap-0 overflow-hidden"}>
      <div className={`${imageContainerClasses}`}>
        <img className={`${imageClasses}`} src={pc} alt="hobby-pc"/>
      </div>
      <div className={`${imageContainerClasses}`}>
        <img className={`${imageClasses}`} src={reading} alt="hobby-reading"/>
      </div>
      <div className={`${imageContainerClasses}`}>
        <img className={`${imageClasses}`} src={manga} alt="hobby-manga"/>
      </div>
    </div>
  )

  return (
    <div className={"h-full w-full relative flex justify-center items-center"}>
      {
        imagesBackgroundComponent()
      }
      <TabContentComponent
        ref={ref}
        title={t("hobbies.title")}
        theme={themeContext.theme}
        className={inView ? "animate-hobbies-bounce" : "opacity-0"}
      >
        <div dangerouslySetInnerHTML={{ __html: t("hobbies.description") }}></div>
        <p className={"mt-10 mb-5"}>{t("hobbies.contact-me")}</p>
        <LinksComponent/>
      </TabContentComponent>
    </div>
  )
}

export default Hobbies;