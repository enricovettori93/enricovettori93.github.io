import React from "react";
import {Theme} from "../context/ThemeContext";
import ThemeHelper from "../helpers/ThemeHelper";

interface IProps {
  title: string
  theme: Theme
  onTabChange?: Function
  icon?: string
  iconText?: string
  className?: string
  children?: React.ReactNode
}

const TabContentComponent = React.forwardRef<any, IProps>((props, ref) => {
  const classes = [props.className, ThemeHelper.cardColorBasedOnTheme(props.theme), ThemeHelper.textColorBasedOnTheme(props.theme)];

  return (
    <div ref={ref} className={`bg-white z-10 intro overflow-y-auto bg-white h-[90%] w-[95%] sm:h-4/5 sm:w-9/12 md:w-9/12 lg:w-7/12 drop-shadow-2xl p-12 transition-all ${classes.join(" ")}`}>
      <div className={"flex justify-between mb-5"}>
        <p className={"text-xl font-bold"}>
          { props.title }
        </p>
        <div className={"flex items-center cursor-pointer"} onClick={() => props.onTabChange && props.onTabChange()}>
          {
            props.iconText && (
              <p className={"mr-4"}>{props.iconText}</p>
            )
          }
          {
            props.icon && (
              <i className={`${props.icon}`}></i>
            )
          }
        </div>
      </div>
      { props.children }
    </div>
  );
})

export default TabContentComponent;