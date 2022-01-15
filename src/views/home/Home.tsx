import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import bgPic from "../../assets/background.webp";
import profilePic from "../../assets/profile.jpg";
import {LinksComponent} from "../../components";

const Home = () => {
  const { t } = useTranslation();
  const [ opacity, setOpacity ] = useState<number>(1);
  const [ translateY, setTranslateY ] = useState<number>(0);


  useEffect(() => {
    const onScroll = () => {
      const sectionHeight = document.querySelector("section.home")?.clientHeight || 0;
      const currentPosition = document.querySelector("#root")?.scrollTop || 0;

      // Prevent useless calculation
      if (currentPosition < sectionHeight) {
        setOpacity(Math.max(0, 1 - Math.round(currentPosition * 100 / sectionHeight) / 90));
        setTranslateY(Math.round(currentPosition / 5));
      }
    }

    document.querySelector("#root")?.addEventListener("scroll", onScroll);
    return () => document.querySelector("#root")?.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"h-screen text-white flex flex-col justify-center items-center relative"} style={{ opacity }}>
      <div className={"absolute h-full w-full"} style={{ backgroundImage: `url(${bgPic})`, transform: `translateY(${translateY}px)` }}></div>
      <div className={"z-10"}>
        <img src={profilePic} alt="profile pic" className={"rounded-full"}/>
        <div className={"flex flex-col items-center my-5"}>
          <h1 className={"font-bold text-xl"}>Enrico Vettori</h1>
          <p>{t("home.job-description")}</p>
        </div>
        <LinksComponent/>
      </div>
    </div>
  )
}

export default Home;