import {Pages} from "../models";

interface IProps {
  currentPage: Pages
  onChangeCurrentPage: Function
}

const MenuComponent = (props: IProps) => {
  const {onChangeCurrentPage, currentPage} = props;
  const dotClasses = "dot rounded-full bg-stone-200 w-4 h-4 my-3 cursor-pointer transition-opacity";

  const cssDotSelected = (page: Pages): string => (page === currentPage ? "opacity-80" : "opacity-30");

  return (
    <div className={"fixed right-5 top-2/4 translate-y-[-70%] translate-x-[0%] z-50"}>
      <div onClick={() => onChangeCurrentPage(Pages.HOME)} className={`${dotClasses} ${cssDotSelected(Pages.HOME)}`}></div>
      <div onClick={() => onChangeCurrentPage(Pages.WORKS)} className={`${dotClasses} ${cssDotSelected(Pages.WORKS)}`}></div>
      <div onClick={() => onChangeCurrentPage(Pages.HOBBIES)} className={`${dotClasses} ${cssDotSelected(Pages.HOBBIES)}`}></div>
    </div>
  )
}

export default MenuComponent;