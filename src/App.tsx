import React, {useState} from 'react';
import {InView} from 'react-intersection-observer';
import {Pages} from "./models";
import {Hobbies, Home, Works} from "./views";
import {MenuComponent} from "./components";
import {Theme, ThemeContext} from "./context/ThemeContext";
import ThemeHelper from "./helpers/ThemeHelper";
import "./App.scss";

const App = () => {
  const [ visiblePage, setVisiblePage ] = useState<Pages>(Pages.HOME);
  const [ currentTheme, setCurrentTheme ] = useState<Theme>(Theme.DARK);
  const threshold = 0.8;

  const handleMenuClick = (page: Pages) => {
    document.querySelector(`section.${page.toLowerCase()}`)?.scrollIntoView({behavior: "smooth"});
  }

  const handleViewPortScroll = (page: Pages) => {
    setVisiblePage(page);
  }

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === Theme.DARK ? Theme.WHITE : Theme.DARK);
  }

  return (
    <ThemeContext.Provider value={{theme: currentTheme, toggleTheme}}>
      <div className={`${ThemeHelper.bgColorBasedOnTheme(currentTheme)} App w-screen h-screen transition-all`}>
        <MenuComponent currentPage={visiblePage} onChangeCurrentPage={handleMenuClick}/>
        <InView threshold={threshold} as="section" className={`${Pages.HOME.toLowerCase()}`} onChange={(inView) => (inView && handleViewPortScroll(Pages.HOME))}>
          <Home/>
        </InView>
        <InView threshold={threshold} as="section" className={`${Pages.WORKS.toLowerCase()}`} onChange={(inView) => (inView && handleViewPortScroll(Pages.WORKS))}>
          <Works/>
        </InView>
        <InView threshold={threshold} as="section" className={`${Pages.HOBBIES.toLowerCase()}`} onChange={(inView) => (inView && handleViewPortScroll(Pages.HOBBIES))}>
          <Hobbies/>
        </InView>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
